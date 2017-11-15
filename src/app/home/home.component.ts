import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.data.pipe(map(data => data['courses']));
  }

}
