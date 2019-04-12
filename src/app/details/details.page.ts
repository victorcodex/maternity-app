import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    public id: Number;
    public image: String;
    public name: string;
    public description: string;
    public location: string;
    public rate: string;

  constructor(private route: ActivatedRoute) {

      this.route.queryParams.subscribe(params => {
          this.id = params["id"];
          this.image = params["image"];
          this.name = params["name"];
          this.description = params["description"];
          this.location = params["location"];
          this.rate = params["rate"];
      });

  }

  ngOnInit() {
  }

}
