import { Component } from '@angular/core';
import {InstagramService} from './instagram.service';
import {GoogleService} from './Google.service';
import {GeonameService} from './Geoname.service';
import {Media} from './Media';
import {Location} from './Location';
import {Country} from './Country';

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
    private geonameService: GeonameService
  ) {}

  getInstagramMedia() {
    this.instagramService.getInstagramMedia().then(media => {
      this.media = media;
      for (let i = 0; i < this.media.length; i++) {
        if(this.media[i].location !== null){
          let location = this.media[i].location;
          this.geonameService.getCountry(location.latitude,location.longitude).then(data => {
            let country = data;
            console.log(country.countryCode);
          });
        }
      }
    });
  }
}
