

import {DataSource} from "@angular/cdk/collections";
import {Lesson} from "../model/lesson";
import {Observable} from "rxjs/Observable";
import {CoursesService} from "../services/courses.service";
import {Subject} from "rxjs/Subject";


export class LessonsDataSource extends DataSource<Lesson> {

    private subject = new Subject<Lesson[]>();

    constructor(private coursesService: CoursesService) {
        super();
    }

    loadLessons(courseId:number, filter:string, sortDirection:string, pageIndex:number, pageSize:number) {
         this.coursesService.findLessons(
            courseId,
            filter,
             sortDirection,
            pageIndex,
            pageSize)
             .subscribe(lessons => this.subject.next(lessons));
    }

    connect(): Observable<Lesson[]> {
        return this.subject;
    }

    disconnect(): void {
        this.subject.complete();
    }

}