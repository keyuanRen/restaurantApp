import { Component } from '@angular/core';

import { AccountPage } from '../account/account';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MenuPage;
  tab3Root = AccountPage;

  constructor() {

  }
}
