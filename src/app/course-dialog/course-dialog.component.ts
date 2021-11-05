import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
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

    form = this.fb.group({
       description: ['', Validators.required],
       category: ["BEGINNER",  Validators.required],
       releasedAt: [new Date(), Validators.required],
       longDescription: ["", Validators.required]
    });

    constructor(private fb: FormBuilder) {


    }

    ngOnInit() {

    }

    close() {

    }

    save() {

    }
}

