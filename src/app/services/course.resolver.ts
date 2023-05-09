import {inject} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "./courses.service";


export function courseResolver(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

  const coursesService = inject(CoursesService);

  return coursesService.findCourseById(route.params['id']);

}
