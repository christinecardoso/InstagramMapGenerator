import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  private tokenInstagram: String = 'ENTER-INSTAGRAM-TOKEN';
  private tokenGoogle: String = 'ENTER-GOOGLE-TOKEN';
  constructor() {
  }
  getKeyInstagram(): String {
    return this.tokenInstagram;
  }
  getKeyGoogle(): String {
    return this.tokenGoogle;
  }
}
