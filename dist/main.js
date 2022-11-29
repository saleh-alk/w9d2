/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Asteroid)\n/* harmony export */ });\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\nclass Asteroid extends _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(pos){\n        let options = {\n            \"pos\": pos,\n            \"color\": Asteroid.COLOR,\n            \"radius\": Asteroid.RADIUS,\n            \"vel\": _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].randomVec(2)\n        };\n        super(options);\n\n    }\n\n}\n\nAsteroid.COLOR = \"#FF0000\";\nAsteroid.RADIUS = 20;\n\nlet a = new Asteroid([30,30]);\nconsole.log(JSON.stringify(a))\n\n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\n\nclass Game {\n  constructor() {\n    this.asteroids = [];\n    this.addAsteroids();\n  }\n\n  addAsteroids(){\n    // debugger\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n      this.asteroids.push(new _asteroid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.randomPosition()));\n    }\n  }\n\n  randomPosition(){\n    const x_min = Math.ceil(0);\n    const x_max = Math.floor(Game.DIM_X);\n    const x = Math.floor(Math.random() * (x_max - x_min) + x_min);\n\n    const y_min = Math.ceil(0);\n    const y_max = Math.floor(Game.DIM_X);\n    const y = Math.floor(Math.random() * (y_max - y_min) + y_min);\n\n    return [x,y];\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    for (const a of this.asteroids) {\n      a.draw(ctx);\n    }\n    console.log(\"draw\")\n  }\n\n  moveObjects(ctx){\n    for (const a of this.asteroids) {\n      a.move(ctx);\n    }\n  }\n}\n\nGame.DIM_X = 600;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 10;\n\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameView)\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n// https://stackoverflow.com/questions/28456898/javascript-setinterval-function-not-working-in-drawing-to-canvas\n\n\nclass GameView {\n\n  constructor(ctx){\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n    this.ctx = ctx\n  }\n\n  start(){\n    setInterval(() => {this.game.draw(this.ctx)}, 100)\n    setInterval(() => {this.game.moveObjects(this.ctx)}, 100)\n    setInterval(()=> {console.log(\"test\")}, 1000)\n  }\n}\n\n\n//# sourceURL=webpack://asteroids/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconsole.log(\"Webpack is Working\");\n\n\n\n\n\nwindow.Asteroid = _asteroid_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.MovingObject = _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n// let canvas = document.getElementById(\"game-canvas\");\n// let ctx = canvas.getContext(\"2d\");\n\nwindow.canvas = document.getElementById(\"game-canvas\");\nwindow.ctx = canvas.getContext(\"2d\");\n\n\n// window.ast = new Asteroid([30, 30] );\n// window.mo = new MovingObject({\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\"\n// });\n// window.game = new Game();\n\nwindow.gameView = new _game_view_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](window.ctx)\nwindow.gameView.start()\n\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovingObject)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n// function MovingObject(options) {\n//     this.pos = options['pos'];\n//     this.vel = options['vel'];\n//     this.radius = options['radius'];\n//     this.color = options['color'];\n// }\n\n// MovingObject.prototype.draw = function(ctx) {\n//   ctx.beginPath();\n//   ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, false);\n//   ctx.lineWidth = 3;\n//   ctx.strokestyel = '#FF0000';\n//   ctx.stroke();\n// };\n\n// MovingObject.prototype.move = function(){\n//   this.pos += this.vel;\n// }\n\nclass MovingObject{\n  constructor(options){\n    this.pos = options['pos'];\n    this.vel = options['vel'];\n    this.radius = options['radius'];\n    this.color = options['color'];\n  }\n\n  draw(){\n    // debugger\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n    ctx.lineWidth = 3;\n    ctx.strokeStyle = '#FF0000';\n    ctx.stroke();\n  }\n\n  move(){\n    const newVel = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scale(this.vel, 2);\n    this.pos[0] += newVel[0];\n    this.pos[1] += newVel[1];\n  }\n\n\n}\n\n// module.exports = MovingObject;\n\n\n//# sourceURL=webpack://asteroids/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet Util = {\n    inherits: function (childClass, parentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Util);\n\n// export default class Util {\n//     inherits(childClass, parentClass){\n//         function Surrogate() { };\n//         Surrogate.prototype = parentClass.prototype;\n//         childClass.prototype = new Surrogate();\n//         childClass.prototype.constructor = childClass;\n//     }\n\n//     randomVec(length){\n//         const deg = 2 * Math.PI * Math.random();\n//         return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n//     }\n\n//     scale(vec, m){\n//         return [vec[0] * m, vec[1] * m];\n//     }\n// }\n\n\n//# sourceURL=webpack://asteroids/./src/utils.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;