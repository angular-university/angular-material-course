import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Course} from "../model/course";
import {MatDialog} from "@angular/material";
import {CourseDialogComponent} from "../course-dialog/course-dialog.component";

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    courses: Course[];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {



    }

    editCourse() {

        let dialogRef = this.dialog.open(CourseDialogComponent, {
            // height: '400px',
            // width: '600px',
            data: {payload: [1, 2, 3]}
        });

        dialogRef.backdropClick().subscribe(() => console.log("clicked on backdrop"));

        dialogRef.afterClosed().subscribe(result => {
            console.log('Dialog result: ', result);
        });

    }

}
