import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from "../models/dish";
import { Menu } from "../models/menu";
import {Order} from "../models/order";

@Injectable()
export class CartProvider {
  restaurant_id: String;
  dishes: Dish[];
  order: Order;

  constructor(public http: HttpClient) {
    this.dishes = [];
    this.order = new Order();
    this.restaurant_id = '';
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

  public addMenu(menuOrder){
    if(menuOrder.restaurant_id=='' || menuOrder.restaurant_id==this.restaurant_id){
      this.restaurant_id = menuOrder.restaurant_id;
      this.order.restaurant_id = menuOrder.restaurant_id;
      this.order.menuDetails.push(menuOrder.menuDetails);
      return true;
    }
    return false;
  }

  public reset(){
    this.restaurant_id = '';
    this.dishes = [];
    this.order = new Order();
  }
}
