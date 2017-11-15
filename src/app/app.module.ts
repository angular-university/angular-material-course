import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from "@angular/common/http";
import {CoursesResolver} from "./services/courses.resolver";
import {MatTabsModule} from '@angular/material/tabs';
import { CourseCardListComponent } from './course-card-list/course-card-list.component';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        HomeComponent,
        AboutComponent,
        CourseCardListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        AppRoutingModule
    ],
    providers: [
        CoursesResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
