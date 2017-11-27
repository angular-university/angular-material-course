import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material";
import {Lesson} from "../model/lesson";
import {findCourseById, findLessonsForCourse} from "../model/db-data";
import {Course} from "../model/course";


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    course:Course;

    displayedColumns = ["description", "duration"];

    dataSource = new MatTableDataSource<Lesson>();

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.route.params.subscribe(params => {

            const courseId = params['id'];

            this.course = findCourseById(courseId);

            this.dataSource.data = findLessonsForCourse(courseId);

        });

    }

    searchLesson(search:string) {

        search = search.trim();
        search = search.toLowerCase();

        this.dataSource.filter = search;
    }

}
