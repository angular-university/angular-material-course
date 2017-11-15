import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Course} from "../model/course";

@Component({
    selector: 'course-card-list',
    templateUrl: './course-card-list.component.html',
    styleUrls: ['./course-card-list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CourseCardListComponent implements OnInit {

    @Input()
    courses: Course[];

    constructor() {
    }

    ngOnInit() {
    }

}
