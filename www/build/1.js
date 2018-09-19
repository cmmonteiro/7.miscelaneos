webpackJsonp([1],{

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Bienvenido!!!",
                description: "Esta <b>aplicación</b> nos ayudará a comprender muchos temas interesantes en ionic!",
                image: "assets/imgs/ica-slidebox-img-1.png",
            },
            {
                title: "¿Qué es ionic?",
                description: "<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones móviles de alta calidad con el conocimiento de JavaScript, CSS y HTML.",
                image: "assets/imgs/ica-slidebox-img-2.png",
            },
            {
                title: "¿Que hace esta app?",
                description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
                image: "assets/imgs/ica-slidebox-img-3.png",
            }
        ];
    }
    IntroPage.prototype.saltar_tutorial = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/home/carina/Documentos/Cursos/IONIC/7.miscelaneos/src/pages/intro/intro.html"*/'<ion-content padding>\n\n  <ion-slides pager>\n\n    <!-- Código para crear slides -->\n      <ion-slide *ngFor="let slide of slides">\n        <ion-toolbar>\n\n          <ion-buttons end>\n            <button ion-button color="primary"\n                    (click)="saltar_tutorial()">Saltar</button>\n          </ion-buttons>\n\n        </ion-toolbar>\n\n        <img [src]="slide.image" class="slide-image"/>\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n        <p [innerHTML]="slide.description"></p>\n      </ion-slide>\n      <!-- Fin del ngFor -->\n\n      <!-- Ultimo Slide -->\n      <ion-slide>\n        <ion-toolbar>\n        </ion-toolbar>\n\n        <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n        <h2 class="slide-title">¿Listo para empezar?</h2>\n\n        <button ion-button large clear icon-right color="primary"\n                (click)="saltar_tutorial()">\n          Continuar\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n\n      </ion-slide>\n      <!-- Fin del último slide -->\n\n    </ion-slides>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/carina/Documentos/Cursos/IONIC/7.miscelaneos/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object])
    ], IntroPage);
    return IntroPage;
    var _a;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
            ],
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ })

});
//# sourceMappingURL=1.js.map