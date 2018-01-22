import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../providers/models/user";
import { Restaurant } from "../../providers/models/restaurant";
import { Allergy } from "../../providers/models/allergy";
import { AuthService } from "../../providers/authentication/auth.service";
import { MapHelper} from "../../helpers/mapHelper";
import { HttpClient } from "@angular/common/http";
import { Order } from "../../providers/models/order";


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage{

  currentUser;
  user = new User();
  view: String;


  constructor(private authService: AuthService, private mapHelper: MapHelper, private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.authService.getProfile(this.currentUser._id).subscribe(data => {
      this.user = this.mapHelper.map(User, data);
      this.view = "profile";
    });
  }
}
