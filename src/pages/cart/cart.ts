import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapHelper } from "../../helpers/mapHelper";
import { CartProvider } from "../../providers/cart/cart";
import {HttpClient} from "@angular/common/http";
import {Order} from "../../providers/models/order";
import {Menu} from "../../providers/models/menu";
import {Dish} from "../../providers/models/dish";
import { AuthService } from "../../providers/authentication/auth.service";
import {User} from "../../providers/models/user";

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage{
  order: Order;
  url = 'http://localhost:3001/orders';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private mapHelper: MapHelper,
              private cartProvider: CartProvider,
              public http: HttpClient,
              private AuthSrv: AuthService){
    this.order = this.cartProvider.order;
  }

  ionViewWillEnter(){
    this.order = this.cartProvider.order;
  }

  totalPrice(){
    var price = 0;
    this.order.dishesDetails.forEach(function(dish){
      price += +dish.price;
    });
    this.order.menuDetails.forEach(function(menu){
      price += +menu.starters[0].price;
      price += +menu.firstOptions[0].price;
      price += +menu.secondOptions[0].price;
      price += +menu.thirdOptions[0].price;
      price += +menu.drinksOptions[0].price;
      price += +menu.othersOptions[0].price;
    });
    return price;
  }

  fillOrder(){
    this.order.createDate = new Date(Date.now());
    this.order.username_id = JSON.parse(localStorage.getItem('user'))._id;
    var currentUser = JSON.parse(localStorage.getItem('user'));
    this.order.username_id = currentUser._id;
    this.order.restaurant_id = this.cartProvider.restaurant_id;
    this.order.totalPrice = this.totalPrice();
  }

  reset(){
    this.cartProvider.reset();
    this.order = this.cartProvider.order;
  }

  makeOrder(){
    this.fillOrder();
    this.http.post(this.url, JSON.stringify(this.order), this.AuthSrv.options).subscribe(res => function(){});
    //this.cartProvider.reset();
    //this.reset();
  }
}
