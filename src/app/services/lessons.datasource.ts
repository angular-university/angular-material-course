


import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {Lesson} from "../model/lesson";
import {CoursesService} from "./courses.service";



export class LessonsDataSource implements DataSource<Lesson> {

    constructor(private coursesService: CoursesService) {

    }

    connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
        return undefined;
    }

    disconnect(collectionViewer: CollectionViewer): void {
    }

}