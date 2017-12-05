import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/authentication/auth.service';
import { User } from '../../providers/models/user';
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  private signupErrorString: string;
  user: User;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private authService: AuthService) {
    this.user = new User;
  }

  doSignup() {
    // Attempt to login in through our User service
    this.authService.signUp(this.user).subscribe((resp) => {
      this.navCtrl.push(TabsPage);
    }, (err) => {
      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
