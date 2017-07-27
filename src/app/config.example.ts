import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  private tokenInstagram: String = 'ENTER-INSTAGRAM-TOKEN';
  private tokenGoogle: String = 'ENTER-GOOGLE-TOKEN';
  private tokenGeoname: String= 'ENTER-GEONAME-TOKEN';
  constructor() {
  }
  getKeyInstagram(): String {
    return this.tokenInstagram;
  }
  getKeyGoogle(): String {
    return this.tokenGoogle;
  }
  getKeyGeoname(): String {
    return this.tokenGeoname;
  }
}
