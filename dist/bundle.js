/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/clear.jpeg */ "./src/images/clear.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/clouds.jpeg */ "./src/images/clouds.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/rain.jpeg */ "./src/images/rain.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mist.png */ "./src/images/mist.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.clear {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center left;\n}\n\n.clouds {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center left;\n}\n\n.rain {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center right;\n}\n\n.mist {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center right;\n}\n\n#mainContainer {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  align-items: center;\n}\n#mainContainer h1 {\n  padding: 10px;\n  background-color: sandybrown;\n  max-width: fit-content;\n}\n\nform {\n  margin-top: 50px;\n}\nform input {\n  flex-direction: row;\n  padding: 5px;\n}\nform button {\n  border: 2px solid transparent;\n  padding: 5px;\n  background-color: sandybrown;\n}\nform button:hover {\n  cursor: pointer;\n  border: 2px solid black;\n}\n\n.invalid {\n  background-color: salmon;\n}\n\n#forecastDiv {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  width: 45%;\n  margin: 35px;\n  text-align: center;\n}\n#forecastDiv #chooseUnitsDiv {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n#forecastDiv #chooseUnitsDiv p {\n  margin: 0px 6px 15px 6px;\n  padding: 10px;\n  background-color: lightskyblue;\n  border: 2px solid transparent;\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */\n}\n#forecastDiv #chooseUnitsDiv p:hover {\n  cursor: pointer;\n  border: 2px solid black;\n}\n#forecastDiv #chooseUnitsDiv .chosenOption {\n  border: 2px solid black;\n}\n#forecastDiv #cityCard {\n  font-size: 1.15em;\n  max-width: 100%;\n  border: 2px solid sandybrown;\n  background-color: khaki;\n  display: grid;\n  grid-template-areas: \"city\" \"temperature\" \"description\" \"minimum\" \"maximum\";\n}\n#forecastDiv #cityCard #city {\n  grid-area: city;\n  background-color: sandybrown;\n}\n#forecastDiv #cityCard #city h2 {\n  font-size: 1.5em;\n  padding: 0;\n}\n#forecastDiv #cityCard #weatherDescriptionDiv {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n#forecastDiv #cityCard #weatherDescriptionDiv #description {\n  grid-area: description;\n  font-weight: 550;\n}\n#forecastDiv #cityCard #temperature {\n  grid-area: temperature;\n  font-weight: 550;\n}\n#forecastDiv #cityCard #minimum {\n  margin-left: auto;\n  margin-right: auto;\n  grid-area: minimum;\n}\n#forecastDiv #cityCard #minimum::before {\n  content: \"❋ \";\n  color: lightseagreen;\n}\n#forecastDiv #cityCard #maximum {\n  margin-left: auto;\n  margin-right: auto;\n  grid-area: maximum;\n}\n#forecastDiv #cityCard #maximum::before {\n  content: \"☀ \";\n  color: salmon;\n}\n#forecastDiv #temperaturesDiv {\n  display: flex;\n  flex-direction: column;\n}\n#forecastDiv #temperaturesDiv div {\n  margin: 5px 10px 5px 10px;\n}\n\n.celcius::after {\n  content: \" ºC\";\n}\n\n.fahrenheit::after {\n  content: \" ºF\";\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAKhB;EACI,yDAAA;EACA,gCAAA;AAHJ;;AAMA;EACI,yDAAA;EACA,gCAAA;AAHJ;;AAMA;EACI,yDAAA;EACA,iCAAA;AAHJ;;AAMA;EACI,yDAAA;EACA,iCAAA;AAHJ;;AAMA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,mBAAA;AAHJ;AAII;EACI,aAAA;EACA,4BAAA;EACA,sBAAA;AAFR;;AAMA;EACI,gBAAA;AAHJ;AAII;EACI,mBAAA;EACA,YAAA;AAFR;AAII;EACI,6BAAA;EACA,YAAA;EACA,4BAAA;AAFR;AAGQ;EACI,eAAA;EACA,uBAAA;AADZ;;AAMA;EACI,wBAAA;AAHJ;;AAMA;EAzDI,iBAAA;EACA,kBAAA;EA0DA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;AAFJ;AAGI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AADR;AAEQ;EACI,wBAAA;EACA,aAAA;EACA,8BAAA;EACA,6BAAA;EACA,yBAAA;EAA2B,WAAA;EAC3B,sBAAA;EAAwB,YAAA;EACxB,qBAAA;EAAuB,eAAA;EACvB,iBAAA;EAAmB,aAAA;AAI/B;AAHY;EACI,eAAA;EACA,uBAAA;AAKhB;AAFQ;EACI,uBAAA;AAIZ;AADI;EACA,iBAAA;EACA,eAAA;EACA,4BAAA;EACA,uBAAA;EACA,aAAA;EACA,2EACA;AAEJ;AAGI;EACI,eAAA;EACA,4BAAA;AADR;AAEQ;EACI,gBAAA;EACA,UAAA;AAAZ;AAGI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AADR;AAEQ;EACI,sBAAA;EACA,gBAAA;AAAZ;AAGI;EACI,sBAAA;EACA,gBAAA;AADR;AAGI;EAtHA,iBAAA;EACA,kBAAA;EAuHI,kBAAA;AAAR;AACQ;EACI,aAAA;EACA,oBAAA;AACZ;AAEI;EA9HA,iBAAA;EACA,kBAAA;EA+HI,kBAAA;AACR;AAAQ;EACI,aAAA;EACA,aAAA;AAEZ;AAEI;EACI,aAAA;EACA,sBAAA;AAAR;AACQ;EACI,yBAAA;AACZ;;AAKA;EACI,cAAA;AAFJ;;AAIA;EACI,cAAA;AADJ","sourcesContent":["@mixin centerHorizontally {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.clear {\n    background-image: url('./images/clear.jpeg');\n    background-position: center left;\n}\n\n.clouds {\n    background-image: url('./images/clouds.jpeg');\n    background-position: center left;\n}\n\n.rain {\n    background-image: url('./images/rain.jpeg');\n    background-position: center right;\n}\n\n.mist {\n    background-image: url('./images/mist.png');\n    background-position: center right;\n}\n\n#mainContainer {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    align-items: center;\n    h1 {\n        padding: 10px;\n        background-color: sandybrown;\n        max-width: fit-content;\n    }\n}\n\nform {\n    margin-top: 50px;\n    input {\n        flex-direction: row;\n        padding: 5px;\n    }\n    button {\n        border: 2px solid transparent;\n        padding: 5px;\n        background-color: sandybrown;\n        &:hover {\n            cursor: pointer;\n            border: 2px solid black;\n        }\n    }\n}\n\n.invalid {\n    background-color: salmon;\n}\n\n#forecastDiv {\n    @include centerHorizontally();\n    margin-top: 30px;\n    width: 45%;\n    margin: 35px;\n    text-align: center;\n    #chooseUnitsDiv {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        p {\n            margin: 0px 6px 15px 6px;\n            padding: 10px;\n            background-color: lightskyblue;\n            border: 2px solid transparent;\n            -webkit-user-select: none; /* Safari */        \n            -moz-user-select: none; /* Firefox */\n            -ms-user-select: none; /* IE10+/Edge */\n            user-select: none; /* Standard */\n            &:hover {\n                cursor: pointer;\n                border: 2px solid black;\n            }\n        }\n        .chosenOption {\n            border: 2px solid black;\n        }\n    }\n    #cityCard {\n    font-size: 1.15em;\n    max-width: 100%;\n    border: 2px solid sandybrown;\n    background-color: khaki;\n    display: grid;\n    grid-template-areas: \n    'city'\n    'temperature'\n    'description'\n    'minimum'\n    'maximum';\n    #city {\n        grid-area: city;\n        background-color: sandybrown;\n        h2 {\n            font-size: 1.5em;\n            padding: 0;\n        }\n    }\n    #weatherDescriptionDiv {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        #description {\n            grid-area: description;\n            font-weight: 550;\n        }\n    }\n    #temperature {\n        grid-area: temperature;\n        font-weight: 550;\n    }\n    #minimum {\n        @include centerHorizontally();\n        grid-area: minimum;\n        &::before {\n            content: '❋ ';\n            color: lightseagreen;\n        }\n    }\n    #maximum {\n        @include centerHorizontally();\n        grid-area: maximum;\n        &::before {\n            content: '☀ ';\n            color: salmon;\n        }\n    }\n    }\n    #temperaturesDiv {\n        display: flex;\n        flex-direction: column;\n        div {\n            margin: 5px 10px 5px 10px;\n        }\n    }\n}\n\n// Celcius and Fahrenheit Suffix\n.celcius::after {\n    content: ' ºC';\n}\n.fahrenheit::after {\n    content: ' ºF';\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configApi": () => (/* binding */ configApi)
/* harmony export */ });
const configApi = (() => {
    const apiKey = 'adabe69d8e1b8548bad90f63f6de9457';

    return {
        apiKey:apiKey
    }
})();


/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "helperfunction": () => (/* binding */ helperfunction)
/* harmony export */ });
const helperfunction = (() => {

    const appendMultipleNodesToParent = (parentNode, ...childNodes) => {
        childNodes.forEach(child => {
            parentNode.append(child);
        });
    }

    const removeChildNodes = (parentNode) => {
        while(parentNode.firstChild) {
            parentNode.removeChild(parentNode.firstChild);
        }
    }

    return {
        appendMultipleNodesToParent,
        removeChildNodes
    }

})();

/***/ }),

/***/ "./src/images/clear.jpeg":
/*!*******************************!*\
  !*** ./src/images/clear.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb8fb55f89f4fd44b712.jpeg";

/***/ }),

/***/ "./src/images/clouds.jpeg":
/*!********************************!*\
  !*** ./src/images/clouds.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64d89d583c3717920f41.jpeg";

/***/ }),

/***/ "./src/images/mist.png":
/*!*****************************!*\
  !*** ./src/images/mist.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adc83732715b6c4b883f.png";

/***/ }),

/***/ "./src/images/rain.jpeg":
/*!******************************!*\
  !*** ./src/images/rain.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6273b41972c3eb1a1fea.jpeg";

/***/ }),

/***/ "./src/temperatureConversion.js":
/*!**************************************!*\
  !*** ./src/temperatureConversion.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "temperatureConversion": () => (/* binding */ temperatureConversion)
/* harmony export */ });
const temperatureConversion = (() => {

    const convertToCelsius = (kelvin) => {
        let celcius = (kelvin - 273.15).toFixed(1);
        return celcius
    }

    const convertToFahrenheit = (kelvin) => {
        let fahrenheit = ((kelvin * 1.8) - 459.67).toFixed(1);
        return fahrenheit
    }

    return {
        convertToCelsius,
        convertToFahrenheit
    }

})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _temperatureConversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./temperatureConversion */ "./src/temperatureConversion.js");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");






const submitButton = document.querySelector('#submitButton');
const cityInput = document.querySelector('input');
const forecastDiv = document.querySelector('#forecastDiv');

// Live Validity Check for Input. Only accepts alphabetic characters and spaces
cityInput.addEventListener('input', function() {
    if(cityInput.validity.patternMismatch || cityInput.validity.valueMissing) {
        cityInput.classList.add('invalid');
    }
    else {
        cityInput.classList.remove('invalid');
    }
});

// Submit Button - Prevent Default
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    if(cityInput.validity.valueMissing) {
        cityInput.classList.add('invalid');
    }
    else {
        getApiResponseByCity(cityInput.value);
        cityInput.value = '';
    }
    
})

// Get API response - Use Async Await
const getApiResponseByCity = async (city) => {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${_config__WEBPACK_IMPORTED_MODULE_0__.configApi.apiKey}`);
        let parsedJson = await response.json();
        getWeatherDetails(parsedJson);
    }
    catch(error) {
        console.log(error);
    }
}

// Get weather details from parsedJson
const getWeatherDetails = (parsedJson) => {
    if(parsedJson.main !== undefined && parsedJson.weather !== undefined) {
        let temperatures = {
            temp: `${parsedJson.main.temp}`,
            tempMin: `${parsedJson.main.temp_min}`,
            tempMax: `${parsedJson.main.temp_max}`
        };
        let weather = {
            main: `${parsedJson.weather[0].main}`,
            description: `${parsedJson.weather[0].description}`,
            iconCode: `${parsedJson.weather[0].icon}`
        };
        populateForecastDiv(temperatures, weather, parsedJson.name);
        changeBodyBackgroundImage(weather);
    }
    else {
        cityInput.classList.add('invalid');
    }
}

// Populate Div with Forecast
const populateForecastDiv = (temperatures, weather, nameOfCity) => {

    // Remove Previous Child Nodes of Div
    _helperFunctions__WEBPACK_IMPORTED_MODULE_1__.helperfunction.removeChildNodes(forecastDiv);

    // Give user option to choose celsius or fahrenheit
    let chooseUnitsDiv = document.createElement('div');
    chooseUnitsDiv.id = 'chooseUnitsDiv';
    let celsiusOption = document.createElement('p');
    celsiusOption.innerText = 'ºC';
    celsiusOption.id = 'showInCelsius';
    celsiusOption.classList.add('chosenOption');
    let fahrenheitOption = document.createElement('p');
    fahrenheitOption.innerText = 'ºF';
    fahrenheitOption.id = 'showInFahrenheit';

    // Add click listeners for both options
    celsiusOption.addEventListener('click', function() {
        if(!celsiusOption.classList.contains('chosenOption')) {
            celsiusOption.classList.toggle('chosenOption');
            fahrenheitOption.classList.toggle('chosenOption');
            let temperature = document.querySelector('#temperature');
            let minimum = document.querySelector('#minimum');
            let maximum = document.querySelector('#maximum');

            // Populate with correct temperature
            temperature.innerText = _temperatureConversion__WEBPACK_IMPORTED_MODULE_2__.temperatureConversion.convertToCelsius(temperatures.temp);
            minimum.innerText = `Min: ${_temperatureConversion__WEBPACK_IMPORTED_MODULE_2__.temperatureConversion.convertToCelsius(temperatures.tempMin)}`;
            maximum.innerText = `Max: ${_temperatureConversion__WEBPACK_IMPORTED_MODULE_2__.temperatureConversion.convertToCelsius(temperatures.tempMax)}`;
            
            // Give correct suffix
            temperature.classList.add('celsius');
            temperature.classList.remove('fahrenheit');
            minimum.classList.add('celsius');
            minimum.classList.remove('fahrenheit');
            maximum.classList.add('celsius');
            maximum.classList.remove('fahrenheit');
        }
    });

    fahrenheitOption.addEventListener('click', function() {
        if(!fahrenheitOption.classList.contains('chosenOption')) {
            fahrenheitOption.classList.toggle('chosenOption');
            celsiusOption.classList.toggle('chosenOption');
            let temperature = document.querySelector('#temperature');
            let minimum = document.querySelector('#minimum');
            let maximum = document.querySelector('#maximum');

            // Populate with correct temperature
            temperature.innerText = _temperatureConversion__WEBPACK_IMPORTED_MODULE_2__.temperatureConversion.convertToFahrenheit(temperatures.temp);
            minimum.innerText = `Min: ${_temperatureConversion__WEBPACK_IMPORTED_MODULE_2__.temperatureConversion.convertToFahrenheit(temperatures.tempMin)}`;
            maximum.innerText = `Max: ${_temperatureConversion__WEBPACK_IMPORTED_MODULE_2__.temperatureConversion.convertToFahrenheit(temperatures.tempMax)}`;
            
            // Give correct suffix
            temperature.classList.add('fahrenheit');
            temperature.classList.remove('celsius');
            minimum.classList.add('fahrenheit');
            minimum.classList.remove('celsius');
            maximum.classList.add('fahrenheit');
            maximum.classList.remove('celsius');
        }
    });


    _helperFunctions__WEBPACK_IMPORTED_MODULE_1__.helperfunction.appendMultipleNodesToParent(chooseUnitsDiv, celsiusOption, fahrenheitOption);
    forecastDiv.appendChild(chooseUnitsDiv);

    // Create 'cityCard' Div that will contain all the properties of asked Div
    let cityCard = document.createElement('div');
    cityCard.id = 'cityCard';
    forecastDiv.appendChild(cityCard);

    // Creates Div and h2 element with city name i.e: 'Barcelona'
    let cityDiv = document.createElement('div');
    cityDiv.id = 'city';
    let cityName = document.createElement('h2');
    cityName.innerText = nameOfCity;
    cityDiv.appendChild(cityName);
    cityCard.appendChild(cityDiv);

    // Creates a Div and p element with description i.e: 'Clear skies'
    let weatherDescriptionDiv = document.createElement('div');
    weatherDescriptionDiv.id = 'weatherDescriptionDiv';
    let weatherDescription = document.createElement('p');
    weatherDescription.innerText = weather.description;
    weatherDescription.id = 'description';
    let weatherIcon = document.createElement('img');
    weatherIcon.src = `http://openweathermap.org/img/w/${weather.iconCode}.png`;
    _helperFunctions__WEBPACK_IMPORTED_MODULE_1__.helperfunction.appendMultipleNodesToParent(weatherDescriptionDiv, weatherDescription, weatherIcon);
    cityCard.appendChild(weatherDescriptionDiv);

    // Creates a Div and p element with current temperature i.e: '24ºC'
    let currentTemperatureP = document.createElement('p');
    let currentCelcius = _temperatureConversion__WEBPACK_IMPORTED_MODULE_2__.temperatureConversion.convertToCelsius(temperatures.temp);
    currentTemperatureP.innerText = currentCelcius;
    currentTemperatureP.id = 'temperature';
    currentTemperatureP.classList.add('celcius');
    cityCard.appendChild(currentTemperatureP);

    // Creates a Div and p element with min temperature i.e: '20ºC'
    let minTemperatureP = document.createElement('p');
    let minCelcius = _temperatureConversion__WEBPACK_IMPORTED_MODULE_2__.temperatureConversion.convertToCelsius(temperatures.tempMin);
    minTemperatureP.innerText = `Min: ${minCelcius}`;
    minTemperatureP.id = 'minimum';
    minTemperatureP.classList.add('celcius');
    cityCard.appendChild(minTemperatureP);

    // Creates a Div and p element with max temperature i.e: '30ºC'
    let maxTemperatureP = document.createElement('p');
    let maxCelcius = _temperatureConversion__WEBPACK_IMPORTED_MODULE_2__.temperatureConversion.convertToCelsius(temperatures.tempMax);
    maxTemperatureP.innerText = `Max: ${maxCelcius}`;
    maxTemperatureP.id = 'maximum';
    maxTemperatureP.classList.add('celcius');
    cityCard.appendChild(maxTemperatureP);

}

// Change Backgroudn Image based on weather
const changeBodyBackgroundImage = (weather) => {

        // Change Backgroud Image Based On main weather
        if(weather.main === 'Clear') {
            document.body.classList.remove(...document.body.classList);
            document.body.classList.add('clear');
        }
        else if (weather.main === 'Clouds') {
            document.body.classList.remove(...document.body.classList);
            document.body.classList.add('clouds');
        }
        else if (weather.main === 'Rain') {
            document.body.classList.remove(...document.body.classList);
            document.body.classList.add('rain');
        }
        else if (weather.main === 'Mist') {
            document.body.classList.remove(...document.body.classList);
            document.body.classList.add('mist');
        }
        else {
            document.body.classList.remove(...document.body.classList);
        }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3RlbXBlcmF0dXJlQ29udmVyc2lvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ2hHLDRDQUE0QyxtSEFBc0M7QUFDbEYsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDRDQUE0QywrR0FBb0M7QUFDaEYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNkRBQTZELFVBQVUsc0VBQXNFLHFDQUFxQyxHQUFHLGFBQWEsc0VB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLDBGQUFzQztBQUMxRSx3Q0FBd0MsMEZBQXNDLHVCQUF1QjtBQUNyRyx3Q0FBd0MsMEZBQXNDLHVCQUF1Qjs7QUFFckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsNkZBQXlDO0FBQzdFLHdDQUF3Qyw2RkFBeUMsdUJBQXVCO0FBQ3hHLHdDQUF3Qyw2RkFBeUMsdUJBQXVCOztBQUV4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsSUFBSSx3RkFBMEM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsaUJBQWlCO0FBQzFFLElBQUksd0ZBQTBDO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsMEZBQXNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMEZBQXNDO0FBQzNELHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDBGQUFzQztBQUMzRCx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2xlYXIuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Nsb3Vkcy5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcmFpbi5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbWlzdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi5jbGVhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7XFxufVxcblxcbi5jbG91ZHMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBsZWZ0O1xcbn1cXG5cXG4ucmFpbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0O1xcbn1cXG5cXG4ubWlzdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0O1xcbn1cXG5cXG4jbWFpbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNtYWluQ29udGFpbmVyIGgxIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzYW5keWJyb3duO1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuZm9ybSB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5mb3JtIGlucHV0IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbmZvcm0gYnV0dG9uIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc2FuZHlicm93bjtcXG59XFxuZm9ybSBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcXG59XFxuXFxuI2ZvcmVjYXN0RGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHdpZHRoOiA0NSU7XFxuICBtYXJnaW46IDM1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNmb3JlY2FzdERpdiAjY2hvb3NlVW5pdHNEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI2ZvcmVjYXN0RGl2ICNjaG9vc2VVbml0c0RpdiBwIHtcXG4gIG1hcmdpbjogMHB4IDZweCAxNXB4IDZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBTYWZhcmkgKi9cXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBGaXJlZm94ICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBJRTEwKy9FZGdlICovXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIFN0YW5kYXJkICovXFxufVxcbiNmb3JlY2FzdERpdiAjY2hvb3NlVW5pdHNEaXYgcDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuI2ZvcmVjYXN0RGl2ICNjaG9vc2VVbml0c0RpdiAuY2hvc2VuT3B0aW9uIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jZm9yZWNhc3REaXYgI2NpdHlDYXJkIHtcXG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgc2FuZHlicm93bjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGtoYWtpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaXR5XFxcIiBcXFwidGVtcGVyYXR1cmVcXFwiIFxcXCJkZXNjcmlwdGlvblxcXCIgXFxcIm1pbmltdW1cXFwiIFxcXCJtYXhpbXVtXFxcIjtcXG59XFxuI2ZvcmVjYXN0RGl2ICNjaXR5Q2FyZCAjY2l0eSB7XFxuICBncmlkLWFyZWE6IGNpdHk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzYW5keWJyb3duO1xcbn1cXG4jZm9yZWNhc3REaXYgI2NpdHlDYXJkICNjaXR5IGgyIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4jZm9yZWNhc3REaXYgI2NpdHlDYXJkICN3ZWF0aGVyRGVzY3JpcHRpb25EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI2ZvcmVjYXN0RGl2ICNjaXR5Q2FyZCAjd2VhdGhlckRlc2NyaXB0aW9uRGl2ICNkZXNjcmlwdGlvbiB7XFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuI2ZvcmVjYXN0RGl2ICNjaXR5Q2FyZCAjdGVtcGVyYXR1cmUge1xcbiAgZ3JpZC1hcmVhOiB0ZW1wZXJhdHVyZTtcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcbiNmb3JlY2FzdERpdiAjY2l0eUNhcmQgI21pbmltdW0ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBncmlkLWFyZWE6IG1pbmltdW07XFxufVxcbiNmb3JlY2FzdERpdiAjY2l0eUNhcmQgI21pbmltdW06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4p2LIFxcXCI7XFxuICBjb2xvcjogbGlnaHRzZWFncmVlbjtcXG59XFxuI2ZvcmVjYXN0RGl2ICNjaXR5Q2FyZCAjbWF4aW11bSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGdyaWQtYXJlYTogbWF4aW11bTtcXG59XFxuI2ZvcmVjYXN0RGl2ICNjaXR5Q2FyZCAjbWF4aW11bTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLimIAgXFxcIjtcXG4gIGNvbG9yOiBzYWxtb247XFxufVxcbiNmb3JlY2FzdERpdiAjdGVtcGVyYXR1cmVzRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jZm9yZWNhc3REaXYgI3RlbXBlcmF0dXJlc0RpdiBkaXYge1xcbiAgbWFyZ2luOiA1cHggMTBweCA1cHggMTBweDtcXG59XFxuXFxuLmNlbGNpdXM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgwrpDXFxcIjtcXG59XFxuXFxuLmZhaHJlbmhlaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgwrpGXFxcIjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUtoQjtFQUNJLHlEQUFBO0VBQ0EsZ0NBQUE7QUFISjs7QUFNQTtFQUNJLHlEQUFBO0VBQ0EsZ0NBQUE7QUFISjs7QUFNQTtFQUNJLHlEQUFBO0VBQ0EsaUNBQUE7QUFISjs7QUFNQTtFQUNJLHlEQUFBO0VBQ0EsaUNBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUhKO0FBSUk7RUFDSSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUZSOztBQU1BO0VBQ0ksZ0JBQUE7QUFISjtBQUlJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBRlI7QUFHUTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBQURaOztBQU1BO0VBQ0ksd0JBQUE7QUFISjs7QUFNQTtFQXpESSxpQkFBQTtFQUNBLGtCQUFBO0VBMERBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUZKO0FBR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURSO0FBRVE7RUFDSSx3QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFBMkIsV0FBQTtFQUMzQixzQkFBQTtFQUF3QixZQUFBO0VBQ3hCLHFCQUFBO0VBQXVCLGVBQUE7RUFDdkIsaUJBQUE7RUFBbUIsYUFBQTtBQUkvQjtBQUhZO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0FBS2hCO0FBRlE7RUFDSSx1QkFBQTtBQUlaO0FBREk7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDJFQUNBO0FBRUo7QUFHSTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtBQURSO0FBRVE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFBWjtBQUdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFEUjtBQUVRO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQUFaO0FBR0k7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFHSTtFQXRIQSxpQkFBQTtFQUNBLGtCQUFBO0VBdUhJLGtCQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQUNaO0FBRUk7RUE5SEEsaUJBQUE7RUFDQSxrQkFBQTtFQStISSxrQkFBQTtBQUNSO0FBQVE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQUVaO0FBRUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFBUjtBQUNRO0VBQ0kseUJBQUE7QUFDWjs7QUFLQTtFQUNJLGNBQUE7QUFGSjs7QUFJQTtFQUNJLGNBQUE7QUFESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gY2VudGVySG9yaXpvbnRhbGx5IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmNsZWFyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9jbGVhci5qcGVnJyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBsZWZ0O1xcbn1cXG5cXG4uY2xvdWRzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9jbG91ZHMuanBlZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdDtcXG59XFxuXFxuLnJhaW4ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL3JhaW4uanBlZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQ7XFxufVxcblxcbi5taXN0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9taXN0LnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQ7XFxufVxcblxcbiNtYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoMSB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogc2FuZHlicm93bjtcXG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGlucHV0IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogc2FuZHlicm93bjtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uaW52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcXG59XFxuXFxuI2ZvcmVjYXN0RGl2IHtcXG4gICAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KCk7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIG1hcmdpbjogMzVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAjY2hvb3NlVW5pdHNEaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHAge1xcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDZweCAxNXB4IDZweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi8gICAgICAgIFxcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cXG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgKi9cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuY2hvc2VuT3B0aW9uIHtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAjY2l0eUNhcmQge1xcbiAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBzYW5keWJyb3duO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBraGFraTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICdjaXR5J1xcbiAgICAndGVtcGVyYXR1cmUnXFxuICAgICdkZXNjcmlwdGlvbidcXG4gICAgJ21pbmltdW0nXFxuICAgICdtYXhpbXVtJztcXG4gICAgI2NpdHkge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBjaXR5O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogc2FuZHlicm93bjtcXG4gICAgICAgIGgyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgI3dlYXRoZXJEZXNjcmlwdGlvbkRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgI2Rlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgI3RlbXBlcmF0dXJlIHtcXG4gICAgICAgIGdyaWQtYXJlYTogdGVtcGVyYXR1cmU7XFxuICAgICAgICBmb250LXdlaWdodDogNTUwO1xcbiAgICB9XFxuICAgICNtaW5pbXVtIHtcXG4gICAgICAgIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpO1xcbiAgICAgICAgZ3JpZC1hcmVhOiBtaW5pbXVtO1xcbiAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBjb250ZW50OiAn4p2LICc7XFxuICAgICAgICAgICAgY29sb3I6IGxpZ2h0c2VhZ3JlZW47XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgI21heGltdW0ge1xcbiAgICAgICAgQGluY2x1ZGUgY2VudGVySG9yaXpvbnRhbGx5KCk7XFxuICAgICAgICBncmlkLWFyZWE6IG1heGltdW07XFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfimIAgJztcXG4gICAgICAgICAgICBjb2xvcjogc2FsbW9uO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIH1cXG4gICAgI3RlbXBlcmF0dXJlc0RpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweCA1cHggMTBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4vLyBDZWxjaXVzIGFuZCBGYWhyZW5oZWl0IFN1ZmZpeFxcbi5jZWxjaXVzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgwrpDJztcXG59XFxuLmZhaHJlbmhlaXQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyDCukYnO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNvbmZpZ0FwaSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gJ2FkYWJlNjlkOGUxYjg1NDhiYWQ5MGY2M2Y2ZGU5NDU3JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFwaUtleTphcGlLZXlcbiAgICB9XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IGhlbHBlcmZ1bmN0aW9uID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGFwcGVuZE11bHRpcGxlTm9kZXNUb1BhcmVudCA9IChwYXJlbnROb2RlLCAuLi5jaGlsZE5vZGVzKSA9PiB7XG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZChjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUNoaWxkTm9kZXMgPSAocGFyZW50Tm9kZSkgPT4ge1xuICAgICAgICB3aGlsZShwYXJlbnROb2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFwcGVuZE11bHRpcGxlTm9kZXNUb1BhcmVudCxcbiAgICAgICAgcmVtb3ZlQ2hpbGROb2Rlc1xuICAgIH1cblxufSkoKTsiLCJleHBvcnQgY29uc3QgdGVtcGVyYXR1cmVDb252ZXJzaW9uID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGNvbnZlcnRUb0NlbHNpdXMgPSAoa2VsdmluKSA9PiB7XG4gICAgICAgIGxldCBjZWxjaXVzID0gKGtlbHZpbiAtIDI3My4xNSkudG9GaXhlZCgxKTtcbiAgICAgICAgcmV0dXJuIGNlbGNpdXNcbiAgICB9XG5cbiAgICBjb25zdCBjb252ZXJ0VG9GYWhyZW5oZWl0ID0gKGtlbHZpbikgPT4ge1xuICAgICAgICBsZXQgZmFocmVuaGVpdCA9ICgoa2VsdmluICogMS44KSAtIDQ1OS42NykudG9GaXhlZCgxKTtcbiAgICAgICAgcmV0dXJuIGZhaHJlbmhlaXRcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb252ZXJ0VG9DZWxzaXVzLFxuICAgICAgICBjb252ZXJ0VG9GYWhyZW5oZWl0XG4gICAgfVxuXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsInJlcXVpcmUoJy4vc3R5bGVzLnNjc3MnKTtcblxuaW1wb3J0IHsgY29uZmlnQXBpIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBoZWxwZXJmdW5jdGlvbiB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgdGVtcGVyYXR1cmVDb252ZXJzaW9uIH0gZnJvbSBcIi4vdGVtcGVyYXR1cmVDb252ZXJzaW9uXCI7XG5cblxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdEJ1dHRvbicpO1xuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbmNvbnN0IGZvcmVjYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvcmVjYXN0RGl2Jyk7XG5cbi8vIExpdmUgVmFsaWRpdHkgQ2hlY2sgZm9yIElucHV0LiBPbmx5IGFjY2VwdHMgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIGFuZCBzcGFjZXNcbmNpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgIGlmKGNpdHlJbnB1dC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggfHwgY2l0eUlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICBjaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2l0eUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICB9XG59KTtcblxuLy8gU3VibWl0IEJ1dHRvbiAtIFByZXZlbnQgRGVmYXVsdFxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKGNpdHlJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgY2l0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdldEFwaVJlc3BvbnNlQnlDaXR5KGNpdHlJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNpdHlJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBcbn0pXG5cbi8vIEdldCBBUEkgcmVzcG9uc2UgLSBVc2UgQXN5bmMgQXdhaXRcbmNvbnN0IGdldEFwaVJlc3BvbnNlQnlDaXR5ID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7Y29uZmlnQXBpLmFwaUtleX1gKTtcbiAgICAgICAgbGV0IHBhcnNlZEpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGdldFdlYXRoZXJEZXRhaWxzKHBhcnNlZEpzb24pO1xuICAgIH1cbiAgICBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG4vLyBHZXQgd2VhdGhlciBkZXRhaWxzIGZyb20gcGFyc2VkSnNvblxuY29uc3QgZ2V0V2VhdGhlckRldGFpbHMgPSAocGFyc2VkSnNvbikgPT4ge1xuICAgIGlmKHBhcnNlZEpzb24ubWFpbiAhPT0gdW5kZWZpbmVkICYmIHBhcnNlZEpzb24ud2VhdGhlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCB0ZW1wZXJhdHVyZXMgPSB7XG4gICAgICAgICAgICB0ZW1wOiBgJHtwYXJzZWRKc29uLm1haW4udGVtcH1gLFxuICAgICAgICAgICAgdGVtcE1pbjogYCR7cGFyc2VkSnNvbi5tYWluLnRlbXBfbWlufWAsXG4gICAgICAgICAgICB0ZW1wTWF4OiBgJHtwYXJzZWRKc29uLm1haW4udGVtcF9tYXh9YFxuICAgICAgICB9O1xuICAgICAgICBsZXQgd2VhdGhlciA9IHtcbiAgICAgICAgICAgIG1haW46IGAke3BhcnNlZEpzb24ud2VhdGhlclswXS5tYWlufWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYCR7cGFyc2VkSnNvbi53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWAsXG4gICAgICAgICAgICBpY29uQ29kZTogYCR7cGFyc2VkSnNvbi53ZWF0aGVyWzBdLmljb259YFxuICAgICAgICB9O1xuICAgICAgICBwb3B1bGF0ZUZvcmVjYXN0RGl2KHRlbXBlcmF0dXJlcywgd2VhdGhlciwgcGFyc2VkSnNvbi5uYW1lKTtcbiAgICAgICAgY2hhbmdlQm9keUJhY2tncm91bmRJbWFnZSh3ZWF0aGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgfVxufVxuXG4vLyBQb3B1bGF0ZSBEaXYgd2l0aCBGb3JlY2FzdFxuY29uc3QgcG9wdWxhdGVGb3JlY2FzdERpdiA9ICh0ZW1wZXJhdHVyZXMsIHdlYXRoZXIsIG5hbWVPZkNpdHkpID0+IHtcblxuICAgIC8vIFJlbW92ZSBQcmV2aW91cyBDaGlsZCBOb2RlcyBvZiBEaXZcbiAgICBoZWxwZXJmdW5jdGlvbi5yZW1vdmVDaGlsZE5vZGVzKGZvcmVjYXN0RGl2KTtcblxuICAgIC8vIEdpdmUgdXNlciBvcHRpb24gdG8gY2hvb3NlIGNlbHNpdXMgb3IgZmFocmVuaGVpdFxuICAgIGxldCBjaG9vc2VVbml0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNob29zZVVuaXRzRGl2LmlkID0gJ2Nob29zZVVuaXRzRGl2JztcbiAgICBsZXQgY2Vsc2l1c09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjZWxzaXVzT3B0aW9uLmlubmVyVGV4dCA9ICfCukMnO1xuICAgIGNlbHNpdXNPcHRpb24uaWQgPSAnc2hvd0luQ2Vsc2l1cyc7XG4gICAgY2Vsc2l1c09wdGlvbi5jbGFzc0xpc3QuYWRkKCdjaG9zZW5PcHRpb24nKTtcbiAgICBsZXQgZmFocmVuaGVpdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYWhyZW5oZWl0T3B0aW9uLmlubmVyVGV4dCA9ICfCukYnO1xuICAgIGZhaHJlbmhlaXRPcHRpb24uaWQgPSAnc2hvd0luRmFocmVuaGVpdCc7XG5cbiAgICAvLyBBZGQgY2xpY2sgbGlzdGVuZXJzIGZvciBib3RoIG9wdGlvbnNcbiAgICBjZWxzaXVzT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCFjZWxzaXVzT3B0aW9uLmNsYXNzTGlzdC5jb250YWlucygnY2hvc2VuT3B0aW9uJykpIHtcbiAgICAgICAgICAgIGNlbHNpdXNPcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnY2hvc2VuT3B0aW9uJyk7XG4gICAgICAgICAgICBmYWhyZW5oZWl0T3B0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2Nob3Nlbk9wdGlvbicpO1xuICAgICAgICAgICAgbGV0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXBlcmF0dXJlJyk7XG4gICAgICAgICAgICBsZXQgbWluaW11bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW5pbXVtJyk7XG4gICAgICAgICAgICBsZXQgbWF4aW11bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXhpbXVtJyk7XG5cbiAgICAgICAgICAgIC8vIFBvcHVsYXRlIHdpdGggY29ycmVjdCB0ZW1wZXJhdHVyZVxuICAgICAgICAgICAgdGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gdGVtcGVyYXR1cmVDb252ZXJzaW9uLmNvbnZlcnRUb0NlbHNpdXModGVtcGVyYXR1cmVzLnRlbXApO1xuICAgICAgICAgICAgbWluaW11bS5pbm5lclRleHQgPSBgTWluOiAke3RlbXBlcmF0dXJlQ29udmVyc2lvbi5jb252ZXJ0VG9DZWxzaXVzKHRlbXBlcmF0dXJlcy50ZW1wTWluKX1gO1xuICAgICAgICAgICAgbWF4aW11bS5pbm5lclRleHQgPSBgTWF4OiAke3RlbXBlcmF0dXJlQ29udmVyc2lvbi5jb252ZXJ0VG9DZWxzaXVzKHRlbXBlcmF0dXJlcy50ZW1wTWF4KX1gO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBHaXZlIGNvcnJlY3Qgc3VmZml4XG4gICAgICAgICAgICB0ZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdjZWxzaXVzJyk7XG4gICAgICAgICAgICB0ZW1wZXJhdHVyZS5jbGFzc0xpc3QucmVtb3ZlKCdmYWhyZW5oZWl0Jyk7XG4gICAgICAgICAgICBtaW5pbXVtLmNsYXNzTGlzdC5hZGQoJ2NlbHNpdXMnKTtcbiAgICAgICAgICAgIG1pbmltdW0uY2xhc3NMaXN0LnJlbW92ZSgnZmFocmVuaGVpdCcpO1xuICAgICAgICAgICAgbWF4aW11bS5jbGFzc0xpc3QuYWRkKCdjZWxzaXVzJyk7XG4gICAgICAgICAgICBtYXhpbXVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhaHJlbmhlaXQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmFocmVuaGVpdE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZighZmFocmVuaGVpdE9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Nob3Nlbk9wdGlvbicpKSB7XG4gICAgICAgICAgICBmYWhyZW5oZWl0T3B0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2Nob3Nlbk9wdGlvbicpO1xuICAgICAgICAgICAgY2Vsc2l1c09wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdjaG9zZW5PcHRpb24nKTtcbiAgICAgICAgICAgIGxldCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpO1xuICAgICAgICAgICAgbGV0IG1pbmltdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWluaW11bScpO1xuICAgICAgICAgICAgbGV0IG1heGltdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF4aW11bScpO1xuXG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSB3aXRoIGNvcnJlY3QgdGVtcGVyYXR1cmVcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IHRlbXBlcmF0dXJlQ29udmVyc2lvbi5jb252ZXJ0VG9GYWhyZW5oZWl0KHRlbXBlcmF0dXJlcy50ZW1wKTtcbiAgICAgICAgICAgIG1pbmltdW0uaW5uZXJUZXh0ID0gYE1pbjogJHt0ZW1wZXJhdHVyZUNvbnZlcnNpb24uY29udmVydFRvRmFocmVuaGVpdCh0ZW1wZXJhdHVyZXMudGVtcE1pbil9YDtcbiAgICAgICAgICAgIG1heGltdW0uaW5uZXJUZXh0ID0gYE1heDogJHt0ZW1wZXJhdHVyZUNvbnZlcnNpb24uY29udmVydFRvRmFocmVuaGVpdCh0ZW1wZXJhdHVyZXMudGVtcE1heCl9YDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gR2l2ZSBjb3JyZWN0IHN1ZmZpeFxuICAgICAgICAgICAgdGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZCgnZmFocmVuaGVpdCcpO1xuICAgICAgICAgICAgdGVtcGVyYXR1cmUuY2xhc3NMaXN0LnJlbW92ZSgnY2Vsc2l1cycpO1xuICAgICAgICAgICAgbWluaW11bS5jbGFzc0xpc3QuYWRkKCdmYWhyZW5oZWl0Jyk7XG4gICAgICAgICAgICBtaW5pbXVtLmNsYXNzTGlzdC5yZW1vdmUoJ2NlbHNpdXMnKTtcbiAgICAgICAgICAgIG1heGltdW0uY2xhc3NMaXN0LmFkZCgnZmFocmVuaGVpdCcpO1xuICAgICAgICAgICAgbWF4aW11bS5jbGFzc0xpc3QucmVtb3ZlKCdjZWxzaXVzJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgaGVscGVyZnVuY3Rpb24uYXBwZW5kTXVsdGlwbGVOb2Rlc1RvUGFyZW50KGNob29zZVVuaXRzRGl2LCBjZWxzaXVzT3B0aW9uLCBmYWhyZW5oZWl0T3B0aW9uKTtcbiAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChjaG9vc2VVbml0c0Rpdik7XG5cbiAgICAvLyBDcmVhdGUgJ2NpdHlDYXJkJyBEaXYgdGhhdCB3aWxsIGNvbnRhaW4gYWxsIHRoZSBwcm9wZXJ0aWVzIG9mIGFza2VkIERpdlxuICAgIGxldCBjaXR5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpdHlDYXJkLmlkID0gJ2NpdHlDYXJkJztcbiAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChjaXR5Q2FyZCk7XG5cbiAgICAvLyBDcmVhdGVzIERpdiBhbmQgaDIgZWxlbWVudCB3aXRoIGNpdHkgbmFtZSBpLmU6ICdCYXJjZWxvbmEnXG4gICAgbGV0IGNpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaXR5RGl2LmlkID0gJ2NpdHknO1xuICAgIGxldCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY2l0eU5hbWUuaW5uZXJUZXh0ID0gbmFtZU9mQ2l0eTtcbiAgICBjaXR5RGl2LmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcbiAgICBjaXR5Q2FyZC5hcHBlbmRDaGlsZChjaXR5RGl2KTtcblxuICAgIC8vIENyZWF0ZXMgYSBEaXYgYW5kIHAgZWxlbWVudCB3aXRoIGRlc2NyaXB0aW9uIGkuZTogJ0NsZWFyIHNraWVzJ1xuICAgIGxldCB3ZWF0aGVyRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb25EaXYuaWQgPSAnd2VhdGhlckRlc2NyaXB0aW9uRGl2JztcbiAgICBsZXQgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5pbm5lclRleHQgPSB3ZWF0aGVyLmRlc2NyaXB0aW9uO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgbGV0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHt3ZWF0aGVyLmljb25Db2RlfS5wbmdgO1xuICAgIGhlbHBlcmZ1bmN0aW9uLmFwcGVuZE11bHRpcGxlTm9kZXNUb1BhcmVudCh3ZWF0aGVyRGVzY3JpcHRpb25EaXYsIHdlYXRoZXJEZXNjcmlwdGlvbiwgd2VhdGhlckljb24pO1xuICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKHdlYXRoZXJEZXNjcmlwdGlvbkRpdik7XG5cbiAgICAvLyBDcmVhdGVzIGEgRGl2IGFuZCBwIGVsZW1lbnQgd2l0aCBjdXJyZW50IHRlbXBlcmF0dXJlIGkuZTogJzI0wrpDJ1xuICAgIGxldCBjdXJyZW50VGVtcGVyYXR1cmVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBjdXJyZW50Q2VsY2l1cyA9IHRlbXBlcmF0dXJlQ29udmVyc2lvbi5jb252ZXJ0VG9DZWxzaXVzKHRlbXBlcmF0dXJlcy50ZW1wKTtcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVQLmlubmVyVGV4dCA9IGN1cnJlbnRDZWxjaXVzO1xuICAgIGN1cnJlbnRUZW1wZXJhdHVyZVAuaWQgPSAndGVtcGVyYXR1cmUnO1xuICAgIGN1cnJlbnRUZW1wZXJhdHVyZVAuY2xhc3NMaXN0LmFkZCgnY2VsY2l1cycpO1xuICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wZXJhdHVyZVApO1xuXG4gICAgLy8gQ3JlYXRlcyBhIERpdiBhbmQgcCBlbGVtZW50IHdpdGggbWluIHRlbXBlcmF0dXJlIGkuZTogJzIwwrpDJ1xuICAgIGxldCBtaW5UZW1wZXJhdHVyZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IG1pbkNlbGNpdXMgPSB0ZW1wZXJhdHVyZUNvbnZlcnNpb24uY29udmVydFRvQ2Vsc2l1cyh0ZW1wZXJhdHVyZXMudGVtcE1pbik7XG4gICAgbWluVGVtcGVyYXR1cmVQLmlubmVyVGV4dCA9IGBNaW46ICR7bWluQ2VsY2l1c31gO1xuICAgIG1pblRlbXBlcmF0dXJlUC5pZCA9ICdtaW5pbXVtJztcbiAgICBtaW5UZW1wZXJhdHVyZVAuY2xhc3NMaXN0LmFkZCgnY2VsY2l1cycpO1xuICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKG1pblRlbXBlcmF0dXJlUCk7XG5cbiAgICAvLyBDcmVhdGVzIGEgRGl2IGFuZCBwIGVsZW1lbnQgd2l0aCBtYXggdGVtcGVyYXR1cmUgaS5lOiAnMzDCukMnXG4gICAgbGV0IG1heFRlbXBlcmF0dXJlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgbWF4Q2VsY2l1cyA9IHRlbXBlcmF0dXJlQ29udmVyc2lvbi5jb252ZXJ0VG9DZWxzaXVzKHRlbXBlcmF0dXJlcy50ZW1wTWF4KTtcbiAgICBtYXhUZW1wZXJhdHVyZVAuaW5uZXJUZXh0ID0gYE1heDogJHttYXhDZWxjaXVzfWA7XG4gICAgbWF4VGVtcGVyYXR1cmVQLmlkID0gJ21heGltdW0nO1xuICAgIG1heFRlbXBlcmF0dXJlUC5jbGFzc0xpc3QuYWRkKCdjZWxjaXVzJyk7XG4gICAgY2l0eUNhcmQuYXBwZW5kQ2hpbGQobWF4VGVtcGVyYXR1cmVQKTtcblxufVxuXG4vLyBDaGFuZ2UgQmFja2dyb3VkbiBJbWFnZSBiYXNlZCBvbiB3ZWF0aGVyXG5jb25zdCBjaGFuZ2VCb2R5QmFja2dyb3VuZEltYWdlID0gKHdlYXRoZXIpID0+IHtcblxuICAgICAgICAvLyBDaGFuZ2UgQmFja2dyb3VkIEltYWdlIEJhc2VkIE9uIG1haW4gd2VhdGhlclxuICAgICAgICBpZih3ZWF0aGVyLm1haW4gPT09ICdDbGVhcicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSguLi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2NsZWFyJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2VhdGhlci5tYWluID09PSAnQ2xvdWRzJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnY2xvdWRzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2VhdGhlci5tYWluID09PSAnUmFpbicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSguLi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3JhaW4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyLm1haW4gPT09ICdNaXN0Jykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KTtcbiAgICAgICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=