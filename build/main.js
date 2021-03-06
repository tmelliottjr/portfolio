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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sections = document.querySelectorAll('.anchor');
var scrollOffset = 250;

// Menu Toggle
function menuToggle() {
  var menuButton = document.querySelector('#menu-button');
  var navLinks = document.querySelector('.nav-links');
  var nav = document.querySelector('nav');

  if (menuButton.classList.contains('expand')) {
    menuButton.classList.remove('expand');
    nav.style.paddingBottom = '0px';
    navLinks.style.top = '-100px';
  } else {
    menuButton.classList.add('expand');
    nav.style.paddingBottom = '125px';
    // Wait for menu to expand before changing visible position
    setTimeout(function () {
      navLinks.style.top = '75px';
    }, 100);
  }
}

// Scroll Handler
function scrollHandler() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (document.querySelector('#menu-button').classList.contains('expand')) {
    menuToggle();
  }

  // if (scrollTop <= scrollOffset) {
  //   document.querySelector('header').classList.remove('hidden');
  // } else {
  //   document.querySelector('header').classList.add('hidden');
  // }
}

// Scroll Spy
window.onscroll = scrollHandler;
document.body.ontouchmove = scrollHandler;

// Hamburger Menu
document.querySelector('#menu-button').addEventListener('click', function () {
  menuToggle();
});

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.remove('preload');
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

// Tagline sequencer
var taglines = ['developer', 'husband', 'father'];
var tagline = document.querySelector('.self-tag');
var index = 0;

setInterval(function () {
  var currentOpacity = tagline.style.opacity;
  var opacity = 1;

  if (currentOpacity == 0) {
    opacity = 1;
    if (index > 2) index = 0;
    tagline.innerHTML = taglines[index];
    index += 1;
  } else if (currentOpacity == 1) {
    opacity = 0;
  } else {
    return;
  }

  tagline.style.opacity = opacity;
}, 2000);

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.remove('preload');
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map