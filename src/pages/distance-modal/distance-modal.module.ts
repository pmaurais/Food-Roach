import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistanceModalPage } from './distance-modal';

@NgModule({
  declarations: [
    DistanceModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DistanceModalPage),
  ],
})
export class DistanceModalPageModule {}
