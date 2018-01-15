import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Course} from "../model/course";

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CourseDialogComponent implements OnInit {

    course:Course;

    constructor(private dialogRef: MatDialogRef<CourseDialogComponent>, @Inject(MAT_DIALOG_DATA) data: any) {

        this.course = data;

    }


/*



description: "Angular for Beginners",
iconUrl: "https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png",
courseListIcon: "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png",
longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular", …}
category:"BEGINNER"
courseListIcon:"https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png"
description:"Angular for Beginners"
iconUrl:"https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png"




*/


    ngOnInit() {


    }


    close() {

        this.dialogRef.close(this.course);

    }


}
