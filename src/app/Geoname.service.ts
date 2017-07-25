/**
 * created by MarlaN. 25.07.2017
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/Rx';
import {Config} from './config';

@Injectable()
export class GeonameService {
    private keyGeoname: String;
    private url = 'http://ws.geonames.org/countryCodeJSON?lat=';
    options: RequestOptions;
    constructor(private http: Http) {
        this.keyGeoname = new Config().getKeyGeoname();
    }
    getCountry(lat: String, long: String): Promise<any> {
        const urlGeoname = this.url+lat+"&lng="+long+"&username="+ this.keyGeoname;
        return this.http.get(urlGeoname).toPromise()
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
        return body;
    }

}
