import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { HttpClientModule } from '@angular/common/http'
import {TcnewsapiService} from './service/tcnewsapi.service';
import { TechComponent } from './tech/tech.component';
import { BuzzComponent } from './buzz/buzz.component';
import { SportComponent } from './sport/sport.component'

@NgModule({
  declarations: [
    AppComponent,
    TopheadlinesComponent,
    TechComponent,
    BuzzComponent,
    SportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TcnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
