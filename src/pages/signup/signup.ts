import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/authentication/auth.service';
import { User } from '../../providers/models/user';
import {LoginPage} from "../login/login";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user: User;
  login: LoginPage;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private authService: AuthService) {
    this.login = new LoginPage(this.navCtrl,this.toastCtrl,this.authService);
    this.user = new User;
  }

  doSignup() {
    // Attempt to login in through our User service
    this.authService.signUp(this.user).subscribe((data) => {
      console.log(JSON.stringify(data));
      if (!data['success']) {
        // Unable to sign up
        let toast = this.toastCtrl.create({
          message: data['message'],
          duration: 3000,
          position: 'top'
        });
        toast.present();
      } else {
        this.login.doLogin(this.user);
      }
    });
  }
}
