import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { MapHelper } from "../../helpers/mapHelper";

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
  ],
  providers: [MapHelper]
})
export class DashboardPageModule {}
