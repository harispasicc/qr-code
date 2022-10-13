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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_bodyParser2.default.json());\napp.use((0, _helmet2.default)());\napp.use((0, _cors2.default)());\n\n(0, _routes2.default)(app);\nexports.default = app;\n\n//# sourceURL=webpack://server/./src/app.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nmodule.exports = {\n  mongo: process.env.DB || \"mongo://localhost:27017/qr-code\",\n  port: process.env.PORT || 5000\n};\n\n//# sourceURL=webpack://server/./src/config/config.js?");

/***/ }),

/***/ "./src/controllers/qrcode.controllers.js":
/*!***********************************************!*\
  !*** ./src/controllers/qrcode.controllers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _Qcode = __webpack_require__(/*! ../models/Qcode.model */ \"./src/models/Qcode.model.js\");\n\nvar _Qcode2 = _interopRequireDefault(_Qcode);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res) {\n  var qr = (0, _Qcode2.default)(req.body);\n  qr.save(function (err, data) {\n    if (err) {\n      return res.status(400).json(err.message);\n    }\n    res.status(201).json(data);\n  });\n};\n\nvar list = function list(req, res) {\n  _Qcode2.default.find(function (err, data) {\n    if (err) {\n      return res.status(400).json(err.message);\n    }\n\n    res.status(200).json(data);\n  });\n};\n\nvar remove = function remove(req, res) {\n  var id = req.params.id;\n  _Qcode2.default.findById(id).exec(function (err, data) {\n    if (err || !data) {\n      return res.status(400).json(\"Qr-code not found!\");\n    }\n    data.remove(function (err, data) {\n      if (err) {\n        return res.status(400).json(err.message);\n      }\n      res.status(200).json(\"Qr-code successfully deleted.\");\n    });\n  });\n};\n\nexports.default = { list: list, create: create, remove: remove };\n\n//# sourceURL=webpack://server/./src/controllers/qrcode.controllers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _app = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _config = __webpack_require__(/*! ./config/config */ \"./src/config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_app2.default.listen(_config2.default.port, function (error) {\n  if (error) return console.log(error);\n  console.log(\"Server is listening on port \" + _config2.default.port);\n});\n\n_mongoose2.default.connect(_config2.default.mongo, {\n  useUnifiedTopology: true,\n  useNewUrlParser: true\n}).then(function () {\n  return console.log(\"Database connected\");\n}).catch(function () {\n  return console.log(\"Error connecting to database\");\n});\n\n//# sourceURL=webpack://server/./src/index.js?");

/***/ }),

/***/ "./src/models/Qcode.model.js":
/*!***********************************!*\
  !*** ./src/models/Qcode.model.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar QrSchema = new _mongoose2.default.Schema({\n  title: {\n    type: String,\n    required: [true, \"The title is required\"]\n  },\n  url: {\n    type: String,\n    required: true\n  }\n});\n\nexports.default = _mongoose2.default.model(\"Qr-code\", QrSchema);\n\n//# sourceURL=webpack://server/./src/models/Qcode.model.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _qrcode = __webpack_require__(/*! ./qrcode.router */ \"./src/routes/qrcode.router.js\");\n\nvar _qrcode2 = _interopRequireDefault(_qrcode);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (app) {\n  app.use(\"/\", _qrcode2.default);\n};\n\n//# sourceURL=webpack://server/./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/qrcode.router.js":
/*!*************************************!*\
  !*** ./src/routes/qrcode.router.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _qrcode = __webpack_require__(/*! ../controllers/qrcode.controllers */ \"./src/controllers/qrcode.controllers.js\");\n\nvar _qrcode2 = _interopRequireDefault(_qrcode);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route(\"/api/qrcode\").get(_qrcode2.default.list).post(_qrcode2.default.create);\nrouter.route(\"/api/qrcode/:id\").delete(_qrcode2.default.remove);\n\nexports.default = router;\n\n//# sourceURL=webpack://server/./src/routes/qrcode.router.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;