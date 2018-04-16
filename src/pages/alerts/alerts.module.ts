import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertsPage } from './alerts';

@NgModule({
  declarations: [
    AlertsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertsPage),
  ],
})
export class AlertsPageModule {}
