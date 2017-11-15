


import {Request, Response} from "express";
import {COURSES} from "./db-data";


export function readAllCourses(req: Request, res: Response) {

    res.status(200).json({payload: Object.values(COURSES)});


}
