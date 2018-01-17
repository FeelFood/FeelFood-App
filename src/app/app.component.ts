import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';

import { AuthService } from "../providers/authentication/auth.service";
import {User} from "../providers/models/user";
import {MapHelper} from "../helpers/mapHelper";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;
  currentUser;
  user = new User();

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private authService: AuthService,
              private mapHelper: MapHelper) {
    if (localStorage.getItem("user") != null) {
      this.currentUser = JSON.parse(localStorage.getItem('user'));
      this.authService.getProfile(this.currentUser._id).subscribe(data => {
      this.user = this.mapHelper.map(User, data)
    });
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
