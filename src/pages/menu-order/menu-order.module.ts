import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuOrderPage } from './menu-order';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    MenuOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuOrderPage),
    PipesModule
  ],
})
export class MenuOrderPageModule {}
