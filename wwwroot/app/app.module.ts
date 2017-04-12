import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/Rx';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRouting } from './app.routing';
import { NavBarComponent } from './components/navbar/navbar.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent
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