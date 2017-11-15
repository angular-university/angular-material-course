


import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { map} from 'rxjs/operators';

@Injectable()
export class CoursesResolver implements Resolve<Course[]> {

    constructor(private http: HttpClient) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Course[]> {
        return this.http.get("/api/courses")
            .pipe(map(res => res['payload']));
    }

}
