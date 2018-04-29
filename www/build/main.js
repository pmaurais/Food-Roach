webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DateModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DateModalPage = /** @class */ (function () {
    function DateModalPage(navCtrl, navParams, viewCtrl, datePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.datePicker = datePicker;
    }
    DateModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    DateModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DateModalPage');
    };
    DateModalPage.prototype.showDatePicker = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return console.log('Got date: ', date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    DateModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-date-modal',template:/*ion-inline-start:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\date-modal\date-modal.html"*/'<!--\n\n  Generated template for the DateModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Select a date</ion-title>\n\n    <button ion-button block (click)="closeModal()">Close</button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label>Date</ion-label>\n\n    <button (click)="showDatePicker()">Select Date</button>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\date-modal\date-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_date_picker__["a" /* DatePicker */]])
    ], DateModalPage);
    return DateModalPage;
}());

//# sourceMappingURL=date-modal.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertsPage = /** @class */ (function () {
    function AlertsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlertsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertsPage');
    };
    AlertsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alerts',template:/*ion-inline-start:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\alerts\alerts.html"*/'<!--\n\n  Generated template for the AlertsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>alerts</ion-title>\n\n  </ion-navbar>\n\n\n\n\n\n  <div class="Message" id="js-timer">\n\n    <div class="Message-icon">\n\n      <i class="fa fa-bell-o"></i>\n\n    </div>\n\n    <div class="Message-body">\n\n      <p>This is a simple, but friendly, notification.</p>\n\n      <p class="u-italic">It will disappear within a few seconds.</p>\n\n    </div>\n\n    <button class="Message-close js-messageClose"><i class="fa fa-times"></i></button>\n\n  </div>\n\n\n\n  <div class="Message Message--orange">\n\n    <div class="Message-icon">\n\n      <i class="fa fa-exclamation"></i>\n\n    </div>\n\n    <div class="Message-body">\n\n      <p>This is a simple notification with a brighter color...</p>\n\n      <p>If you bring you mouse here you can close it manually.</p>\n\n    </div>\n\n    <button class="Message-close js-messageClose"><i class="fa fa-times"></i></button>\n\n  </div>\n\n\n\n\n\n  <div class="Message Message--green">\n\n    <div class="Message-icon">\n\n      <i class="fa fa-check"></i>\n\n    </div>\n\n    <div class="Message-body">\n\n      <p>This is a message telling you that everything is a-okay!</p>\n\n      <p>Good job, and good riddance.</p>\n\n    </div>\n\n    <button class="Message-close js-messageClose"><i class="fa fa-times"></i></button>\n\n  </div>\n\n\n\n\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\alerts\alerts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AlertsPage);
    return AlertsPage;
}());

//# sourceMappingURL=alerts.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistanceModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DistanceModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DistanceModalPage = /** @class */ (function () {
    function DistanceModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    DistanceModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    DistanceModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DistanceModalPage');
    };
    DistanceModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-distance-modal',template:/*ion-inline-start:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\distance-modal\distance-modal.html"*/'<!--\n  Generated template for the DistanceModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select Distance</ion-title>\n    <button ion-button block (click)="closeModal()">Close</button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <p></p>\n    <P></P>\n  </div>\n  <ion-list>\n    <ion-list-header>\n      Distance\n      <ion-badge item-end>{{distance}}</ion-badge>\n    </ion-list-header>\n    <ion-item>\n\n      <ion-range min="0" max="10" step="0.25" [(ngModel)]="distance">\n        <ion-label range-left>0 Miles</ion-label>\n        <ion-label range-right>10 Miles</ion-label>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\distance-modal\distance-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], DistanceModalPage);
    return DistanceModalPage;
}());

//# sourceMappingURL=distance-modal.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FilterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterModalPage = /** @class */ (function () {
    function FilterModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    FilterModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    FilterModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterModalPage');
    };
    FilterModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter-modal',template:/*ion-inline-start:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\filter-modal\filter-modal.html"*/'<!--\n  Generated template for the FilterModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select Filters</ion-title>\n    <button ion-button block (click)="closeModal()">Close</button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item-group> serve\n    <ion-item-divider color="light">Type of Event</ion-item-divider>\n    <ion-item>\n      <ion-label >Formal</ion-label>\n      <ion-checkbox [(ngModel)]="Formal"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Informal </ion-label >\n      <ion-checkbox [(ngModel)]="Informal"></ion-checkbox>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Type of Food</ion-item-divider>\n    <ion-item>\n      <ion-label >Italian</ion-label>\n      <ion-checkbox [(ngModel)]="Italian"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >American</ion-label>\n      <ion-checkbox [(ngModel)]="American"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Mexican</ion-label>\n      <ion-checkbox [(ngModel)]="Mexican"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Korean</ion-label>\n      <ion-checkbox [(ngModel)]="Korean"></ion-checkbox>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Dietary Restrictions</ion-item-divider>\n    <ion-item>\n      <ion-label >Vegan</ion-label>\n      <ion-checkbox [(ngModel)]="Vegan"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Vegitarian</ion-label>\n      <ion-checkbox [(ngModel)]="Vegitarian"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Halal</ion-label>\n      <ion-checkbox [(ngModel)]="Halal"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Kosher</ion-label>\n      <ion-checkbox [(ngModel)]="Kosher"></ion-checkbox>\n    </ion-item>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\filter-modal\filter-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], FilterModalPage);
    return FilterModalPage;
}());

//# sourceMappingURL=filter-modal.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\account\account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-input type="email" placeholder="Email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="password" placeholder="Password"></ion-input>\n  </ion-item>\n\n  <div style="text-align: center">\n    <p></p>\n    <button>Login</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\account\account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		283,
		4
	],
	"../pages/alerts/alerts.module": [
		280,
		3
	],
	"../pages/date-modal/date-modal.module": [
		279,
		2
	],
	"../pages/distance-modal/distance-modal.module": [
		281,
		1
	],
	"../pages/filter-modal/filter-modal.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorties_favorites__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createEvent_createEvent__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alerts_alerts__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__favorties_favorites__["a" /* FavoritesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__createEvent_createEvent__["a" /* CreateEventPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__alerts_alerts__["a" /* AlertsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Search" tabIcon="md-search"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Favorites" tabIcon="md-heart"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Create Event" tabIcon="md-bug"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Alerts" tabIcon="md-alert"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Account" tabIcon="md-person"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\favorties\favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Favorites\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="PoF">\n\n      <ion-segment-button value="F">\n\n        Upcoming\n\n      </ion-segment-button>\n\n      <ion-segment-button value="P">\n\n        Past\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div style="position: relative;">\n\n\n\n      <div class="container">\n\n        <div id="timeline">\n\n          <div class="timeline-item">\n\n            <div class="timeline-icon">\n\n              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20" xml:space="preserve">\n\n<path fill="#FFFFFF" d="M19.998,6.766l-5.759-0.544c-0.362-0.032-0.676-0.264-0.822-0.61l-2.064-4.999\n\n	c-0.329-0.825-1.5-0.825-1.83,0L7.476,5.611c-0.132,0.346-0.462,0.578-0.824,0.61L0.894,6.766C0.035,6.848-0.312,7.921,0.333,8.499\n\n	l4.338,3.811c0.279,0.246,0.395,0.609,0.314,0.975l-1.304,5.345c-0.199,0.842,0.708,1.534,1.468,1.089l4.801-2.822\n\n	c0.313-0.181,0.695-0.181,1.006,0l4.803,2.822c0.759,0.445,1.666-0.23,1.468-1.089l-1.288-5.345\n\n	c-0.081-0.365,0.035-0.729,0.313-0.975l4.34-3.811C21.219,7.921,20.855,6.848,19.998,6.766z"/>\n\n</svg>\n\n\n\n            </div>\n\n            <div style = "width: 290px;" class="card">\n\n              <div class="card_image">\n\n                <img src="http://www.thechinesequest.com/wp-content/uploads/2014/08/Chinese-food-facts.jpg" alt="" class="image">\n\n              </div>\n\n\n\n              <div class="cardContent">\n\n                <p class="cardContentName">China Night</p>\n\n                <button class="cardContentButton2">  <ion-icon ios="ios-star" md="md-star"></ion-icon> </button>\n\n                <button class="cardContentButton"><i class="material-icons"></i> <ion-icon ios="ios-share" md="md-share"></ion-icon> </button>\n\n                <div class ="tag-buttons">\n\n                  <button class = "button-tags"  ion-button  >Apr 6</button>\n\n                  <button class = "button-tags"  ion-button  >Formal</button>\n\n                  <button class = "button-tags"  ion-button  >Asian</button>\n\n                  <button class = "button-tags"  ion-button  >600 ft</button>\n\n\n\n                </div>\n\n\n\n                <div class="titleSocial">Follow me</div>\n\n                <ul class="menuSocial">\n\n                  <li class="menuSocialItem"><a class="menuSocialItemLink icon-twitter"></a></li><li class="menuSocialItem"><a class="menuSocialItemLink icon-facebook2"></a></li><li class="menuSocialItem"><a href="https://plus.google.com/u/0/+JuanAntonioBeatoQui%C3%B1ones/posts" class="menuSocialItemLink icon-google-plus2"></a></li><li class="menuSocialItem"><a href="https://es.linkedin.com/in/juanbeato" class="menuSocialItemLink icon-linkedin2"></a></li>\n\n                </ul>\n\n              </div>\n\n\n\n            </div>\n\n          </div>\n\n\n\n          <div class="timeline-item">\n\n            <div class="timeline-icon">\n\n              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20" xml:space="preserve">\n\n<g>\n\n	<path fill="#FFFFFF" d="M17.92,3.065l-1.669-2.302c-0.336-0.464-0.87-0.75-1.479-0.755C14.732,0.008,7.653,0,7.653,0v5.6\n\n		c0,0.096-0.047,0.185-0.127,0.237c-0.081,0.052-0.181,0.06-0.268,0.02l-1.413-0.64C5.773,5.183,5.69,5.183,5.617,5.215l-1.489,0.65\n\n		c-0.087,0.038-0.19,0.029-0.271-0.023c-0.079-0.052-0.13-0.141-0.13-0.235V0H2.191C1.655,0,1.233,0.434,1.233,0.97\n\n		c0,0,0.025,15.952,0.031,15.993c0.084,0.509,0.379,0.962,0.811,1.242l2.334,1.528C4.671,19.905,4.974,20,5.286,20h10.307\n\n		c1.452,0,2.634-1.189,2.634-2.64V4.007C18.227,3.666,18.12,3.339,17.92,3.065z M16.42,17.36c0,0.464-0.361,0.833-0.827,0.833H5.341\n\n		l-1.675-1.089h10.341c0.537,0,0.953-0.44,0.953-0.979V2.039l1.459,2.027V17.36L16.42,17.36z"/>\n\n</g>\n\n</svg>\n\n\n\n            </div>\n\n            <div style = "width: 290px;" class="card">\n\n              <div class="card_image">\n\n                <img src="http://www.thechinesequest.com/wp-content/uploads/2014/08/Chinese-food-facts.jpg" alt="" class="image">\n\n              </div>\n\n\n\n              <div class="cardContent">\n\n                <p class="cardContentName">China Night</p>\n\n                <button class="cardContentButton2">  <ion-icon ios="ios-star" md="md-star"></ion-icon> </button>\n\n                <button class="cardContentButton"><i class="material-icons"></i> <ion-icon ios="ios-share" md="md-share"></ion-icon> </button>\n\n                <div class ="tag-buttons">\n\n                  <button class = "button-tags"  ion-button  >Apr 6</button>\n\n                  <button class = "button-tags"  ion-button  >Formal</button>\n\n                  <button class = "button-tags"  ion-button  >Asian</button>\n\n                  <button class = "button-tags"  ion-button  >600 ft</button>\n\n\n\n                </div>\n\n\n\n                <div class="titleSocial">Follow me</div>\n\n                <ul class="menuSocial">\n\n                  <li class="menuSocialItem"><a class="menuSocialItemLink icon-twitter"></a></li><li class="menuSocialItem"><a class="menuSocialItemLink icon-facebook2"></a></li><li class="menuSocialItem"><a href="https://plus.google.com/u/0/+JuanAntonioBeatoQui%C3%B1ones/posts" class="menuSocialItemLink icon-google-plus2"></a></li><li class="menuSocialItem"><a href="https://es.linkedin.com/in/juanbeato" class="menuSocialItemLink icon-linkedin2"></a></li>\n\n                </ul>\n\n              </div>\n\n\n\n            </div>\n\n          </div>\n\n\n\n\n\n          <div class="timeline-item">\n\n            <div class="timeline-icon">\n\n              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20" xml:space="preserve">\n\n<path fill="#FFFFFF" d="M19.998,6.766l-5.759-0.544c-0.362-0.032-0.676-0.264-0.822-0.61l-2.064-4.999\n\n	c-0.329-0.825-1.5-0.825-1.83,0L7.476,5.611c-0.132,0.346-0.462,0.578-0.824,0.61L0.894,6.766C0.035,6.848-0.312,7.921,0.333,8.499\n\n	l4.338,3.811c0.279,0.246,0.395,0.609,0.314,0.975l-1.304,5.345c-0.199,0.842,0.708,1.534,1.468,1.089l4.801-2.822\n\n	c0.313-0.181,0.695-0.181,1.006,0l4.803,2.822c0.759,0.445,1.666-0.23,1.468-1.089l-1.288-5.345\n\n	c-0.081-0.365,0.035-0.729,0.313-0.975l4.34-3.811C21.219,7.921,20.855,6.848,19.998,6.766z"/>\n\n</svg>\n\n\n\n            </div>\n\n            <div style = "width: 290px;" class="card">\n\n              <div class="card_image">\n\n                <img src="http://www.thechinesequest.com/wp-content/uploads/2014/08/Chinese-food-facts.jpg" alt="" class="image">\n\n              </div>\n\n\n\n              <div class="cardContent">\n\n                <p class="cardContentName">China Night</p>\n\n                <button class="cardContentButton2">  <ion-icon ios="ios-star" md="md-star"></ion-icon> </button>\n\n                <button class="cardContentButton"><i class="material-icons"></i> <ion-icon ios="ios-share" md="md-share"></ion-icon> </button>\n\n                <div class ="tag-buttons">\n\n                  <button class = "button-tags"  ion-button  >Apr 6</button>\n\n                  <button class = "button-tags"  ion-button  >Formal</button>\n\n                  <button class = "button-tags"  ion-button  >Asian</button>\n\n                  <button class = "button-tags"  ion-button  >600 ft</button>\n\n\n\n                </div>\n\n\n\n                <div class="titleSocial">Follow me</div>\n\n                <ul class="menuSocial">\n\n                  <li class="menuSocialItem"><a class="menuSocialItemLink icon-twitter"></a></li><li class="menuSocialItem"><a class="menuSocialItemLink icon-facebook2"></a></li><li class="menuSocialItem"><a href="https://plus.google.com/u/0/+JuanAntonioBeatoQui%C3%B1ones/posts" class="menuSocialItemLink icon-google-plus2"></a></li><li class="menuSocialItem"><a href="https://es.linkedin.com/in/juanbeato" class="menuSocialItemLink icon-linkedin2"></a></li>\n\n                </ul>\n\n              </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      </div>\n\n      </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\favorties\favorites.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateEventPage = /** @class */ (function () {
    function CreateEventPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CreateEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createEvent',template:/*ion-inline-start:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\createEvent\createEvent.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Create Event\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item-group>\n    <ion-item-divider color="light">Name of event</ion-item-divider>\n    <ion-item>\n      <ion-input type="text" value="" [(ngModel)]="EName"></ion-input>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Date of Event</ion-item-divider>\n    <ion-item>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="EDate"></ion-datetime>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Time of Event</ion-item-divider>\n    <ion-item>\n      <ion-datetime displayFormat="h:m A" [(ngModel)]="Etime"></ion-datetime>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Location</ion-item-divider>\n    <ion-item>\n      <ion-label color="primary" floating>Address</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="EAdd"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>City</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="ECity"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>State</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="EState"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Zip</ion-label>\n      <ion-input type="text" value="" [(ngModel)]="EZip"></ion-input>\n    </ion-item>\n  </ion-item-group>\n\n\n  <ion-item-group>\n    <ion-item-divider color="light">Type of Cuisine</ion-item-divider>\n    <ion-item>\n      <ion-select [(ngModel)]="ETypeOfCuisine" multiple="true">\n        <ion-option value="Italian">Italian</ion-option>\n        <ion-option value="American">American</ion-option>\n        <ion-option value="Mexican">Mexican</ion-option>\n        <ion-option value="Korean">Korean</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item-group>\n      <ion-item-divider color="light">Dietary Restrictions</ion-item-divider>\n        <ion-item>\n          <ion-label>Vegan</ion-label>\n          <ion-checkbox [(ngModel)]="EVegan"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Vegitarian</ion-label>\n          <ion-checkbox [(ngModel)]="EVegitarian"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Halal</ion-label>\n          <ion-checkbox [(ngModel)]="EHalal"></ion-checkbox>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Kosher</ion-label>\n          <ion-checkbox [(ngModel)]="EKosher"></ion-checkbox>\n        </ion-item>\n\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color="light">Event type</ion-item-divider>\n      <ion-list radio-group [(ngModel)]="EType">\n        <ion-item>\n          <ion-label>Formal</ion-label>\n          <ion-radio value="formal" checked></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Informal</ion-label>\n          <ion-radio value="informal"></ion-radio>\n        </ion-item>\n\n      </ion-list>\n    </ion-item-group>\n\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Upload A Photo</ion-item-divider>\n\n      <button>Upload</button>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Submit</ion-item-divider>\n\n    <button>Submit</button>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Paul\WebstormProjects\FoodRoach\src\pages\createEvent\createEvent.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], CreateEventPage);
    return CreateEventPage;
}());

//# sourceMappingURL=createEvent.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_modal_date_modal__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__distance_modal_distance_modal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_modal_filter_modal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_EventData__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, modalCtrl, EventData) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.EventData = EventData;
        this.EventList = this.EventData.EventList;
    }
    SearchPage.prototype.openDateModal = function () {
        var dateModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__date_modal_date_modal__["a" /* DateModalPage */]);
        dateModal.present();
    };
    SearchPage.prototype.openDistanceModal = function () {
        var distanceModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__distance_modal_distance_modal__["a" /* DistanceModalPage */]);
        distanceModal.present();
    };
    SearchPage.prototype.openFilterModal = function () {
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__filter_modal_filter_modal__["a" /* FilterModalPage */]);
        filterModal.present();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',
            template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>\n          FoodRoach\n        </ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n\n      <ion-searchbar style=\" background-color: white\" class=\"searchbar\"\n                     [(ngModel)]=\"SearchInput\"\n                     [showCancelButton]=\"shouldShowCancel\"\n                     (ionInput)=\"onInput($event)\"\n                     (ionCancel)=\"onCancel($event)\">\n      </ion-searchbar>\n\n      <div class=\"dem-buttons\" style=\"text-align: center\">\n        <button ion-button color=\"light\" class=\"filterButton\" (click)=\"openDateModal()\" style=\"margin-right: 15px\">\n          Date\n        </button>\n        <button ion-button color=\"light\" class=\"filterButton\" (click)=\"openDistanceModal()\">Distance</button>\n        <button ion-button color=\"light\" class=\"filterButton\" style=\"margin-left: 15px\" (click)=\"openFilterModal()\">\n          Filters\n        </button>\n      </div>\n\n\n      <div *ngFor=\"let event of EventList\" class=\"card\">\n        <div class=\"card_image\">\n          <img src={{event.image}} alt=\"\" class=\"image\">\n        </div>\n\n        <div class=\"cardContent\">\n          <p class=\"cardContentName\">{{event.name}}</p>\n          <button class=\"cardContentButton2\">\n            <ion-icon ios=\"ios-star\" md=\"md-star\"></ion-icon>\n          </button>\n          <button class=\"cardContentButton\"><i class=\"material-icons\"></i>\n            <ion-icon ios=\"ios-share\" md=\"md-share\"></ion-icon>\n          </button>\n          <div class=\"tag-buttons\">\n            <button class=\"button-tags\" ion-button>{{event.date}}</button>\n            <button class=\"button-tags\" ion-button>{{event.type}}</button>\n            <button class=\"button-tags\" ion-button>{{event.food}}</button>\n            <button class=\"button-tags\" ion-button>{{event.distance}}</button>\n\n          </div>\n\n          <div class=\"titleSocial\">Follow me</div>\n          <ul class=\"menuSocial\">\n            <li class=\"menuSocialItem\"><a class=\"menuSocialItemLink icon-twitter\"></a></li>\n            <li class=\"menuSocialItem\"><a class=\"menuSocialItemLink icon-facebook2\"></a></li>\n            <li class=\"menuSocialItem\"><a href=\"https://plus.google.com/u/0/+JuanAntonioBeatoQui%C3%B1ones/posts\"\n                                          class=\"menuSocialItemLink icon-google-plus2\"></a></li>\n            <li class=\"menuSocialItem\"><a href=\"https://es.linkedin.com/in/juanbeato\"\n                                          class=\"menuSocialItemLink icon-linkedin2\"></a></li>\n          </ul>\n        </div>\n      </div>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__app_EventData__["a" /* EventData */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EventData = /** @class */ (function () {
    function EventData() {
        this.EventList = [{ image: "http://www.thechinesequest.com/wp-content/uploads/2014/08/Chinese-food-facts.jpg", name: "China Night", date: "Apr 6", type: "Formal", food: "Asian", distance: "600ft" }, { image: "https://butterwithasideofbread.com/wp-content/uploads/2013/07/Greek-Chicken-Souvlaki-with-Lemon-Rice.BSB_.IMG_0509.jpg", name: "American Night", date: "Apr 8", type: "Informal", food: "American", distance: "750ft" }, { image: "https://05714042a2232aa91807ef46-qgjpdebgroop4m.netdna-ssl.com/wp-content/uploads/2017/05/Hahn-Speaking.png", name: "Scott Hahn Meet and Greet", date: "Apr 12", type: "Informal", food: "American", distance: "750ft" }];
    }
    EventData.prototype.addEvent = function (image, name, date, type, food, distance) {
        this.EventList.push({ image: image, name: name, date: date, type: type, food: food, distance: distance });
    };
    ;
    EventData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[EvenDate]'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], EventData);
    return EventData;
}());

//# sourceMappingURL=EventData.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_alerts_alerts__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorties_favorites__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_createEvent_createEvent__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_date_modal_date_modal__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_distance_modal_distance_modal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_filter_modal_filter_modal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__EventData__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_favorties_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_createEvent_createEvent__["a" /* CreateEventPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_alerts_alerts__["a" /* AlertsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_date_modal_date_modal__["a" /* DateModalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_distance_modal_distance_modal__["a" /* DistanceModalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_filter_modal_filter_modal__["a" /* FilterModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/date-modal/date-modal.module#DateModalPageModule', name: 'DateModalPage', segment: 'date-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alerts/alerts.module#AlertsPageModule', name: 'AlertsPage', segment: 'alerts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/distance-modal/distance-modal.module#DistanceModalPageModule', name: 'DistanceModalPage', segment: 'distance-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-modal/filter-modal.module#FilterModalPageModule', name: 'FilterModalPage', segment: 'filter-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_favorties_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_createEvent_createEvent__["a" /* CreateEventPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_alerts_alerts__["a" /* AlertsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_date_modal_date_modal__["a" /* DateModalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_distance_modal_distance_modal__["a" /* DistanceModalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_filter_modal_filter_modal__["a" /* FilterModalPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__EventData__["a" /* EventData */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Paul\WebstormProjects\FoodRoach\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Paul\WebstormProjects\FoodRoach\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map