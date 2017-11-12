webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parent {\n    text-align: center;\n    padding: 40px;\n}\n\n.riobtn {\n    background: #009091;\n    color: #f2f2f2;\n    font-size: 24px;\n}\n\n.invisible {\n    display: none;\n}\n\n.home {\n    text-align: center;\n    padding: 40px;\n    color: #323232;\n}\n\n.home btn {\n    color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'invisible': isClassVisible }\">\n    <div style=\"text-align:center\">\n        <h1>\n            Welcome to {{title}}!!\n        </h1>\n        <img width=\"300\" src=\"assets/logo.png\" />\n    </div>\n\n    <hr>\n    <div class=\"parent\">\n        <button mat-button (click)=\"startAuth()\" class=\"btn btn-lg btn-success riobtn\"> Start using Crypto Bazaar </button>\n    </div>\n</div>\n\n<div [ngClass]=\"{'invisible': !isClassVisible }\">\n\n    <div class=\"home\">\n        <h2> Welcome {{ name }} </h2>\n        <h3> Account Id :: {{ account_id }} </h3>\n        <h3> Account Name :: {{ account_name }} </h3>\n        <hr>\n        <button mat-button (click)=\"logout()\" class=\"btn btn-lg btn-danger\"> LogOut </button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import the service class 

var AppComponent = (function () {
    function AppComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.title = 'crypto bazaar';
        this.isClassVisible = false;
        this.name = '';
        this.account_id = '';
        this.account_name = '';
        this.startAuth = function () {
            _this.appService.startAuth()
                .then(function (args) {
                if (args == true) {
                    _this.isClassVisible = true;
                    _this.renderHome();
                }
            });
        };
        this.renderHome = function () {
            _this.appService.getUser()
                .then(function (args) {
                _this.appService.getAccounts()
                    .then(function (account) {
                    _this.name = args.data.name;
                    _this.account_id = account.data[0].id;
                    _this.account_name = account.data[0].name;
                });
            });
        };
        this.logout = function () {
            _this.isClassVisible = false;
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatStepperModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.token = '';
        this.startAuth = function () {
            var self = _this;
            return new Promise(function (resolve, reject) {
                var url = 'https://www.coinbase.com/oauth/authorize?client_id=e3f0175211970ef3639db939b7e9fd51a4f5b11eb524bae2dd779fd4908ba21d&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=wallet%3Auser%3Aread+wallet%3Aaccounts%3Aread';
                var name = 'CryptoBazaar';
                var params = 'width=800,height=600';
                var popup = window.open(url, name, params);
                window.addEventListener('message', function (msg) {
                    if (msg.data) {
                        self.setToken(msg.data);
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            });
        };
        this.setToken = function (token) {
            _this.token = token;
        };
        this.getToken = function () {
            return _this.token;
        };
        this.getUser = function () {
            return new Promise(function (resolve, reject) {
                _this.http.get('http://localhost:3000/user?token=' + _this.getToken()).subscribe(function (data) {
                    console.log(data);
                    resolve(data);
                });
            });
        };
        this.getAccounts = function () {
            return new Promise(function (resolve, reject) {
                _this.http.get('http://localhost:3000/accounts?token=' + _this.getToken()).subscribe(function (data) {
                    console.log(data);
                    resolve(data);
                });
            });
        };
        this.token = '';
    }
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map