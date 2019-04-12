import { Component } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {

  }

    public gotToDetailsPage(id, image, name, description, location, rate) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "id": id,
                'image': image,
                "name": name,
                "description": description,
                "location": location,
                "rate": rate
            }
        };
        this.router.navigate(["details"], navigationExtras);
    }

}
