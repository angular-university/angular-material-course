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
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        TopMenuComponent,
        CoursesCardListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        AppRoutingModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
