


import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {Lesson} from "../model/lesson";



export class LessonsDataSource implements DataSource<Lesson> {

    connect(collectionViewer: CollectionViewer): Observable<Lesson[]> {
        return undefined;
    }

    disconnect(collectionViewer: CollectionViewer): void {
    }

}