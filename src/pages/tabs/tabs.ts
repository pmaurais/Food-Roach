import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {SearchPage} from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
