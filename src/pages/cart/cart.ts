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
import {EnvironmentHelper} from "../../providers/environments/environment";

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage{
  order: Order;
  user:User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private mapHelper: MapHelper,
              private cartProvider: CartProvider,
              public http: HttpClient,
              private AuthSrv: AuthService,
              private EnvHelper: EnvironmentHelper){
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
      price += +menu.price;
    });
    return price;
  }

  fillOrder(){
    this.order.createDate = new Date(Date.now());
    var currentUser = JSON.parse(localStorage.getItem('user'));
    this.order.user_id = currentUser._id;
    this.order.restaurant_id = this.cartProvider.restaurant_id;
    this.order.totalPrice = this.totalPrice();
  }

  reset(){
    this.cartProvider.reset();
    this.order = this.cartProvider.order;
  }

  makeOrder(){
    this.fillOrder();
    this.http.post(this.EnvHelper.urlbase + this.EnvHelper.urlDictionary.restaurant.orders,
      JSON.stringify(this.order), this.AuthSrv.options).subscribe(res => function(){
      this.cartProvider.reset();
      this.reset();
    });

  }
}
