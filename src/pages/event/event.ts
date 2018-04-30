import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {EventData} from "../../app/EventData";

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public EventData: EventData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
}
