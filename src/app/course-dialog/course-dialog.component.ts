import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CourseDialogComponent implements OnInit {

    form: FormGroup;
    title:string;

    constructor(
        fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) courseData: any) {

        this.title = courseData.description;

        this.form = fb.group({
            "description":["", Validators.required]
        });

        console.log("courseData", courseData);

        this.form.setValue(courseData);
    }



/*



longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular", …}
category:"BEGINNER"





*/


    ngOnInit() {


    }


    close() {

        this.dialogRef.close(this.form.value);


    }


}
