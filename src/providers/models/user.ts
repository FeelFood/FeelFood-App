
import { Location } from './location';
import { Restaurant } from './restaurant';
import {Allergy} from "./allergy";

export class User {
    username: String;
    password: String;
    email: String;
    firstName: String;
    lastName: String;
    locations: Array<Location>;
    allergies: Array<Allergy>;
    favoriteRestaurants: Array<Restaurant>;
    // orders: [Schema.Types.ObjectId, ref: 'orders' }],
    // isAdmin: Boolean
}

export function mapNewObject(data) {
    let myUser = new User();
    let keyList = Object.keys(data);
    for (let index = 0; index < keyList.length; index++) {
        let key = keyList[index];
        myUser[key] = data[key];
    }
    return myUser;
}
