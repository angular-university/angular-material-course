import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Lesson} from "../model/lesson";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {startWith,tap} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {LessonsDataSource} from "./lessons.datasource";

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, AfterViewInit {

    course:Course;

    displayedColumns = ["seqNo", "description", "duration"];

    dataSource: LessonsDataSource;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild('searchInput') searchInput: HTMLInputElement;

    constructor(private route: ActivatedRoute, private coursesService: CoursesService) {

    }

    ngOnInit() {
        this.course = this.route.snapshot.data["course"];
        this.dataSource = new LessonsDataSource(this.coursesService);
    }

    ngAfterViewInit() {

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge( this.sort.sortChange, this.paginator.page )
            .pipe(
                startWith(null),
                tap(() => this.dataSource.loadLessons(this.course.id, this.searchInput.value, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize))
            )
            .subscribe();
    }

}
