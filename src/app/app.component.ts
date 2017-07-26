import { Component } from '@angular/core';
import {InstagramService} from './instagram.service';
import {GoogleService} from './Google.service';
import {GeonameService} from './Geoname.service';
import {Media} from './Media';
import {Location} from './Location';
import {Country} from './Country';
declare var transmitData: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  media: Media[] = [];
  data: String[][] = [];

  constructor(
    private instagramService: InstagramService,
    private googleService: GoogleService,
    private geonameService: GeonameService,
  ) {}

  renderData() {
    console.log(this.data);
    transmitData(this.data);
  }

  getInstagramMedia() {
    this.instagramService.getInstagramMedia().then(media => {
      this.media = media;
      for (let i = 0; i < this.media.length; i++) {
        if (this.media[i].location !== null) {
          const location = this.media[i].location;
          this.geonameService.getCountry(location.latitude, location.longitude).then(data => {
            const country = data;
            const temp: String[] = [];
            temp.push(country.countryCode);
            this.data.push(temp);
          });
        }
      }
      this.renderData();
    });
  }
}
