import { Menu } from "./menu";
import { Dish } from "./dish";
import {DateTime} from "ionic-angular";

export class Order {
  restaurant_id:  String;
  restaurant: String;
  restaurant_location: {
    locationName: String,
    address: String,
    postalCode: Number,
    country: String,
    city: String,
    lat: Number,
    lng: Number
  };

  user_id: String;
  user_location: {
    locationName: String,
    address: String,
    postalCode: Number,
    country: String,
    city: String,
    lat: Number,
    lng: Number
  };

  createDate: Date;
  deliveryDate: Date;
  status: Array<{ state: String, dataState: Date }>;
  totalPrice: Number;
  comment: String;

  menuDetails: Array<Menu>;
  dishesDetails: Array<Dish>;

  constructor(){
    this.restaurant_id = '';
    this.user_id = '';
    this.status = [];
    this.comment = '';
    this.dishesDetails = [];
    this.menuDetails = [];
  }
}
