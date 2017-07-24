import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InstagramService} from './instagram.service';
import {GoogleService} from './google.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [InstagramService, GoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
