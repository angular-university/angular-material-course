import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CourseComponent } from './course/course.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule, MatSortModule} from "@angular/material";
import {MatPaginatorModule} from '@angular/material/paginator';
import {CoursesService} from "./services/courses.service";
import {HttpClientModule} from "@angular/common/http";
import {CourseResolver} from "./services/course.resolver";
import {FormsModule} from "@angular/forms";

import 'rxjs/add/observable/fromEvent';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        CoursesCardListComponent,
        CourseComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        AppRoutingModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule
    ],
    providers: [
        CoursesService,
        CourseResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
