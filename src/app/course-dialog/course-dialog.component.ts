import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CourseDialogComponent implements OnInit {


    constructor(private dialogRef: MatDialogRef<CourseDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

        console.log("received data", data);

    }


    ngOnInit() {


    }


    close() {

        this.dialogRef.close({data: [1, 2, 3]});

    }


}
