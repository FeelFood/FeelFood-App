import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/authentication/auth.service';
import { User } from '../../providers/models/user';
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: User;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private authService: AuthService) {
    this.user = new User;
  }

  // Attempt to login in through our User service
  doLogin(user) {
    this.authService.login(user).subscribe((data) => {
        console.log(JSON.stringify(data));
        if (!data['success']) {
          // Unable to log in
          let toast = this.toastCtrl.create({
            message: data['message'],
            duration: 3000,
            position: 'top'
          });
          toast.present();
        } else {
          this.authService.storeUserData(data['token'], data['user']);
          this.navCtrl.push(TabsPage);
        }
      });
  }
}
