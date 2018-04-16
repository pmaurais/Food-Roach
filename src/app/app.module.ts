import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { AlertsPage } from '../pages/alerts/alerts';
import { AccountPage } from "../pages/account/account";
import { FavoritesPage } from "../pages/favorties/favorites";
import {CreateEventPage } from "../pages/createEvent/createEvent";
import {DateModalPage} from "../pages/date-modal/date-modal";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    CreateEventPage,
    SearchPage,
    TabsPage,
    AlertsPage,
    AccountPage,
    DateModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    CreateEventPage,
    SearchPage,
    TabsPage,
    AlertsPage,
    AccountPage,
    DateModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
