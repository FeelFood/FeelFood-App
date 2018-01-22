import { Location } from './location';
import { Menu } from './menu';
import { Dish } from './dish';

export class Restaurant {
  _id: String;
  username: String;
  password: String;
  email: String;
  tags: {
    homeDelivery: boolean,
    takeAway: boolean,
    description: Array<[
      {
        name: String,
        value: Number
      }]>;
  };
  name: String;
  images: {
    type:[{
      name: String,
      url: String
  }]};
  phone: Number;
  location: Array<Location>;
  menus: Array<Menu>;
  dishes: Array<Dish>;
}
