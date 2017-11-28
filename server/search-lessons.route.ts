


import {Request, Response} from 'express';
import {LESSONS} from "./db-data";



export function searchLessons(req: Request, res: Response) {

    const queryParams = req.query;

    const filter = queryParams.filter,
          sortOrder = queryParams.order,
          pageNumber = parseInt(queryParams.pageNumber),
          pageSize = parseInt(queryParams.pageSize);

    let lessons = Object.values(LESSONS).sort((l1, l2) => l1.id - l2.id);

    if (filter) {
       lessons = lessons.filter(lesson => lesson.description.toLowerCase().search(filter) >= 0);
    }

    if (sortOrder === "desc") {
        lessons = lessons.reverse();
    }

    const initialPos = (pageNumber - 1) * pageSize;

    const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);


    res.status(200).json({payload: lessonsPage});
}