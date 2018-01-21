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

  username_id: String;
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
    this.username_id = '';
    this.restaurant_location = null;
    this.user_location = null;
    this.createDate = null;
    this.deliveryDate = null;
    this.status = [];
    this.totalPrice = null;
    this.comment = '';
    this.menuDetails = [];
    this.dishesDetails = [];
  }
}
