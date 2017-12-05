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
  private loginErrorString: string;
  user: User;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private authService: AuthService) {
    this.user = new User;
  }

  // Attempt to login in through our User service
  doLogin() {
    this.authService.login(this.user).subscribe((resp) => {
      this.navCtrl.push(TabsPage);
    }, (err) => {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
