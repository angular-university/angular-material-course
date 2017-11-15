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

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
