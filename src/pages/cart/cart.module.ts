import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartPage } from './cart';
import { PipesModule } from "../../pipes/pipes.module";
import {EnvironmentHelper} from "../../providers/environments/environment";

@NgModule({
  declarations: [
    CartPage,
  ],
  imports: [
    IonicPageModule.forChild(CartPage),
    PipesModule
  ],
  providers:[EnvironmentHelper]
})
export class CartPageModule {}
