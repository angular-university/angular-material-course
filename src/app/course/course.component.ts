import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material";
import {Lesson} from "../model/lesson";
import {findLessonsForCourse} from "../model/db-data";


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CourseComponent implements OnInit {

    displayedColumns = ["description", "duration"];

    dataSource = new MatTableDataSource<Lesson>();

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.route.params.subscribe(params => {

            console.log("Course", params['id']);

            const courseLessons = findLessonsForCourse(params['id']);

            console.log('lessons:', courseLessons);

            this.dataSource.data = courseLessons;

        });

    }

}
