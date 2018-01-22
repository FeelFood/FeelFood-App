import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Order} from "../../providers/models/order";
import {CartProvider} from "../../providers/cart/cart";
import {Dish} from "../../providers/models/dish";
import { ToastController } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  dish: Dish;
  restaurant_id;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cartProvider: CartProvider,
              private toastCtrl: ToastController) {
    this.dish = navParams.get("order");
    this.restaurant_id = navParams.get("id");
  }

  add(){
    if(!this.cartProvider.addDish(this.restaurant_id, this.dish)){
      let toast = this.toastCtrl.create({
        message: 'You have uncompleted orders on another restaurant',
        duration: 1500,
        position: 'bottom'
      });
      toast.present();
    }
  }

}
