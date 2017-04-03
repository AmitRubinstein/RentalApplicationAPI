import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
    declarations: [
        AppComponent
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRouting
    ],
    providers: [  
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }