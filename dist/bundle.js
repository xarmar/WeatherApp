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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.clear {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center left;\n}\n\n.clouds {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center left;\n}\n\n.rain {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center right;\n}\n\n.mist {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center right;\n}\n\n#mainContainer {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  align-items: center;\n}\n#mainContainer h1 {\n  padding: 10px;\n  background-color: sandybrown;\n  max-width: fit-content;\n}\n\nform {\n  margin-top: 50px;\n}\nform input {\n  flex-direction: row;\n  padding: 5px;\n}\nform button {\n  border: 2px solid transparent;\n  padding: 5px;\n  background-color: sandybrown;\n}\nform button:hover {\n  cursor: pointer;\n  border: 2px solid black;\n}\n\n.invalid {\n  background-color: salmon;\n}\n\n#forecastDiv {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  width: 45%;\n  margin: 35px;\n  text-align: center;\n}\n#forecastDiv #chooseUnitsDiv {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n#forecastDiv #chooseUnitsDiv p {\n  margin: 0px 6px 15px 6px;\n  padding: 10px;\n  background-color: lightskyblue;\n  border: 2px solid transparent;\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none;\n  /* Standard */\n}\n#forecastDiv #chooseUnitsDiv p:hover {\n  cursor: pointer;\n  border: 2px solid black;\n}\n#forecastDiv #chooseUnitsDiv .chosenOption {\n  border: 2px solid black;\n}\n#forecastDiv #cityCard {\n  font-size: 0.9em;\n  max-width: 100%;\n  border: 2px solid sandybrown;\n  background-color: khaki;\n  display: grid;\n  grid-template-areas: \"city\" \"temperature\" \"description\" \"minimum\" \"maximum\";\n}\n#forecastDiv #cityCard #city {\n  grid-area: city;\n  background-color: sandybrown;\n}\n#forecastDiv #cityCard #city h2 {\n  font-size: 1.5em;\n  padding: 0;\n}\n#forecastDiv #cityCard #weatherDescriptionDiv {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n#forecastDiv #cityCard #weatherDescriptionDiv #description {\n  grid-area: description;\n  font-weight: 550;\n}\n#forecastDiv #cityCard #temperature {\n  grid-area: temperature;\n  font-weight: 550;\n}\n#forecastDiv #cityCard #minimum {\n  margin-left: auto;\n  margin-right: auto;\n  grid-area: minimum;\n}\n#forecastDiv #cityCard #minimum::before {\n  content: \"❋ \";\n  color: lightseagreen;\n}\n#forecastDiv #cityCard #maximum {\n  margin-left: auto;\n  margin-right: auto;\n  grid-area: maximum;\n}\n#forecastDiv #cityCard #maximum::before {\n  content: \"☀ \";\n  color: salmon;\n}\n#forecastDiv #temperaturesDiv {\n  display: flex;\n  flex-direction: column;\n}\n#forecastDiv #temperaturesDiv div {\n  margin: 5px 10px 5px 10px;\n}\n\n.celcius::after {\n  content: \" ºC\";\n}\n\n.fahrenheit::after {\n  content: \" ºF\";\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAKhB;EACI,yDAAA;EACA,gCAAA;AAHJ;;AAMA;EACI,yDAAA;EACA,gCAAA;AAHJ;;AAMA;EACI,yDAAA;EACA,iCAAA;AAHJ;;AAMA;EACI,yDAAA;EACA,iCAAA;AAHJ;;AAMA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,mBAAA;AAHJ;AAII;EACI,aAAA;EACA,4BAAA;EACA,sBAAA;AAFR;;AAMA;EACI,gBAAA;AAHJ;AAII;EACI,mBAAA;EACA,YAAA;AAFR;AAII;EACI,6BAAA;EACA,YAAA;EACA,4BAAA;AAFR;AAGQ;EACI,eAAA;EACA,uBAAA;AADZ;;AAMA;EACI,wBAAA;AAHJ;;AAMA;EAzDI,iBAAA;EACA,kBAAA;EA0DA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;AAFJ;AAGI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AADR;AAEQ;EACI,wBAAA;EACA,aAAA;EACA,8BAAA;EACA,6BAAA;EACA,yBAAA;EAA2B,WAAA;EAC3B,sBAAA;EAAwB,YAAA;EACxB,qBAAA;EAAuB,eAAA;EACvB,iBAAA;EAAmB,aAAA;AAI/B;AAHY;EACI,eAAA;EACA,uBAAA;AAKhB;AAFQ;EACI,uBAAA;AAIZ;AADI;EACA,gBAAA;EACA,eAAA;EACA,4BAAA;EACA,uBAAA;EACA,aAAA;EACA,2EACA;AAEJ;AAGI;EACI,eAAA;EACA,4BAAA;AADR;AAEQ;EACI,gBAAA;EACA,UAAA;AAAZ;AAGI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;AADR;AAEQ;EACI,sBAAA;EACA,gBAAA;AAAZ;AAGI;EACI,sBAAA;EACA,gBAAA;AADR;AAGI;EAtHA,iBAAA;EACA,kBAAA;EAuHI,kBAAA;AAAR;AACQ;EACI,aAAA;EACA,oBAAA;AACZ;AAEI;EA9HA,iBAAA;EACA,kBAAA;EA+HI,kBAAA;AACR;AAAQ;EACI,aAAA;EACA,aAAA;AAEZ;AAEI;EACI,aAAA;EACA,sBAAA;AAAR;AACQ;EACI,yBAAA;AACZ;;AAKA;EACI,cAAA;AAFJ;;AAIA;EACI,cAAA;AADJ","sourcesContent":["@mixin centerHorizontally {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.clear {\n    background-image: url('./images/clear.jpeg');\n    background-position: center left;\n}\n\n.clouds {\n    background-image: url('./images/clouds.jpeg');\n    background-position: center left;\n}\n\n.rain {\n    background-image: url('./images/rain.jpeg');\n    background-position: center right;\n}\n\n.mist {\n    background-image: url('./images/mist.png');\n    background-position: center right;\n}\n\n#mainContainer {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    align-items: center;\n    h1 {\n        padding: 10px;\n        background-color: sandybrown;\n        max-width: fit-content;\n    }\n}\n\nform {\n    margin-top: 50px;\n    input {\n        flex-direction: row;\n        padding: 5px;\n    }\n    button {\n        border: 2px solid transparent;\n        padding: 5px;\n        background-color: sandybrown;\n        &:hover {\n            cursor: pointer;\n            border: 2px solid black;\n        }\n    }\n}\n\n.invalid {\n    background-color: salmon;\n}\n\n#forecastDiv {\n    @include centerHorizontally();\n    margin-top: 30px;\n    width: 45%;\n    margin: 35px;\n    text-align: center;\n    #chooseUnitsDiv {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        p {\n            margin: 0px 6px 15px 6px;\n            padding: 10px;\n            background-color: lightskyblue;\n            border: 2px solid transparent;\n            -webkit-user-select: none; /* Safari */        \n            -moz-user-select: none; /* Firefox */\n            -ms-user-select: none; /* IE10+/Edge */\n            user-select: none; /* Standard */\n            &:hover {\n                cursor: pointer;\n                border: 2px solid black;\n            }\n        }\n        .chosenOption {\n            border: 2px solid black;\n        }\n    }\n    #cityCard {\n    font-size: 0.9em;\n    max-width: 100%;\n    border: 2px solid sandybrown;\n    background-color: khaki;\n    display: grid;\n    grid-template-areas: \n    'city'\n    'temperature'\n    'description'\n    'minimum'\n    'maximum';\n    #city {\n        grid-area: city;\n        background-color: sandybrown;\n        h2 {\n            font-size: 1.5em;\n            padding: 0;\n        }\n    }\n    #weatherDescriptionDiv {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        #description {\n            grid-area: description;\n            font-weight: 550;\n        }\n    }\n    #temperature {\n        grid-area: temperature;\n        font-weight: 550;\n    }\n    #minimum {\n        @include centerHorizontally();\n        grid-area: minimum;\n        &::before {\n            content: '❋ ';\n            color: lightseagreen;\n        }\n    }\n    #maximum {\n        @include centerHorizontally();\n        grid-area: maximum;\n        &::before {\n            content: '☀ ';\n            color: salmon;\n        }\n    }\n    }\n    #temperaturesDiv {\n        display: flex;\n        flex-direction: column;\n        div {\n            margin: 5px 10px 5px 10px;\n        }\n    }\n}\n\n// Celcius and Fahrenheit Suffix\n.celcius::after {\n    content: ' ºC';\n}\n.fahrenheit::after {\n    content: ' ºF';\n}"],"sourceRoot":""}]);
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

// Set Backgroud Image based on Weather
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3RlbXBlcmF0dXJlQ29udmVyc2lvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ2hHLDRDQUE0QyxtSEFBc0M7QUFDbEYsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDRDQUE0QywrR0FBb0M7QUFDaEYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNkRBQTZELFVBQVUsc0VBQXNFLHFDQUFxQyxHQUFHLGFBQWEsc0VB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLDBGQUFzQztBQUMxRSx3Q0FBd0MsMEZBQXNDLHVCQUF1QjtBQUNyRyx3Q0FBd0MsMEZBQXNDLHVCQUF1Qjs7QUFFckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsNkZBQXlDO0FBQzdFLHdDQUF3Qyw2RkFBeUMsdUJBQXVCO0FBQ3hHLHdDQUF3Qyw2RkFBeUMsdUJBQXVCOztBQUV4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsSUFBSSx3RkFBMEM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsaUJBQWlCO0FBQzFFLElBQUksd0ZBQTBDO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsMEZBQXNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMEZBQXNDO0FBQzNELHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDBGQUFzQztBQUMzRCx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2xlYXIuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Nsb3Vkcy5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcmFpbi5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbWlzdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi5jbGVhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7XFxufVxcblxcbi5jbG91ZHMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBsZWZ0O1xcbn1cXG5cXG4ucmFpbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0O1xcbn1cXG5cXG4ubWlzdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0O1xcbn1cXG5cXG4jbWFpbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNtYWluQ29udGFpbmVyIGgxIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzYW5keWJyb3duO1xcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuZm9ybSB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5mb3JtIGlucHV0IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbmZvcm0gYnV0dG9uIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogc2FuZHlicm93bjtcXG59XFxuZm9ybSBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcXG59XFxuXFxuI2ZvcmVjYXN0RGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHdpZHRoOiA0NSU7XFxuICBtYXJnaW46IDM1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNmb3JlY2FzdERpdiAjY2hvb3NlVW5pdHNEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI2ZvcmVjYXN0RGl2ICNjaG9vc2VVbml0c0RpdiBwIHtcXG4gIG1hcmdpbjogMHB4IDZweCAxNXB4IDZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBTYWZhcmkgKi9cXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBGaXJlZm94ICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBJRTEwKy9FZGdlICovXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIFN0YW5kYXJkICovXFxufVxcbiNmb3JlY2FzdERpdiAjY2hvb3NlVW5pdHNEaXYgcDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuI2ZvcmVjYXN0RGl2ICNjaG9vc2VVbml0c0RpdiAuY2hvc2VuT3B0aW9uIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jZm9yZWNhc3REaXYgI2NpdHlDYXJkIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBzYW5keWJyb3duO1xcbiAgYmFja2dyb3VuZC1jb2xvcjoga2hha2k7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNpdHlcXFwiIFxcXCJ0ZW1wZXJhdHVyZVxcXCIgXFxcImRlc2NyaXB0aW9uXFxcIiBcXFwibWluaW11bVxcXCIgXFxcIm1heGltdW1cXFwiO1xcbn1cXG4jZm9yZWNhc3REaXYgI2NpdHlDYXJkICNjaXR5IHtcXG4gIGdyaWQtYXJlYTogY2l0eTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNhbmR5YnJvd247XFxufVxcbiNmb3JlY2FzdERpdiAjY2l0eUNhcmQgI2NpdHkgaDIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbiNmb3JlY2FzdERpdiAjY2l0eUNhcmQgI3dlYXRoZXJEZXNjcmlwdGlvbkRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jZm9yZWNhc3REaXYgI2NpdHlDYXJkICN3ZWF0aGVyRGVzY3JpcHRpb25EaXYgI2Rlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICBmb250LXdlaWdodDogNTUwO1xcbn1cXG4jZm9yZWNhc3REaXYgI2NpdHlDYXJkICN0ZW1wZXJhdHVyZSB7XFxuICBncmlkLWFyZWE6IHRlbXBlcmF0dXJlO1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuI2ZvcmVjYXN0RGl2ICNjaXR5Q2FyZCAjbWluaW11bSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGdyaWQtYXJlYTogbWluaW11bTtcXG59XFxuI2ZvcmVjYXN0RGl2ICNjaXR5Q2FyZCAjbWluaW11bTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinYsgXFxcIjtcXG4gIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbn1cXG4jZm9yZWNhc3REaXYgI2NpdHlDYXJkICNtYXhpbXVtIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgZ3JpZC1hcmVhOiBtYXhpbXVtO1xcbn1cXG4jZm9yZWNhc3REaXYgI2NpdHlDYXJkICNtYXhpbXVtOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKYgCBcXFwiO1xcbiAgY29sb3I6IHNhbG1vbjtcXG59XFxuI2ZvcmVjYXN0RGl2ICN0ZW1wZXJhdHVyZXNEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNmb3JlY2FzdERpdiAjdGVtcGVyYXR1cmVzRGl2IGRpdiB7XFxuICBtYXJnaW46IDVweCAxMHB4IDVweCAxMHB4O1xcbn1cXG5cXG4uY2VsY2l1czo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiDCukNcXFwiO1xcbn1cXG5cXG4uZmFocmVuaGVpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiDCukZcXFwiO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBS2hCO0VBQ0kseURBQUE7RUFDQSxnQ0FBQTtBQUhKOztBQU1BO0VBQ0kseURBQUE7RUFDQSxnQ0FBQTtBQUhKOztBQU1BO0VBQ0kseURBQUE7RUFDQSxpQ0FBQTtBQUhKOztBQU1BO0VBQ0kseURBQUE7RUFDQSxpQ0FBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSEo7QUFJSTtFQUNJLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRlI7O0FBTUE7RUFDSSxnQkFBQTtBQUhKO0FBSUk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFGUjtBQUlJO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFGUjtBQUdRO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0FBRFo7O0FBTUE7RUFDSSx3QkFBQTtBQUhKOztBQU1BO0VBekRJLGlCQUFBO0VBQ0Esa0JBQUE7RUEwREEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRko7QUFHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRFI7QUFFUTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUEyQixXQUFBO0VBQzNCLHNCQUFBO0VBQXdCLFlBQUE7RUFDeEIscUJBQUE7RUFBdUIsZUFBQTtFQUN2QixpQkFBQTtFQUFtQixhQUFBO0FBSS9CO0FBSFk7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7QUFLaEI7QUFGUTtFQUNJLHVCQUFBO0FBSVo7QUFESTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkVBQ0E7QUFFSjtBQUdJO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0FBRFI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQUFaO0FBR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURSO0FBRVE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBQVo7QUFHSTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUdJO0VBdEhBLGlCQUFBO0VBQ0Esa0JBQUE7RUF1SEksa0JBQUE7QUFBUjtBQUNRO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0FBQ1o7QUFFSTtFQTlIQSxpQkFBQTtFQUNBLGtCQUFBO0VBK0hJLGtCQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBRVo7QUFFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUFSO0FBQ1E7RUFDSSx5QkFBQTtBQUNaOztBQUtBO0VBQ0ksY0FBQTtBQUZKOztBQUlBO0VBQ0ksY0FBQTtBQURKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBjZW50ZXJIb3Jpem9udGFsbHkge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2NsZWFyLmpwZWcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7XFxufVxcblxcbi5jbG91ZHMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2Nsb3Vkcy5qcGVnJyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBsZWZ0O1xcbn1cXG5cXG4ucmFpbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvcmFpbi5qcGVnJyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcXG59XFxuXFxuLm1pc3Qge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL21pc3QucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcXG59XFxuXFxuI21haW5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGgxIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYW5keWJyb3duO1xcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgaW5wdXQge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgfVxcbiAgICBidXR0b24ge1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYW5keWJyb3duO1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5pbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2FsbW9uO1xcbn1cXG5cXG4jZm9yZWNhc3REaXYge1xcbiAgICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgbWFyZ2luOiAzNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICNjaG9vc2VVbml0c0RpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgcCB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNnB4IDE1cHggNnB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqLyAgICAgICAgXFxuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUxMCsvRWRnZSAqL1xcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCAqL1xcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5jaG9zZW5PcHRpb24ge1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICNjaXR5Q2FyZCB7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgc2FuZHlicm93bjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjoga2hha2k7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnY2l0eSdcXG4gICAgJ3RlbXBlcmF0dXJlJ1xcbiAgICAnZGVzY3JpcHRpb24nXFxuICAgICdtaW5pbXVtJ1xcbiAgICAnbWF4aW11bSc7XFxuICAgICNjaXR5IHtcXG4gICAgICAgIGdyaWQtYXJlYTogY2l0eTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHNhbmR5YnJvd247XFxuICAgICAgICBoMiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICN3ZWF0aGVyRGVzY3JpcHRpb25EaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICNkZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTUwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICN0ZW1wZXJhdHVyZSB7XFxuICAgICAgICBncmlkLWFyZWE6IHRlbXBlcmF0dXJlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gICAgfVxcbiAgICAjbWluaW11bSB7XFxuICAgICAgICBAaW5jbHVkZSBjZW50ZXJIb3Jpem9udGFsbHkoKTtcXG4gICAgICAgIGdyaWQtYXJlYTogbWluaW11bTtcXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgY29udGVudDogJ+KdiyAnO1xcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICNtYXhpbXVtIHtcXG4gICAgICAgIEBpbmNsdWRlIGNlbnRlckhvcml6b250YWxseSgpO1xcbiAgICAgICAgZ3JpZC1hcmVhOiBtYXhpbXVtO1xcbiAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBjb250ZW50OiAn4piAICc7XFxuICAgICAgICAgICAgY29sb3I6IHNhbG1vbjtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICB9XFxuICAgICN0ZW1wZXJhdHVyZXNEaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBkaXYge1xcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLy8gQ2VsY2l1cyBhbmQgRmFocmVuaGVpdCBTdWZmaXhcXG4uY2VsY2l1czo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnIMK6Qyc7XFxufVxcbi5mYWhyZW5oZWl0OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgwrpGJztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjb25maWdBcGkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGFwaUtleSA9ICdhZGFiZTY5ZDhlMWI4NTQ4YmFkOTBmNjNmNmRlOTQ1Nyc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhcGlLZXk6YXBpS2V5XG4gICAgfVxufSkoKTtcbiIsImV4cG9ydCBjb25zdCBoZWxwZXJmdW5jdGlvbiA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBhcHBlbmRNdWx0aXBsZU5vZGVzVG9QYXJlbnQgPSAocGFyZW50Tm9kZSwgLi4uY2hpbGROb2RlcykgPT4ge1xuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmQoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDaGlsZE5vZGVzID0gKHBhcmVudE5vZGUpID0+IHtcbiAgICAgICAgd2hpbGUocGFyZW50Tm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBhcmVudE5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhcHBlbmRNdWx0aXBsZU5vZGVzVG9QYXJlbnQsXG4gICAgICAgIHJlbW92ZUNoaWxkTm9kZXNcbiAgICB9XG5cbn0pKCk7IiwiZXhwb3J0IGNvbnN0IHRlbXBlcmF0dXJlQ29udmVyc2lvbiA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBjb252ZXJ0VG9DZWxzaXVzID0gKGtlbHZpbikgPT4ge1xuICAgICAgICBsZXQgY2VsY2l1cyA9IChrZWx2aW4gLSAyNzMuMTUpLnRvRml4ZWQoMSk7XG4gICAgICAgIHJldHVybiBjZWxjaXVzXG4gICAgfVxuXG4gICAgY29uc3QgY29udmVydFRvRmFocmVuaGVpdCA9IChrZWx2aW4pID0+IHtcbiAgICAgICAgbGV0IGZhaHJlbmhlaXQgPSAoKGtlbHZpbiAqIDEuOCkgLSA0NTkuNjcpLnRvRml4ZWQoMSk7XG4gICAgICAgIHJldHVybiBmYWhyZW5oZWl0XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udmVydFRvQ2Vsc2l1cyxcbiAgICAgICAgY29udmVydFRvRmFocmVuaGVpdFxuICAgIH1cblxufSkoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJyZXF1aXJlKCcuL3N0eWxlcy5zY3NzJyk7XG5cbmltcG9ydCB7IGNvbmZpZ0FwaSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgaGVscGVyZnVuY3Rpb24gfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnNcIjtcbmltcG9ydCB7IHRlbXBlcmF0dXJlQ29udmVyc2lvbiB9IGZyb20gXCIuL3RlbXBlcmF0dXJlQ29udmVyc2lvblwiO1xuXG5cbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRCdXR0b24nKTtcbmNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JlY2FzdERpdicpO1xuXG4vLyBMaXZlIFZhbGlkaXR5IENoZWNrIGZvciBJbnB1dC4gT25seSBhY2NlcHRzIGFscGhhYmV0aWMgY2hhcmFjdGVycyBhbmQgc3BhY2VzXG5jaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICBpZihjaXR5SW5wdXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoIHx8IGNpdHlJbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgY2l0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNpdHlJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgfVxufSk7XG5cbi8vIFN1Ym1pdCBCdXR0b24gLSBQcmV2ZW50IERlZmF1bHRcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZihjaXR5SW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgIGNpdHlJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnZXRBcGlSZXNwb25zZUJ5Q2l0eShjaXR5SW5wdXQudmFsdWUpO1xuICAgICAgICBjaXR5SW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gICAgXG59KVxuXG4vLyBHZXQgQVBJIHJlc3BvbnNlIC0gVXNlIEFzeW5jIEF3YWl0XG5jb25zdCBnZXRBcGlSZXNwb25zZUJ5Q2l0eSA9IGFzeW5jIChjaXR5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke2NvbmZpZ0FwaS5hcGlLZXl9YCk7XG4gICAgICAgIGxldCBwYXJzZWRKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBnZXRXZWF0aGVyRGV0YWlscyhwYXJzZWRKc29uKTtcbiAgICB9XG4gICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuLy8gR2V0IHdlYXRoZXIgZGV0YWlscyBmcm9tIHBhcnNlZEpzb25cbmNvbnN0IGdldFdlYXRoZXJEZXRhaWxzID0gKHBhcnNlZEpzb24pID0+IHtcbiAgICBpZihwYXJzZWRKc29uLm1haW4gIT09IHVuZGVmaW5lZCAmJiBwYXJzZWRKc29uLndlYXRoZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgdGVtcGVyYXR1cmVzID0ge1xuICAgICAgICAgICAgdGVtcDogYCR7cGFyc2VkSnNvbi5tYWluLnRlbXB9YCxcbiAgICAgICAgICAgIHRlbXBNaW46IGAke3BhcnNlZEpzb24ubWFpbi50ZW1wX21pbn1gLFxuICAgICAgICAgICAgdGVtcE1heDogYCR7cGFyc2VkSnNvbi5tYWluLnRlbXBfbWF4fWBcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHdlYXRoZXIgPSB7XG4gICAgICAgICAgICBtYWluOiBgJHtwYXJzZWRKc29uLndlYXRoZXJbMF0ubWFpbn1gLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGAke3BhcnNlZEpzb24ud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gLFxuICAgICAgICAgICAgaWNvbkNvZGU6IGAke3BhcnNlZEpzb24ud2VhdGhlclswXS5pY29ufWBcbiAgICAgICAgfTtcbiAgICAgICAgcG9wdWxhdGVGb3JlY2FzdERpdih0ZW1wZXJhdHVyZXMsIHdlYXRoZXIsIHBhcnNlZEpzb24ubmFtZSk7XG4gICAgICAgIGNoYW5nZUJvZHlCYWNrZ3JvdW5kSW1hZ2Uod2VhdGhlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgIH1cbn1cblxuLy8gUG9wdWxhdGUgRGl2IHdpdGggRm9yZWNhc3RcbmNvbnN0IHBvcHVsYXRlRm9yZWNhc3REaXYgPSAodGVtcGVyYXR1cmVzLCB3ZWF0aGVyLCBuYW1lT2ZDaXR5KSA9PiB7XG5cbiAgICAvLyBSZW1vdmUgUHJldmlvdXMgQ2hpbGQgTm9kZXMgb2YgRGl2XG4gICAgaGVscGVyZnVuY3Rpb24ucmVtb3ZlQ2hpbGROb2Rlcyhmb3JlY2FzdERpdik7XG5cbiAgICAvLyBHaXZlIHVzZXIgb3B0aW9uIHRvIGNob29zZSBjZWxzaXVzIG9yIGZhaHJlbmhlaXRcbiAgICBsZXQgY2hvb3NlVW5pdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaG9vc2VVbml0c0Rpdi5pZCA9ICdjaG9vc2VVbml0c0Rpdic7XG4gICAgbGV0IGNlbHNpdXNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2Vsc2l1c09wdGlvbi5pbm5lclRleHQgPSAnwrpDJztcbiAgICBjZWxzaXVzT3B0aW9uLmlkID0gJ3Nob3dJbkNlbHNpdXMnO1xuICAgIGNlbHNpdXNPcHRpb24uY2xhc3NMaXN0LmFkZCgnY2hvc2VuT3B0aW9uJyk7XG4gICAgbGV0IGZhaHJlbmhlaXRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmFocmVuaGVpdE9wdGlvbi5pbm5lclRleHQgPSAnwrpGJztcbiAgICBmYWhyZW5oZWl0T3B0aW9uLmlkID0gJ3Nob3dJbkZhaHJlbmhlaXQnO1xuXG4gICAgLy8gQWRkIGNsaWNrIGxpc3RlbmVycyBmb3IgYm90aCBvcHRpb25zXG4gICAgY2Vsc2l1c09wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZighY2Vsc2l1c09wdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Nob3Nlbk9wdGlvbicpKSB7XG4gICAgICAgICAgICBjZWxzaXVzT3B0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2Nob3Nlbk9wdGlvbicpO1xuICAgICAgICAgICAgZmFocmVuaGVpdE9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdjaG9zZW5PcHRpb24nKTtcbiAgICAgICAgICAgIGxldCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wZXJhdHVyZScpO1xuICAgICAgICAgICAgbGV0IG1pbmltdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWluaW11bScpO1xuICAgICAgICAgICAgbGV0IG1heGltdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWF4aW11bScpO1xuXG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSB3aXRoIGNvcnJlY3QgdGVtcGVyYXR1cmVcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IHRlbXBlcmF0dXJlQ29udmVyc2lvbi5jb252ZXJ0VG9DZWxzaXVzKHRlbXBlcmF0dXJlcy50ZW1wKTtcbiAgICAgICAgICAgIG1pbmltdW0uaW5uZXJUZXh0ID0gYE1pbjogJHt0ZW1wZXJhdHVyZUNvbnZlcnNpb24uY29udmVydFRvQ2Vsc2l1cyh0ZW1wZXJhdHVyZXMudGVtcE1pbil9YDtcbiAgICAgICAgICAgIG1heGltdW0uaW5uZXJUZXh0ID0gYE1heDogJHt0ZW1wZXJhdHVyZUNvbnZlcnNpb24uY29udmVydFRvQ2Vsc2l1cyh0ZW1wZXJhdHVyZXMudGVtcE1heCl9YDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gR2l2ZSBjb3JyZWN0IHN1ZmZpeFxuICAgICAgICAgICAgdGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZCgnY2Vsc2l1cycpO1xuICAgICAgICAgICAgdGVtcGVyYXR1cmUuY2xhc3NMaXN0LnJlbW92ZSgnZmFocmVuaGVpdCcpO1xuICAgICAgICAgICAgbWluaW11bS5jbGFzc0xpc3QuYWRkKCdjZWxzaXVzJyk7XG4gICAgICAgICAgICBtaW5pbXVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhaHJlbmhlaXQnKTtcbiAgICAgICAgICAgIG1heGltdW0uY2xhc3NMaXN0LmFkZCgnY2Vsc2l1cycpO1xuICAgICAgICAgICAgbWF4aW11bS5jbGFzc0xpc3QucmVtb3ZlKCdmYWhyZW5oZWl0Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZhaHJlbmhlaXRPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoIWZhaHJlbmhlaXRPcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjaG9zZW5PcHRpb24nKSkge1xuICAgICAgICAgICAgZmFocmVuaGVpdE9wdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdjaG9zZW5PcHRpb24nKTtcbiAgICAgICAgICAgIGNlbHNpdXNPcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnY2hvc2VuT3B0aW9uJyk7XG4gICAgICAgICAgICBsZXQgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcGVyYXR1cmUnKTtcbiAgICAgICAgICAgIGxldCBtaW5pbXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbmltdW0nKTtcbiAgICAgICAgICAgIGxldCBtYXhpbXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21heGltdW0nKTtcblxuICAgICAgICAgICAgLy8gUG9wdWxhdGUgd2l0aCBjb3JyZWN0IHRlbXBlcmF0dXJlXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZS5pbm5lclRleHQgPSB0ZW1wZXJhdHVyZUNvbnZlcnNpb24uY29udmVydFRvRmFocmVuaGVpdCh0ZW1wZXJhdHVyZXMudGVtcCk7XG4gICAgICAgICAgICBtaW5pbXVtLmlubmVyVGV4dCA9IGBNaW46ICR7dGVtcGVyYXR1cmVDb252ZXJzaW9uLmNvbnZlcnRUb0ZhaHJlbmhlaXQodGVtcGVyYXR1cmVzLnRlbXBNaW4pfWA7XG4gICAgICAgICAgICBtYXhpbXVtLmlubmVyVGV4dCA9IGBNYXg6ICR7dGVtcGVyYXR1cmVDb252ZXJzaW9uLmNvbnZlcnRUb0ZhaHJlbmhlaXQodGVtcGVyYXR1cmVzLnRlbXBNYXgpfWA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEdpdmUgY29ycmVjdCBzdWZmaXhcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoJ2ZhaHJlbmhlaXQnKTtcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2NlbHNpdXMnKTtcbiAgICAgICAgICAgIG1pbmltdW0uY2xhc3NMaXN0LmFkZCgnZmFocmVuaGVpdCcpO1xuICAgICAgICAgICAgbWluaW11bS5jbGFzc0xpc3QucmVtb3ZlKCdjZWxzaXVzJyk7XG4gICAgICAgICAgICBtYXhpbXVtLmNsYXNzTGlzdC5hZGQoJ2ZhaHJlbmhlaXQnKTtcbiAgICAgICAgICAgIG1heGltdW0uY2xhc3NMaXN0LnJlbW92ZSgnY2Vsc2l1cycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIGhlbHBlcmZ1bmN0aW9uLmFwcGVuZE11bHRpcGxlTm9kZXNUb1BhcmVudChjaG9vc2VVbml0c0RpdiwgY2Vsc2l1c09wdGlvbiwgZmFocmVuaGVpdE9wdGlvbik7XG4gICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoY2hvb3NlVW5pdHNEaXYpO1xuXG4gICAgLy8gQ3JlYXRlICdjaXR5Q2FyZCcgRGl2IHRoYXQgd2lsbCBjb250YWluIGFsbCB0aGUgcHJvcGVydGllcyBvZiBhc2tlZCBEaXZcbiAgICBsZXQgY2l0eUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaXR5Q2FyZC5pZCA9ICdjaXR5Q2FyZCc7XG4gICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoY2l0eUNhcmQpO1xuXG4gICAgLy8gQ3JlYXRlcyBEaXYgYW5kIGgyIGVsZW1lbnQgd2l0aCBjaXR5IG5hbWUgaS5lOiAnQmFyY2Vsb25hJ1xuICAgIGxldCBjaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2l0eURpdi5pZCA9ICdjaXR5JztcbiAgICBsZXQgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNpdHlOYW1lLmlubmVyVGV4dCA9IG5hbWVPZkNpdHk7XG4gICAgY2l0eURpdi5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XG4gICAgY2l0eUNhcmQuYXBwZW5kQ2hpbGQoY2l0eURpdik7XG5cbiAgICAvLyBDcmVhdGVzIGEgRGl2IGFuZCBwIGVsZW1lbnQgd2l0aCBkZXNjcmlwdGlvbiBpLmU6ICdDbGVhciBza2llcydcbiAgICBsZXQgd2VhdGhlckRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uRGl2LmlkID0gJ3dlYXRoZXJEZXNjcmlwdGlvbkRpdic7XG4gICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gd2VhdGhlci5kZXNjcmlwdGlvbjtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIGxldCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LyR7d2VhdGhlci5pY29uQ29kZX0ucG5nYDtcbiAgICBoZWxwZXJmdW5jdGlvbi5hcHBlbmRNdWx0aXBsZU5vZGVzVG9QYXJlbnQod2VhdGhlckRlc2NyaXB0aW9uRGl2LCB3ZWF0aGVyRGVzY3JpcHRpb24sIHdlYXRoZXJJY29uKTtcbiAgICBjaXR5Q2FyZC5hcHBlbmRDaGlsZCh3ZWF0aGVyRGVzY3JpcHRpb25EaXYpO1xuXG4gICAgLy8gQ3JlYXRlcyBhIERpdiBhbmQgcCBlbGVtZW50IHdpdGggY3VycmVudCB0ZW1wZXJhdHVyZSBpLmU6ICcyNMK6QydcbiAgICBsZXQgY3VycmVudFRlbXBlcmF0dXJlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZXQgY3VycmVudENlbGNpdXMgPSB0ZW1wZXJhdHVyZUNvbnZlcnNpb24uY29udmVydFRvQ2Vsc2l1cyh0ZW1wZXJhdHVyZXMudGVtcCk7XG4gICAgY3VycmVudFRlbXBlcmF0dXJlUC5pbm5lclRleHQgPSBjdXJyZW50Q2VsY2l1cztcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVQLmlkID0gJ3RlbXBlcmF0dXJlJztcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVQLmNsYXNzTGlzdC5hZGQoJ2NlbGNpdXMnKTtcbiAgICBjaXR5Q2FyZC5hcHBlbmRDaGlsZChjdXJyZW50VGVtcGVyYXR1cmVQKTtcblxuICAgIC8vIENyZWF0ZXMgYSBEaXYgYW5kIHAgZWxlbWVudCB3aXRoIG1pbiB0ZW1wZXJhdHVyZSBpLmU6ICcyMMK6QydcbiAgICBsZXQgbWluVGVtcGVyYXR1cmVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxldCBtaW5DZWxjaXVzID0gdGVtcGVyYXR1cmVDb252ZXJzaW9uLmNvbnZlcnRUb0NlbHNpdXModGVtcGVyYXR1cmVzLnRlbXBNaW4pO1xuICAgIG1pblRlbXBlcmF0dXJlUC5pbm5lclRleHQgPSBgTWluOiAke21pbkNlbGNpdXN9YDtcbiAgICBtaW5UZW1wZXJhdHVyZVAuaWQgPSAnbWluaW11bSc7XG4gICAgbWluVGVtcGVyYXR1cmVQLmNsYXNzTGlzdC5hZGQoJ2NlbGNpdXMnKTtcbiAgICBjaXR5Q2FyZC5hcHBlbmRDaGlsZChtaW5UZW1wZXJhdHVyZVApO1xuXG4gICAgLy8gQ3JlYXRlcyBhIERpdiBhbmQgcCBlbGVtZW50IHdpdGggbWF4IHRlbXBlcmF0dXJlIGkuZTogJzMwwrpDJ1xuICAgIGxldCBtYXhUZW1wZXJhdHVyZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IG1heENlbGNpdXMgPSB0ZW1wZXJhdHVyZUNvbnZlcnNpb24uY29udmVydFRvQ2Vsc2l1cyh0ZW1wZXJhdHVyZXMudGVtcE1heCk7XG4gICAgbWF4VGVtcGVyYXR1cmVQLmlubmVyVGV4dCA9IGBNYXg6ICR7bWF4Q2VsY2l1c31gO1xuICAgIG1heFRlbXBlcmF0dXJlUC5pZCA9ICdtYXhpbXVtJztcbiAgICBtYXhUZW1wZXJhdHVyZVAuY2xhc3NMaXN0LmFkZCgnY2VsY2l1cycpO1xuICAgIGNpdHlDYXJkLmFwcGVuZENoaWxkKG1heFRlbXBlcmF0dXJlUCk7XG5cbn1cblxuLy8gU2V0IEJhY2tncm91ZCBJbWFnZSBiYXNlZCBvbiBXZWF0aGVyXG5jb25zdCBjaGFuZ2VCb2R5QmFja2dyb3VuZEltYWdlID0gKHdlYXRoZXIpID0+IHtcblxuICAgICAgICAvLyBDaGFuZ2UgQmFja2dyb3VkIEltYWdlIEJhc2VkIE9uIG1haW4gd2VhdGhlclxuICAgICAgICBpZih3ZWF0aGVyLm1haW4gPT09ICdDbGVhcicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSguLi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2NsZWFyJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2VhdGhlci5tYWluID09PSAnQ2xvdWRzJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnY2xvdWRzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2VhdGhlci5tYWluID09PSAnUmFpbicpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSguLi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3JhaW4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyLm1haW4gPT09ICdNaXN0Jykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKC4uLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KTtcbiAgICAgICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=