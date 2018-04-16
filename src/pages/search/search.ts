import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {DateModalPage} from "../date-modal/date-modal";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openDateModal() {
    let dateModal = this.modalCtrl.create(DateModalPage);
    dateModal.present();
  }
}
