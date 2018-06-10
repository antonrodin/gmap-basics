/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GMap = function () {
    function GMap(elem, lat, lng, zoom) {
        _classCallCheck(this, GMap);

        this.config = {
            center: {
                lat: lat,
                lng: lng
            },
            zoom: zoom
        };

        this.zoom = zoom;
        this.elem = elem;

        // Array of current markers
        this.markers = [];
    }

    _createClass(GMap, [{
        key: "init",
        value: function init() {
            this.map = new google.maps.Map(this.elem, this.config);
        }

        /**
         * Change Map Type
         * @param {normal, satelite, hibrido, relieve} tipo
         */

    }, {
        key: "changeType",
        value: function changeType(tipo) {
            this.map.setOptions({ mapTypeId: tipo });
        }
    }, {
        key: "changeOptions",


        /**
         * Change Map Options, like zoom or latitude and longitude
         * @param {object} mapOptions like { zoom: 8 } 
         */
        value: function changeOptions(mapOptions) {
            this.map.setOptions(mapOptions);
        }

        /**
         * Add simple marker into your map
         * @param {*} center { 0.00 , 0.00 } Latitude and Longitude Object
         * @param {*} title Title of the marker
         */

    }, {
        key: "addSimpleMarker",
        value: function addSimpleMarker(center, title) {
            var marker = new google.maps.Marker({
                position: center,
                map: this.map,
                title: title
            });

            this.markers.push(marker);
        }

        /**
         * Remove all markers from map
         */

    }, {
        key: "removeMarkers",
        value: function removeMarkers() {
            this.markers.forEach(function (elem) {
                return elem.setMap(null);
            });
            this.markers = [];
        }
    }]);

    return GMap;
}();

exports.default = GMap;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gmap = __webpack_require__(0);

var _gmap2 = _interopRequireDefault(_gmap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elem = document.getElementById('map-canvas');
var center1 = { lat: 40.405, lng: -3.636 };
var center2 = { lat: 40.506, lng: -3.637 };
var gmap = new _gmap2.default(elem, center1.lat, center1.lng, 8);

// Init map
var button0 = document.getElementById('init-map');
button0.addEventListener('click', function (e) {
    gmap.init();
    e.preventDefault();
});

// Add simple marker into the map
var button1 = document.getElementById('add-marker');
button1.addEventListener('click', function (e) {
    gmap.addSimpleMarker(center1, "My Awesome Marker One");
    gmap.addSimpleMarker(center2, "My Awesome Marker Two");
    e.preventDefault();
});

// Add simple marker into the map
var button2 = document.getElementById('remove-markers');
button2.addEventListener('click', function (e) {
    gmap.removeMarkers();
    e.preventDefault();
});

/***/ })
/******/ ]);