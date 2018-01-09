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
  fullRestaurantList;

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private mapHelper: MapHelper) {
    this.initializeItems()
  }

  initializeItems(){
    this.http.get(this.url).subscribe(data => {
      this.fullRestaurantList = data;
      this.restaurants = this.fullRestaurantList;
    });
  }

  getItems(ev: any) {
    this.restaurants = this.fullRestaurantList;
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.restaurants = this.restaurants.filter((restaurant) => {
        return (restaurant.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  viewRestaurant(data){
    let restaurant = this.mapHelper.map(Restaurant, data);
    this.navCtrl.push('RestaurantPage', {restaurant});
  }
}
