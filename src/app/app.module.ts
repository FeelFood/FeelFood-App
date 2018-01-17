import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from "../pages/welcome/welcome";
import { LoginPage} from "../pages/login/login";
import { SignupPage} from "../pages/signup/signup";
import { CartPage } from "../pages/cart/cart";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { AuthService } from "../providers/authentication/auth.service";
import { LoginPageModule } from "../pages/login/login.module";
import { SignupPageModule } from "../pages/signup/signup.module";
import { RestaurantPageModule } from "../pages/restaurant/restaurant.module";
import { CartPageModule } from "../pages/cart/cart.module";

import { MapHelper } from "../helpers/mapHelper";
import { CartProvider } from '../providers/cart/cart';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    WelcomePage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    SignupPageModule,
    HttpClientModule,
    RestaurantPageModule,
    CartPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    DashboardPage,
    CartPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    MapHelper,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CartProvider,
  ]
})
export class AppModule {}
