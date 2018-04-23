import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DateModalPage } from './date-modal';

@NgModule({
  declarations: [
    DateModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DateModalPage),
  ],
})
export class DateModalPageModule {}
