import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CoursesResolver} from "./services/courses.resolver";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        resolve: {
            courses: CoursesResolver
        }

    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
