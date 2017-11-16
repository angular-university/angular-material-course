import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {COURSES} from "../model/db-data";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnerCourses: Course[];

    advancedCourses: Course[];

    constructor() {

    }

    ngOnInit() {

        const courses = Object.values(COURSES);

        this.beginnerCourses = courses.filter(course => course.category === 'BEGINNER');

        this.advancedCourses = courses.filter(course => course.category === 'ADVANCED');
    }

}
