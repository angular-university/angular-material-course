import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs/Observable";
import {map, filter} from "rxjs/operators";
import {COURSES} from "../model/db-data";
import {of} from "rxjs/observable/of";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {

        const courses$ = of<Course[]>(Object.values(COURSES));

        this.beginnerCourses$ = courses$.pipe(
            map( courses => courses.filter(course => course.category === 'BEGINNER'))
        );

        this.advancedCourses$ = courses$.pipe(
            map( courses => courses.filter(course => course.category === 'ADVANCED'))
        );
    }

}
