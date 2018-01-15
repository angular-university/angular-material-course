import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

    form: FormGroup;
    title:string;

    constructor(
        fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) courseFormData: any) {

        this.title = courseFormData.description;

        this.form = fb.group({
            "description":["", Validators.required],
            "longDescription":["", Validators.required]
        });

        this.form.setValue(courseFormData);
    }



/*



longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular", …}
category:"BEGINNER"





*/


    ngOnInit() {


    }


    save() {

        this.dialogRef.close(this.form.value);


    }

    close() {
        this.dialogRef.close();
    }


}
