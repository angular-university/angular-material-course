import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA,  MatDialog,  MatDialogConfig,  MatDialogRef} from '@angular/material/dialog';
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
       description: [this.course.description, Validators.required],
       category: [this.course.category,  Validators.required],
       releasedAt: [new Date(), Validators.required],
       longDescription: [this.course.longDescription, Validators.required]
    });

    constructor(private fb: FormBuilder,
                @Inject(MAT_DIALOG_DATA) private course:Course,
                private dialogRef: MatDialogRef<CourseDialogComponent>) {

        this.description = course.description;

    }

    ngOnInit() {

    }

    close() {

        this.dialogRef.close();

    }

    save() {

        this.dialogRef.close(this.form.value);

    }
}


export function openEditCourseDialog(dialog: MatDialog, course:Course) {

    const config = new MatDialogConfig();

    config.disableClose = true;
    config.autoFocus = true;
    config.panelClass = "modal-panel";
    config.backdropClass = "backdrop-modal-panel";

    config.data = {
        ...course
    };

    const dialogRef = dialog.open(CourseDialogComponent, config);

    return dialogRef.afterClosed();
}









