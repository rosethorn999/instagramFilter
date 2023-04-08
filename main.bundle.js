webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#silder_bar_container {\r\n    position:absolute;\r\n    right: 0;\r\n    width : 30%;\r\n}\r\n\r\n#main_container{\r\n    position:absolute;\r\n    left: 0;\r\n    width : 70%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".filterIcon{\r\n    width: 100%;\r\n}\r\n.filterBox {\r\n    width: 100px;\r\n    height: 100px;\r\n    display: inline-block;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    cursor: pointer;\r\n    margin: 10px;\r\n    position: relative;\r\n    padding: 10px;\r\n}\r\n.filterBox:hover {\r\n    background: rgb(228,228,228)\r\n}\r\n.filterBox .text{\r\n    opacity: 0;\r\n    transition: opacity 0.5s;\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n\r\n    /* 定位 */\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n}\r\n\r\n.filterBox:hover .text {\r\n    opacity: 1;\r\n}\r\n\r\n.filterBox .text::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color:  transparent transparent black transparent;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".viewer {\r\n    min-height: 200px;\r\n    min-width: 200px;\r\n    width: 90%;\r\n    height: 100%;\r\n    margin: 10px;\r\n}\r\n\r\n#photo {\r\n    margin: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "/*hr {\r\n    color: gray;\r\n}\r\n\r\ndiv {\r\n    display: block;\r\n    margin: 5px;\r\n    width: 300px;\r\n}\r\n\r\nspan {\r\n    margin-left: 10px;\r\n    width: 100px;\r\n}*/\r\n\r\n\r\n/*input[type='range'] {\r\n    overflow: hidden;\r\n    width:100%;\r\n    height: 10px;\r\n    -webkit-appearance: none;\r\n    background-color: #edc;\r\n    outline : none;\r\n}\r\n    \r\ninput[type='range']::-webkit-slider-runnable-track {\r\n    height: 20px;\r\n    width: 100%;\r\n    -webkit-appearance: none;\r\n    cursor: pointer; \r\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; \r\n    background: #3071a9; border-radius: 1.3px; border: 0.2px solid #010101; \r\n}*/\r\n\r\n\r\n/*input[type='range']::-webkit-slider-thumb {\r\n-webkit-appearance: none;\r\nwidth: 30px;\r\nheight: 30px;\r\ncursor: pointer;\r\nbackground: #434343;\r\nbox-shadow: -360px 0 0 360px #f22;\r\nborder-radius: 50%;\r\ntransition:.2s;\r\n}*/\r\n\r\n\r\n/*input[type=range]:focus::-webkit-slider-runnable-track \r\n{ \r\n    background: #367ebd;\r\n}*/\r\n\r\ninput[type=range] {\r\n    -webkit-appearance: none;\r\n    margin: 18px 0;\r\n    width: 100%;\r\n}\r\n\r\ninput[type=range]:focus {\r\n    outline: none;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n    width: 100%;\r\n    height: 10px;\r\n    cursor: pointer;\r\n    transition: 0.2s;\r\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n    background: #edc;\r\n    /*border-radius: 1.3px; \r\n    border: 0.2px solid #010101;*/\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\r\n    border: 1px solid #000000;\r\n    height: 20px;\r\n    width: 20px;\r\n    border-radius: 50%;\r\n    background: #ffffff;\r\n    cursor: pointer;\r\n    -webkit-appearance: none;\r\n    margin-top: -7px;\r\n    pointer-events: none;\r\n}\r\n\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n    background: #fff;\r\n}\r\n\r\ninput[type='range']:active::-webkit-slider-thumb {\r\n    width: 25px;\r\n    height: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<!-- <a href=\"https://angular2-instagram.firebaseapp.com/\">Reference</a> -->\n<h1> {{title}} </h1>\n\n<div>\n    <div>\n        <div id=\"main_container\">\n            <app-filter-selector></app-filter-selector>\n            <app-photo-viewer></app-photo-viewer>\n        </div>\n        <div id=\"silder_bar_container\">\n            <app-silder-bars></app-silder-bars>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let box of filterBoxs\" class=\"filterBox\">\n    <img id=\"{{box.name}}\" class=\"filterIcon\" (click)=\"applyFilter($event)\" src={{box.src}}>\n     <div class=\"tip\">\n        <span class=\"text\">{{box.name}}</span>\n    </div>\n</div>"

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

module.exports = "<div class=\"viewer\">\n    <!-- <p>{{this.filterSelected}}{{this.silderData|json}}</p> -->\n    <!--<img class=\"photo\" src=\"http://placehold.it/500x500\">-->\n    <img id=\"photo\" class=\"fi\" src=\"images/9269794168_3ac58fc15c_b.jpg\" width=\"70%\">\n</div>"

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = "<!--<tr *ngFor=\"let bar of bars\">\n    <td><span>{{bar.name}}</span></td>\n    <td><input id=\"{{bar.name}}\" (change)=\"silderChange($event)\" value={{bar.value}} type=\"range\" min='0' max=\"360\" /></td>\n</tr>-->\n\n<tr *ngFor=\"let bar of bars\">\n    <td><span>{{bar.name}}</span></td>\n    <!--[ngModel]='model.getProperty()' (ngModelChange)=\"model.setProperty($event)\"-->\n    <!--<td><input id=\"{{bar.name}}\" (change)=\"silderChange($event)\" value={{bar.value}} type=\"range\" min='0' max=\"360\" /></td>-->\n    <td><input id=\"{{bar.name}}\" [ngModel]=\"bar.value\" (ngModelChange)=\"silderChange(bar.name,$event)\" type=\"range\" min=\"{{bar.min}}\" max=\"{{bar.max}}\" step=\"1\" /></td>\n</tr>"

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.silderData = {
            'Contrast': 100,
            'Brightness': 100,
            'Saturate': 100,
            'Sepia': 0,
            'Grayscale': 0,
            'Invert': 0,
            'Hue Rotate': 0,
            'Blur': 0
        };
        this.filterSelected = "f";
        // Observable string source
        this.dataStringSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string stream
        this.dataString$ = this.dataStringSource.asObservable();
    }
    // Service message commands
    DataService.prototype.insertData = function (data) {
        this.dataStringSource.next(data);
        this.figureChange(data);
    };
    DataService.prototype.figureChange = function (filterName) {
        this.setValByFilterSelector(filterName);
        var cssStr = "";
        cssStr += "contrast(" + this.silderData['Contrast'] + "%) ";
        cssStr += "brightness(" + this.silderData['Brightness'] + "%) ";
        cssStr += "saturate(" + this.silderData['Saturate'] + "%) ";
        cssStr += "sepia(" + this.silderData['Sepia'] + "%) ";
        cssStr += "grayscale(" + this.silderData['Grayscale'] + "%) ";
        cssStr += "invert(" + this.silderData['Invert'] + "%) ";
        cssStr += "hue-rotate(" + this.silderData['Hue Rotate'] + "deg) ";
        cssStr += "blur(" + this.silderData['Blur'] + "px)";
        var image = document.querySelector('.fi');
        image.style.filter = cssStr;
    };
    DataService.prototype.setValByFilterSelector = function (filterName) {
        switch (filterName) {
            case "1977":
                this.silderData = {
                    'Contrast': 110,
                    'Brightness': 110,
                    'Saturate': 130,
                    'Sepia': 130,
                    'Grayscale': 0,
                    'Invert': 0,
                    'Hue Rotate': 0,
                    'Blur': 0
                };
                break;
            case "Aden":
                this.silderData = {
                    'Contrast': 90,
                    'Brightness': 120,
                    'Saturate': 85,
                    'Sepia': 85,
                    'Grayscale': 0,
                    'Invert': 0,
                    'Hue Rotate': 20,
                    'Blur': 0
                };
                break;
            case "Brooklyn":
                this.silderData = {
                    'Contrast': 90,
                    'Brightness': 120,
                    'Saturate': 85,
                    'Sepia': 85,
                    'Grayscale': 0,
                    'Invert': 0,
                    'Hue Rotate': 20,
                    'Blur': 0
                };
                break;
            case "Gingham":
                this.silderData = {
                    'Contrast': 100,
                    'Brightness': 105,
                    'Saturate': 100,
                    'Sepia': 0,
                    'Grayscale': 0,
                    'Invert': 0,
                    'Hue Rotate': 350,
                    'Blur': 0
                };
                break;
            case "Earlybird":
                this.silderData = {
                    'Contrast': 100,
                    'Brightness': 100,
                    'Saturate': 0,
                    'Sepia': 0,
                    'Grayscale': 0,
                    'Invert': 0,
                    'Hue Rotate': 0,
                    'Blur': 0
                };
                break;
            default:
                break;
        }
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Please click a [Template], or using the [silderbar] to adjust it!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(142),
        styles: [__webpack_require__(137)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__silder_bars_silder_bars_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__photo_viewer_photo_viewer_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_selector_filter_selector_component__ = __webpack_require__(80);
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
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__silder_bars_silder_bars_component__["a" /* SilderBarsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__photo_viewer_photo_viewer_component__["a" /* PhotoViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__filter_selector_filter_selector_component__["a" /* FilterSelectorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterSelectorComponent = (function () {
    function FilterSelectorComponent(DataService) {
        this.DataService = DataService;
        this.filterBoxs = [
            { src: './images/img_1963.png', name: '1977' },
            { src: './images/img_1963.png', name: 'Aden' },
            { src: './images/img_1963.png', name: 'Brooklyn' },
            { src: './images/img_1963.png', name: 'Gingham' },
            { src: './images/img_1963.png', name: 'Earlybird' }
        ];
    }
    FilterSelectorComponent.prototype.ngOnInit = function () {
    };
    FilterSelectorComponent.prototype.applyFilter = function (e) {
        var selected = e.target.id;
        console.log(selected);
        this.DataService.insertData(selected);
    };
    return FilterSelectorComponent;
}());
FilterSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-filter-selector',
        template: __webpack_require__(143),
        styles: [__webpack_require__(138)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], FilterSelectorComponent);

var _a;
//# sourceMappingURL=filter-selector.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoViewerComponent = (function () {
    function PhotoViewerComponent(DataService) {
        this.DataService = DataService;
        this.silderData = this.DataService.silderData;
        this.filterSelected = this.DataService.filterSelected;
    }
    PhotoViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DataService.dataString$.subscribe(function (data) {
            _this.filterSelected = data;
        });
    };
    return PhotoViewerComponent;
}());
PhotoViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-photo-viewer',
        template: __webpack_require__(144),
        styles: [__webpack_require__(139)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], PhotoViewerComponent);

var _a;
//# sourceMappingURL=photo-viewer.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SilderBarsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SilderBarsComponent = (function () {
    function SilderBarsComponent(DataService) {
        this.DataService = DataService;
        this.bars = [
            { 'name': 'Contrast', 'value': this.DataService.silderData['Contrast'], 'min': "0", 'max': "200" },
            { 'name': 'Brightness', 'value': this.DataService.silderData['Brightness'], 'min': "0", 'max': "200" },
            { 'name': 'Saturate', 'value': this.DataService.silderData['Saturate'], 'min': "0", 'max': "200" },
            { 'name': 'Sepia', 'value': this.DataService.silderData['Sepia'], 'min': "0", 'max': "100" },
            { 'name': 'Grayscale', 'value': this.DataService.silderData['Grayscale'], 'min': "0", 'max': "100" },
            { 'name': 'Invert', 'value': this.DataService.silderData['Invert'], 'min': "0", 'max': "100" },
            { 'name': 'Hue Rotate', 'value': this.DataService.silderData['Hue Rotate'], 'min': "0", 'max': "360" },
            { 'name': 'Blur', 'value': this.DataService.silderData['Blur'], 'min': "0", 'max': "10" }
        ];
    }
    SilderBarsComponent.prototype.ngOnInit = function () {
        console.log(this.bars);
    };
    SilderBarsComponent.prototype.silderChange = function (name, val) {
        this.DataService.silderData[name] = +val;
        //console.log(this.DataService.silderData); //抓到即時資料
        this.DataService.figureChange("");
    };
    return SilderBarsComponent;
}());
SilderBarsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-silder-bars',
        template: __webpack_require__(145),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], SilderBarsComponent);

var _a;
//# sourceMappingURL=silder-bars.component.js.map

/***/ }),

/***/ 83:
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

/***/ })

},[170]);
//# sourceMappingURL=main.bundle.js.map