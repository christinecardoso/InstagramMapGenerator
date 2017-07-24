import { Component } from '@angular/core';
import {InstagramService} from './instagram.service';
import {GoogleService} from './google.service';
import {Media} from './Media';
import {Location} from './Location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  media: Media[] = [];
  constructor(
    private instagramService: InstagramService,
    private googleService: GoogleService,
  ) {}

  getInstagramMedia() {
    this.instagramService.getInstagramMedia().then(media => {
      this.media = media;
      for (let i = 0; i < this.media.length; i++) {
        if(this.media[i].location !== null){
          let location = this.media[i].location;
          this.googleService.getGeolocation(location.latitude,location.longitude).then(data => {
            console.log(data);
            //TODO get country code from address component
          });
        }
      }
    });
  }
}
