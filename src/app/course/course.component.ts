import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Lesson} from "../model/lesson";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";



@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

    course:Course;

    displayedColumns = ["seqNo", "description", "duration"];

    dataSource = new MatTableDataSource<Lesson>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    constructor(private route: ActivatedRoute, private coursesService: CoursesService) {

    }

    ngOnInit() {

        this.course = this.route.snapshot.data["course"];

        this.coursesService.findLessons(this.course.id)
            .subscribe(lessons => this.dataSource.data = lessons);


    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    searchLesson(search = '') {

        search = search.trim();
        search = search.toLowerCase();

        this.dataSource.filter = search;
    }

}
