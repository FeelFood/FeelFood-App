import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Menu } from "../../providers/models/menu";
import { CartProvider} from "../../providers/cart/cart";
import { ToastController } from "ionic-angular";
import {Order} from "../../providers/models/order";

@IonicPage()
@Component({
  selector: 'page-menu-order',
  templateUrl: 'menu-order.html',
})
export class MenuOrderPage {
  menu: Menu;
  order: Menu;
  restaurant_id;
  starters;
  firstOption;
  secondOption;
  thirdOption;
  drinksOption;
  othersOption;
  id;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public cartProvider: CartProvider,
              private toastCtrl: ToastController) {
    this.menu = navParams.get("order");
    this.order = new Menu();
    this.restaurant_id = navParams.get("id");
  }

  add(){
    this.order.name = this.menu.name;
    this.order.description = this.menu.description;
    this.order.visible = this.menu.visible;
    this.order.comments = this.menu.comments;
    this.order.starters[0] = this.menu.starters[this.starters];
    this.order.firstOptions[0] = this.menu.firstOptions[this.firstOption];
    this.order.secondOptions[0] = this.menu.secondOptions[this.secondOption];
    this.order.thirdOptions[0] = this.menu.thirdOptions[this.thirdOption];
    this.order.drinksOptions[0] = this.menu.drinksOptions[this.drinksOption];
    this.order.othersOptions[0] = this.menu.othersOptions[this.othersOption];
    this.order.price = this.menu.price;

    if(!this.cartProvider.addMenu(this.restaurant_id, this.order)){
      let toast = this.toastCtrl.create({
        message: 'You have uncompleted orders on another restaurant',
        duration: 1500,
        position: 'bottom'
      });
      toast.present();
    }
  }

}
