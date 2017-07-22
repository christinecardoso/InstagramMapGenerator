/**
 * created by MarlaN. 22.07.2017
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Config} from './config';

@Injectable()
export class InstagramService {
  private headers: Headers;
  private key: String;
  // --add proxy for CORS
  private url = 'https://crossorigin.me/https://api.instagram.com/v1/users/self/media/recent/?access_token=';
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
    this.key = new Config().getKey();
  }
  getInstagramMedia(): Promise<any> {
    const urlInstagram = this.url + this.key;
    return this.http.get(urlInstagram, this.options).toPromise()
      .then(this.extractDataGet)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    const noResults: Array<any> = [];
    return Promise.resolve(noResults);
  }

  private extractDataGet(res: Response) {
    const body = res.json();
    return body;
  }
}
