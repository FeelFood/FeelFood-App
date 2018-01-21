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
  order: Order;
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
    this.id = navParams.get("id");
    this.order = new Order();
  }

  add(){
    this.order.restaurant_id = this.id;
    this.order.menuDetails['starters'] = this.menu[this.starters];
    this.order.menuDetails['firstOptions'] = this.menu[this.firstOption];
    this.order.menuDetails['secondOptions'] = this.menu[this.secondOption];
    this.order.menuDetails['thirdOptions'] = this.menu[this.thirdOption];
    this.order.menuDetails['drinksOptions'] = this.menu[this.drinksOption];
    this.order.menuDetails['othersOptions'] = this.menu[this.othersOption];


    if(!this.cartProvider.addMenu(this.order)){
      let toast = this.toastCtrl.create({
        message: 'You have uncompleted orders on another restaurant',
        duration: 1500,
        position: 'bottom'
      });
      toast.present();
    }
  }

}
