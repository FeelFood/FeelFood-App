import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  url= 'http://localhost:3001/restaurants';
  restaurants
  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.http.get(this.url).subscribe(data => {
      this.restaurants = data;
    });
  }

  restaurant(){
    this.navCtrl.push('RestaurantPage');
  }
}
