

import {DataSource} from "@angular/cdk/collections";
import {Lesson} from "../model/lesson";
import {Observable} from "rxjs/Observable";
import {CoursesService} from "../services/courses.service";
import {Subject} from "rxjs/Subject";
import {finalize, catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


export class LessonsDataSource extends DataSource<Lesson> {

    private lessonsSubject = new BehaviorSubject<Lesson[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private coursesService: CoursesService) {
        super();
    }

    loadLessons(courseId:number, filter:string, sortDirection:string, pageIndex:number, pageSize:number) {

        this.loadingSubject.next(true);

        this.coursesService.findLessons(courseId, filter, sortDirection, pageIndex, pageSize)
            .pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(lessons => this.lessonsSubject.next(lessons));
    }

    connect(): Observable<Lesson[]> {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    }

    disconnect(): void {
        console.log("Disconnecting data source");
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    }

}