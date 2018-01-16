import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

    form: FormGroup;
    title: string;

    constructor(fb: FormBuilder,
                private dialogRef: MatDialogRef<CourseDialogComponent>,
                @Inject(MAT_DIALOG_DATA) {description,longDescription, category }: Course) {

        this.title = description;

        this.form = fb.group({
            "description": [description, Validators.required],
            "longDescription": [longDescription, Validators.required],
            "category": [category, Validators.required],
            "releasedAt": [moment(), Validators.required],
        });

    }



    ngOnInit() {


    }


    save() {

        this.dialogRef.close(this.form.value);


    }

    close() {
        this.dialogRef.close();
    }


}
