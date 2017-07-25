import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InstagramService} from './instagram.service';
import {GoogleService} from './Google.service';
import {GeonameService} from './Geoname.service';
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
  providers: [InstagramService, GoogleService, GeonameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
