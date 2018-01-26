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

    description:string;

    constructor(
        @Inject(MAT_DIALOG_DATA) {description,longDescription, category}:Course ) {

        this.description = description;

    }

    ngOnInit() {

    }


    save() {


    }

    close() {

    }

}
