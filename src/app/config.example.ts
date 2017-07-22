import { Injectable } from '@angular/core';

@Injectable()
export class Config {
  private _config: String = 'ENTER-INSTAGRAM-ACCESS-TOKEN';
  constructor() {
  }
  getKey(): String {
    return this._config;
  }
}
