import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from "../models/dish";
import { Menu } from "../models/menu";
import {Order} from "../models/order";
import {User} from "../models/user";
import {MapHelper} from "../../helpers/mapHelper";

@Injectable()
export class CartProvider {
  restaurant_id: String;
  dishes: Dish[];
  order: Order;

  constructor(public http: HttpClient, private mapHelper: MapHelper) {
    this.dishes = [];
    this.restaurant_id = '';
    this.order = new Order();
  }

  public addDish(restaurant_id, dish){
    if(this.order.restaurant_id=='' || this.order.restaurant_id==restaurant_id){
      this.restaurant_id = restaurant_id;
      this.order.restaurant_id = restaurant_id;
      this.order.dishesDetails.push(dish);
      return true;
    }
    return false;
  }

  public addMenu(restaurant_id, menuOrder){
    if(this.restaurant_id=='' || menuOrder.restaurant_id==this.restaurant_id){
      this.restaurant_id = restaurant_id;
      this.order.restaurant_id = restaurant_id;
      this.order.menuDetails.push(menuOrder);
      console.log(this.order);
      return true;
    }
    else return false;
  }

  public reset(){
    this.restaurant_id = '';
    this.dishes = [];
    this.order = new Order();
  }
}
