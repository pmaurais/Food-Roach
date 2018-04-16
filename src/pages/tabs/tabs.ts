import { Component } from '@angular/core';

import { FavoritesPage } from '../favorties/favorites';
import { CreateEventPage } from '../createEvent/createEvent';
import {SearchPage} from '../search/search';
import { AccountPage} from "../account/account";
import { AlertsPage } from "../alerts/alerts";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root =  FavoritesPage;
  tab3Root = CreateEventPage ;
  tab4Root = AlertsPage;
  tab5Root = AccountPage;

  constructor() {

  }
}
