import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Course} from "../model/course";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CourseDialogComponent} from "../course-dialog/course-dialog.component";

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    courses: Course[];

    constructor() {
    }

    ngOnInit() {

    }

    editCourse({description, longDescription, category}:Course) {

    }

}
