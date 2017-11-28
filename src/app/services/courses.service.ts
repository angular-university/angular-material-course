

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Course} from "../model/course";
import {map} from "rxjs/operators";


@Injectable()
export class CoursesService {

    constructor(private http:HttpClient) {

    }

    findCourseById(courseId: number): Observable<Course> {
        return this.http.get<Course>(`/api/courses/${courseId}`);
    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get('/api/courses')
            .pipe(
                map(res => res['payload'])
            );
    }

    findLessons(courseId:number, filter = '', sortOrder = 'asc', pageNumber = 1, pageSize = 3) {



    }

}