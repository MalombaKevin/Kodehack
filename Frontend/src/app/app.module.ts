import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./Components/home/home.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncatePipePipe } from './Pipes/truncate-pipe.pipe';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
    declarations: [
        AppComponent,
    
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NavbarComponent,
        FooterComponent,
        TruncatePipePipe,
        HttpClientModule
       
    ]
})
export class AppModule { }
