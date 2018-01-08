import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Restaurant} from "../../providers/models/restaurant";


@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  public restaurant = new Restaurant();

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.restaurant = navParams.get("restaurant");
  }

}
