import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapHelper } from "../../helpers/mapHelper";
import { Restaurant } from "../../providers/models/restaurant";
import { OrderPage } from "../order/order";
import { MenuOrderPage } from "../menu-order/menu-order";


@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',

})
export class RestaurantPage {
  public restaurant = new Restaurant();
  dishType = "menu";


  constructor(public navCtrl: NavController, public navParams: NavParams, private mapHelper: MapHelper){
    this.restaurant = navParams.get("restaurant");
  }

  openOrders(dish){
    this.navCtrl.push('OrderPage', {dish});
  }

  openMenuOrders(menu){
    this.navCtrl.push('MenuOrderPage', {menu});
  }
}
