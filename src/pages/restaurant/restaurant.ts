import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapHelper } from "../../helpers/mapHelper";
import { Restaurant } from "../../providers/models/restaurant";
import { MenuOrderPage } from "../menu-order/menu-order";
import {Dish} from "../../providers/models/dish";
import {Menu} from "../../providers/models/menu";


@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  public restaurant = new Restaurant();
  dishType;


  constructor(public navCtrl: NavController, public navParams: NavParams, private mapHelper: MapHelper){
    this.restaurant = navParams.get("restaurant");
    this.dishType = "menu";
  }

  openOrders(dish){
    let order = this.mapHelper.map(Dish, dish);
    let id = this.restaurant._id;
    this.navCtrl.push('OrderPage', {order, id});
  }

  openMenuOrders(menu){
    let order = this.mapHelper.map(Menu, menu);
    let id = this.restaurant._id;
    this.navCtrl.push('MenuOrderPage', {order, id});
  }
}
