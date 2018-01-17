import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantPage } from './restaurant';
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    RestaurantPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantPage),
    PipesModule
  ],
})
export class RestaurantPageModule {}
