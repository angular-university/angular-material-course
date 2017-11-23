import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseComponent implements OnInit {

  constructor(private route: ActivatedRoute ) {

      route.params.subscribe(params => {

          console.log("Course", params['id']);

      });

  }

  ngOnInit() {

  }

}
