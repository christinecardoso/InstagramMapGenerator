import { Component } from '@angular/core';
import {InstagramService} from './instagram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private instagramService: InstagramService,
  ) {}

  getInstagramMedia() {
    this.instagramService.getInstagramMedia().then(media => console.log(media));
  }
}
