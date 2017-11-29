import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatSort} from "@angular/material";
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";
import {debounceTime, distinctUntilChanged, startWith, tap, timeout} from 'rxjs/operators';
import {merge} from "rxjs/observable/merge";
import {fromEvent} from 'rxjs/observable/fromEvent';
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

    @ViewChild('searchInput') searchInput: ElementRef;

    constructor(private route: ActivatedRoute, private coursesService: CoursesService) {

    }

    ngOnInit() {
        this.course = this.route.snapshot.data["course"];
        this.dataSource = new LessonsDataSource(this.coursesService);
    }

    ngAfterViewInit() {

        setTimeout(() => {

            this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

            // on sort or page change, load a new page
            merge( this.sort.sortChange, this.paginator.page )
                .pipe(
                    startWith(null),
                    tap(() => this.loadLessonsPage())
                )
                .subscribe();

            // if a new search is available, load a new page
            fromEvent(this.searchInput.nativeElement, 'keyup')
                .pipe(
                    debounceTime(150),
                    distinctUntilChanged(),
                    tap(() => {
                        this.paginator.pageIndex = 0;
                        this.loadLessonsPage();
                    })
                )
                .subscribe();


        });
    }


    loadLessonsPage() {
        console.log("Loading lessons page ...");
        this.dataSource.loadLessons(this.course.id, this.searchInput.nativeElement.value, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    }

}
