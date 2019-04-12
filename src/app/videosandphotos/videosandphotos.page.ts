import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videosandphotos',
  templateUrl: './videosandphotos.page.html',
  styleUrls: ['./videosandphotos.page.scss'],
})
export class VideosandphotosPage implements OnInit {

    videosandphotos: string = "photos";

  constructor() { }

  ngOnInit() {
  }

}
