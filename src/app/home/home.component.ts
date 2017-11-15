import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs/Observable";
import {map, filter} from "rxjs/operators";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {

        const courses$ = this.route.data.pipe(map( data => data['courses']));

        this.beginnerCourses$ = courses$.pipe(
            map( courses => courses.filter(course => course.category === 'BEGINNER'))
        );

        this.advancedCourses$ = courses$.pipe(
            map( courses => courses.filter(course => course.category === 'ADVANCED'))
        );
    }

}
