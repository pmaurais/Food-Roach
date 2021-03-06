import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {DateModalPage} from "../date-modal/date-modal";
import {DistanceModalPage} from "../distance-modal/distance-modal";
import {FilterModalPage} from "../filter-modal/filter-modal";
import {EventData} from "../../app/EventData";
import {EventPage} from "../event/event";


@Component({
  selector: 'page-search',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          FoodRoach
        </ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>

      <ion-searchbar style=" background-color: white" class="searchbar"
                     [(ngModel)]="SearchInput"
                     [showCancelButton]="shouldShowCancel"
                     (ionInput)="onInput($event)"
                     (ionCancel)="onCancel($event)">
      </ion-searchbar>

      <div style="text-align: center">
        <button ion-button color="light" class="filterButton" (click)="openDateModal()" style="margin-right: 15px">
          Date
        </button>
        <button ion-button color="light" class="filterButton" (click)="openDistanceModal()">Distance</button>
        <button ion-button color="light" class="filterButton" style="margin-left: 15px" (click)="openFilterModal()">
          Filters
        </button>
      </div>


      <div *ngFor="let event of FilterList" class="card">
        <div class="card_image">
          <img src={{event.image}} alt="" class="image" (click)="openEventModal()" >
        </div>

        <div class="cardContent">
          <p class="cardContentName">{{event.name}}</p>
          <button class="cardContentButton2">
            <ion-icon ios="ios-star" md="md-star"></ion-icon>
          </button>
          <button class="cardContentButton"><i class="material-icons"></i>
            <ion-icon ios="ios-share" md="md-share"></ion-icon>
          </button>
          <div class="tag-buttons">
            <button class="button-tags" ion-button>{{event.date}}</button>
            <button class="button-tags" ion-button>{{event.type}}</button>
            <button class="button-tags" ion-button>{{event.food}}</button>
            <button class="button-tags" ion-button>{{event.distance}}</button>

          </div>

          <div class="titleSocial">Follow me</div>
          <ul class="menuSocial">
            <li class="menuSocialItem"><a class="menuSocialItemLink icon-twitter"></a></li>
            <li class="menuSocialItem"><a class="menuSocialItemLink icon-facebook2"></a></li>
            <li class="menuSocialItem"><a href="https://plus.google.com/u/0/+JuanAntonioBeatoQui%C3%B1ones/posts"
                                          class="menuSocialItemLink icon-google-plus2"></a></li>
            <li class="menuSocialItem"><a href="https://es.linkedin.com/in/juanbeato"
                                          class="menuSocialItemLink icon-linkedin2"></a></li>
          </ul>
        </div>
      </div>
    </ion-content>
  `
})

export class SearchPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public EventData: EventData) {
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
  openEventModal() {
    let eventModal = this.modalCtrl.create(EventPage);
    eventModal.present();
  }
  EventList = this.EventData.EventList;
  FilterList = this.EventData.FilterList;


}
