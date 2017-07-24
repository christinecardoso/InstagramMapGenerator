/**
 * created by MarlaN. 24.07.2017
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/Rx';
import {Config} from './config';

@Injectable()
export class GoogleService {
    private keyGoogle: String;
    private url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
    options: RequestOptions;
    constructor(private http: Http) {
        this.keyGoogle = new Config().getKeyGoogle();
    }
    getGeolocation(lat: String, long: String): Promise<any> {
        const urlGoogle = this.url+lat+","+long+"&key="+ this.keyGoogle;
        console.log(urlGoogle);
        return this.http.get(urlGoogle).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        const noResults: Array<any> = [];
        return Promise.resolve(noResults);
    }

    private extractData(res: Response) {
        const body = res.json();
        console.log(body);
        return body;
    }

}
