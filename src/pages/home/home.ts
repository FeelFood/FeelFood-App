import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from "../../providers/models/restaurant";
import { MapHelper } from "../../helpers/mapHelper";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  url = 'http://localhost:3001/restaurants';
  restaurants;
  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private mapHelper: MapHelper
    ) {
    this.http.get(this.url).subscribe(data => {
      this.restaurants = data;
    });
  }

  viewRestaurant(data){
    let restaurant = this.mapHelper.map(Restaurant, data);
    this.navCtrl.push('RestaurantPage', {restaurant});
  }
}
