import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {DateModalPage} from "../date-modal/date-modal";
import {DistanceModalPage} from "../distance-modal/distance-modal";
import {FilterModalPage} from "../filter-modal/filter-modal";

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

  openDistanceModal() {
    let distanceModal = this.modalCtrl.create(DistanceModalPage);
    distanceModal.present();
  }

  openFilterModal() {
    let filterModal = this.modalCtrl.create(FilterModalPage);
    filterModal.present();
  }
}
