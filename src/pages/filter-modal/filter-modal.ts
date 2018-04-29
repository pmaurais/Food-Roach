import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {EventData} from "../../app/EventData";

/**
 * Generated class for the FilterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-modal',
  templateUrl: 'filter-modal.html',
})
export class FilterModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public EcentData: EventData) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModalPage');
  }

  updateType($scope){
    if ($scope.Formal==true){
      EventData
    } else{

    }

    if ($scope.Informal==true){

    } else{

    }
  }

  updateFood($scope){

  }

  updateDiet($scope){

  }

}
