import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantDashboardPage } from './restaurant-dashboard';

@NgModule({
  declarations: [
    RestaurantDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantDashboardPage),
  ],
})
export class RestaurantDashboardPageModule {}
