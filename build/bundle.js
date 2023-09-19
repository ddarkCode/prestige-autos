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

/***/ "./controllers/carController.js":
/*!**************************************!*\
  !*** ./controllers/carController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_carModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/carModel */ \"./models/carModel.js\");\n\n\n\n\nvar log = debug__WEBPACK_IMPORTED_MODULE_2___default()('app:carController');\nfunction carController() {\n  var getCars = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n      var query, cars;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            query = {};\n            if (req.query.name) {\n              query.name = req.query.name;\n            }\n            if (req.query.make) {\n              query.make = req.query.make;\n            }\n            _context.prev = 3;\n            _context.next = 6;\n            return _models_carModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(query);\n          case 6:\n            cars = _context.sent;\n            res.status(200).json(cars);\n            _context.next = 14;\n            break;\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](3);\n            log(_context.t0);\n            return _context.abrupt(\"return\", res.status(500).json(_context.t0));\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[3, 10]]);\n    }));\n    return function getCars(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  var postCar = /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, res) {\n      var newCar;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            newCar = new _models_carModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"](req.body);\n            _context2.next = 4;\n            return newCar.save();\n          case 4:\n            res.status(201).json(newCar);\n            _context2.next = 11;\n            break;\n          case 7:\n            _context2.prev = 7;\n            _context2.t0 = _context2[\"catch\"](0);\n            log(_context2.t0);\n            res.status(500).json(_context2.t0);\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }, _callee2, null, [[0, 7]]);\n    }));\n    return function postCar(_x3, _x4) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  var getCar = function getCar(req, res) {\n    res.status(200).json(req.car);\n  };\n  var putCar = /*#__PURE__*/function () {\n    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(req, res) {\n      var updatedCar;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return _models_carModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOneAndReplace({\n              _id: req.params.carId\n            }, req.body);\n          case 3:\n            _context3.next = 5;\n            return _models_carModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(req.params.carId);\n          case 5:\n            updatedCar = _context3.sent;\n            return _context3.abrupt(\"return\", res.status(201).json(updatedCar));\n          case 9:\n            _context3.prev = 9;\n            _context3.t0 = _context3[\"catch\"](0);\n            log(_context3.t0);\n            return _context3.abrupt(\"return\", res.status(500).json(_context3.t0));\n          case 13:\n          case \"end\":\n            return _context3.stop();\n        }\n      }, _callee3, null, [[0, 9]]);\n    }));\n    return function putCar(_x5, _x6) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n  var patchCar = /*#__PURE__*/function () {\n    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(req, res) {\n      var carId, updatedCar;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n        while (1) switch (_context4.prev = _context4.next) {\n          case 0:\n            carId = req.params.carId;\n            _context4.prev = 1;\n            _context4.next = 4;\n            return _models_carModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findByIdAndUpdate(carId, req.body);\n          case 4:\n            _context4.next = 6;\n            return _models_carModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n              _id: carId\n            });\n          case 6:\n            updatedCar = _context4.sent;\n            res.status(201).json(updatedCar);\n            _context4.next = 14;\n            break;\n          case 10:\n            _context4.prev = 10;\n            _context4.t0 = _context4[\"catch\"](1);\n            log(_context4.t0);\n            return _context4.abrupt(\"return\", res.status(500).json(_context4.t0));\n          case 14:\n          case \"end\":\n            return _context4.stop();\n        }\n      }, _callee4, null, [[1, 10]]);\n    }));\n    return function patchCar(_x7, _x8) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n  var deleteCar = /*#__PURE__*/function () {\n    var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(req, res) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {\n        while (1) switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.prev = 0;\n            _context5.next = 3;\n            return _models_carModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteOne({\n              _id: req.params.carId\n            });\n          case 3:\n            return _context5.abrupt(\"return\", res.status(204).json({\n              message: 'Car Deleted Successfully.'\n            }));\n          case 6:\n            _context5.prev = 6;\n            _context5.t0 = _context5[\"catch\"](0);\n            log(_context5.t0);\n            return _context5.abrupt(\"return\", res.status(500).json(_context5.t0));\n          case 10:\n          case \"end\":\n            return _context5.stop();\n        }\n      }, _callee5, null, [[0, 6]]);\n    }));\n    return function deleteCar(_x9, _x10) {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n  return {\n    getCars: getCars,\n    getCar: getCar,\n    postCar: postCar,\n    putCar: putCar,\n    patchCar: patchCar,\n    deleteCar: deleteCar\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carController);\n\n//# sourceURL=webpack://prestige-autos/./controllers/carController.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! express-rate-limit */ \"express-rate-limit\");\n/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _routes_carRoutes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/carRoutes */ \"./routes/carRoutes.js\");\n/* harmony import */ var _routes_authRoutes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/authRoutes */ \"./routes/authRoutes.js\");\n/* harmony import */ var _passportConfig_passport__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./passportConfig/passport */ \"./passportConfig/passport.js\");\n/* harmony import */ var _src_pages_App__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/pages/App */ \"./src/pages/App.js\");\n\n\n\n(0,dotenv__WEBPACK_IMPORTED_MODULE_2__.config)();\n\n\n\n\n\n\n\n\n\n\n\n\nvar _process$env = process.env,\n  PORT = _process$env.PORT,\n  MONGO_URL_LOCAL = _process$env.MONGO_URL_LOCAL,\n  SESSION_SECRET = _process$env.SESSION_SECRET;\nvar log = debug__WEBPACK_IMPORTED_MODULE_7___default()('app');\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\n(function () {\n  var _connectMongo = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return (0,mongoose__WEBPACK_IMPORTED_MODULE_5__.connect)(MONGO_URL_LOCAL);\n        case 3:\n          log('Mongo Database Connected Successfully!');\n          _context.next = 9;\n          break;\n        case 6:\n          _context.prev = 6;\n          _context.t0 = _context[\"catch\"](0);\n          log(_context.t0);\n        case 9:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 6]]);\n  }));\n  function connectMongo() {\n    return _connectMongo.apply(this, arguments);\n  }\n  return connectMongo;\n})()();\napp.use(express_session__WEBPACK_IMPORTED_MODULE_8___default()({\n  secret: SESSION_SECRET,\n  saveUninitialized: false,\n  resave: true\n}));\n(0,_passportConfig_passport__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(app);\nvar apiLimiter = (0,express_rate_limit__WEBPACK_IMPORTED_MODULE_9__.rateLimit)({\n  windowMs: 15 * 60 * 1000,\n  limit: 100,\n  standardHeaders: 'draft-7',\n  legacyHeaders: false\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default()[\"static\"]('public'));\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default().urlencoded({\n  extended: true\n}));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()('combined'));\napp.use('/api', apiLimiter);\napp.use('/api/cars', (0,_routes_carRoutes__WEBPACK_IMPORTED_MODULE_11__[\"default\"])());\napp.use('/api/users', (0,_routes_authRoutes__WEBPACK_IMPORTED_MODULE_12__[\"default\"])());\napp.get('*', function (req, res) {\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_10__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_src_pages_App__WEBPACK_IMPORTED_MODULE_14__[\"default\"], null));\n  var html = \"\\n  <html>\\n    <head></head>\\n    <body>\\n    \\n\\n       <div id=\\\"root\\\">\".concat(content, \"</div>\\n       <script src=\\\"bundle.js\\\"></script>\\n    </body>\\n  </html>\\n  \\n  \");\n  res.send(html);\n});\napp.listen(PORT, function () {\n  return log(\"Server is running on port:\".concat(PORT));\n});\n\n//# sourceURL=webpack://prestige-autos/./index.js?");

/***/ }),

/***/ "./models/carModel.js":
/*!****************************!*\
  !*** ./models/carModel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar carSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  model: {\n    type: String,\n    required: true\n  },\n  year: {\n    type: Number,\n    required: true\n  },\n  price: {\n    type: Number,\n    required: true\n  },\n  image_url: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('Car', carSchema));\n\n//# sourceURL=webpack://prestige-autos/./models/carModel.js?");

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongoose_findorcreate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose-findorcreate */ \"mongoose-findorcreate\");\n/* harmony import */ var mongoose_findorcreate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose_findorcreate__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_2__.Schema({\n  username: {\n    type: String,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  role: {\n    type: String,\n    \"default\": 'client'\n  },\n  address: {\n    type: String,\n    \"default\": ''\n  },\n  mobile: {\n    type: String,\n    \"default\": ''\n  },\n  googleId: String\n});\nuserSchema.plugin((mongoose_findorcreate__WEBPACK_IMPORTED_MODULE_4___default()));\nuserSchema.pre('save', /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(next) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          if (!this.isModified()) {\n            _context.next = 5;\n            break;\n          }\n          _context.next = 3;\n          return (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.hash)(this.password, +process.env.SALT_ROUND);\n        case 3:\n          this.password = _context.sent;\n          next();\n        case 5:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, this);\n  }));\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\nuserSchema.methods.verifyPassword = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(password, hashedPassword) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return (0,bcrypt__WEBPACK_IMPORTED_MODULE_3__.compare)(password, hashedPassword);\n        case 2:\n          return _context2.abrupt(\"return\", _context2.sent);\n        case 3:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return function (_x2, _x3) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mongoose__WEBPACK_IMPORTED_MODULE_2__.model)('User', userSchema));\n\n//# sourceURL=webpack://prestige-autos/./models/userModel.js?");

/***/ }),

/***/ "./passportConfig/passport.js":
/*!************************************!*\
  !*** ./passportConfig/passport.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _strategies_localStrstegy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strategies/localStrstegy */ \"./passportConfig/strategies/localStrstegy.js\");\n/* harmony import */ var _strategies_googleStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strategies/googleStrategy */ \"./passportConfig/strategies/googleStrategy.js\");\n\n\n\nfunction passportConfig(app) {\n  app.use(passport__WEBPACK_IMPORTED_MODULE_0___default().initialize());\n  app.use(passport__WEBPACK_IMPORTED_MODULE_0___default().session());\n  passport__WEBPACK_IMPORTED_MODULE_0___default().serializeUser(function (user, done) {\n    return done(null, user);\n  });\n  passport__WEBPACK_IMPORTED_MODULE_0___default().deserializeUser(function (user, done) {\n    return done(null, user);\n  });\n  (0,_strategies_localStrstegy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_strategies_googleStrategy__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (passportConfig);\n\n//# sourceURL=webpack://prestige-autos/./passportConfig/passport.js?");

/***/ }),

/***/ "./passportConfig/strategies/googleStrategy.js":
/*!*****************************************************!*\
  !*** ./passportConfig/strategies/googleStrategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\");\n/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_google_oauth20__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/userModel */ \"./models/userModel.js\");\n\n\n\n\nvar _process$env = process.env,\n  GOOGLE_CLIENT_ID = _process$env.GOOGLE_CLIENT_ID,\n  GOOGLE_CLIENT_SECRET = _process$env.GOOGLE_CLIENT_SECRET;\nvar log = debug__WEBPACK_IMPORTED_MODULE_2___default()('app:googleStrategy');\nfunction googleStrategy() {\n  passport__WEBPACK_IMPORTED_MODULE_0___default().use(new passport_google_oauth20__WEBPACK_IMPORTED_MODULE_1__.Strategy({\n    clientID: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n    callbackURL: \"http://localhost:4444/api/users/auth/google\"\n  }, function (accessToken, refreshToken, profile, cb) {\n    log(profile);\n    // User.findOrCreate({ googleId: profile.id }, function (err, user) {\n    //   return cb(err, user);\n    // });\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (googleStrategy);\n\n//# sourceURL=webpack://prestige-autos/./passportConfig/strategies/googleStrategy.js?");

/***/ }),

/***/ "./passportConfig/strategies/localStrstegy.js":
/*!****************************************************!*\
  !*** ./passportConfig/strategies/localStrstegy.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/userModel */ \"./models/userModel.js\");\n\n\n\n\n\n\nvar log = debug__WEBPACK_IMPORTED_MODULE_4___default()('app:localStrategy');\nfunction localStrategy() {\n  passport__WEBPACK_IMPORTED_MODULE_2___default().use('signup', new passport_local__WEBPACK_IMPORTED_MODULE_3__.Strategy({\n    usernameField: 'email',\n    passwordField: 'password',\n    passReqToCallback: true\n  }, /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, email, password, done) {\n      var _req$body, role, mobile, address, username, userExist, newUser, savedUser;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _req$body = req.body, role = _req$body.role, mobile = _req$body.mobile, address = _req$body.address, username = _req$body.username;\n            _context.prev = 1;\n            _context.next = 4;\n            return _models_userModel__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n              email: email\n            });\n          case 4:\n            userExist = _context.sent;\n            if (!userExist) {\n              _context.next = 8;\n              break;\n            }\n            log('Passport-Local: User already Exists: ', userExist);\n            return _context.abrupt(\"return\", done(null, false, {\n              message: 'User With This Email Already Exists'\n            }));\n          case 8:\n            newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n              email: email,\n              password: password,\n              mobile: mobile,\n              role: role,\n              address: address,\n              username: username\n            });\n            _context.next = 11;\n            return newUser.save();\n          case 11:\n            savedUser = _context.sent;\n            return _context.abrupt(\"return\", done(null, savedUser, {\n              message: 'Registration Was Successfull'\n            }));\n          case 15:\n            _context.prev = 15;\n            _context.t0 = _context[\"catch\"](1);\n            log(_context.t0);\n            return _context.abrupt(\"return\", done(_context.t0, false, {\n              message: 'An Error Occurred While Registering.'\n            }));\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[1, 15]]);\n    }));\n    return function (_x, _x2, _x3, _x4) {\n      return _ref.apply(this, arguments);\n    };\n  }()));\n  passport__WEBPACK_IMPORTED_MODULE_2___default().use('signin', new passport_local__WEBPACK_IMPORTED_MODULE_3__.Strategy({\n    usernameField: 'email',\n    passwordField: 'password',\n    passReqToCallback: true\n  }, /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, email, password, done) {\n      var user, isValidPassword;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return _models_userModel__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n              email: email\n            });\n          case 3:\n            user = _context2.sent;\n            if (user) {\n              _context2.next = 6;\n              break;\n            }\n            return _context2.abrupt(\"return\", done(null, false, {\n              message: 'Incorrect Email Entered, Please verify Your Email and Try Again'\n            }));\n          case 6:\n            _context2.next = 8;\n            return user.verifyPassword(password, user.password);\n          case 8:\n            isValidPassword = _context2.sent;\n            if (isValidPassword) {\n              _context2.next = 11;\n              break;\n            }\n            return _context2.abrupt(\"return\", done(null, false, {\n              message: 'Incorrect Password Entered, Please Check Your Password And Try Again.'\n            }));\n          case 11:\n            return _context2.abrupt(\"return\", done(null, user, {\n              message: 'Successfully Logged Into Your Account.'\n            }));\n          case 14:\n            _context2.prev = 14;\n            _context2.t0 = _context2[\"catch\"](0);\n            log('Passport-local: Signin Error: ', _context2.t0);\n            return _context2.abrupt(\"return\", done(_context2.t0, false, {\n              message: 'An Error Occurred While Signing In.'\n            }));\n          case 18:\n          case \"end\":\n            return _context2.stop();\n        }\n      }, _callee2, null, [[0, 14]]);\n    }));\n    return function (_x5, _x6, _x7, _x8) {\n      return _ref2.apply(this, arguments);\n    };\n  }()));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStrategy);\n\n//# sourceURL=webpack://prestige-autos/./passportConfig/strategies/localStrstegy.js?");

/***/ }),

/***/ "./routes/authRoutes.js":
/*!******************************!*\
  !*** ./routes/authRoutes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _validators_userValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validators/userValidator */ \"./validators/userValidator.js\");\n\n\n\n\nvar log = debug__WEBPACK_IMPORTED_MODULE_1___default()('app:authRoutes');\nfunction authRoutes() {\n  var authRouter = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\n  authRouter.route('/signup').post(_validators_userValidator__WEBPACK_IMPORTED_MODULE_3__[\"default\"], passport__WEBPACK_IMPORTED_MODULE_2___default().authenticate('signup', {\n    failureRedirect: '/'\n  }), function (req, res) {\n    var _req$user = req.user,\n      username = _req$user.username,\n      email = _req$user.email,\n      role = _req$user.role,\n      address = _req$user.address,\n      mobile = _req$user.mobile;\n    var user = {\n      username: username,\n      email: email,\n      role: role,\n      address: address,\n      mobile: mobile\n    };\n    res.status(201).json(user);\n  });\n  authRouter.route('/signin').post(passport__WEBPACK_IMPORTED_MODULE_2___default().authenticate('signin', {\n    failureRedirect: '/'\n  }), function (req, res) {\n    var _req$user2 = req.user,\n      username = _req$user2.username,\n      email = _req$user2.email,\n      role = _req$user2.role,\n      address = _req$user2.address,\n      mobile = _req$user2.mobile;\n    var user = {\n      username: username,\n      email: email,\n      role: role,\n      address: address,\n      mobile: mobile\n    };\n    res.status(200).json(user);\n  });\n  authRouter.route('/auth/google').get(passport__WEBPACK_IMPORTED_MODULE_2___default().authenticate('google', {\n    scope: ['profile']\n  }));\n  authRouter.route('/auth/google/signin').get(passport__WEBPACK_IMPORTED_MODULE_2___default().authenticate('google', {\n    failureRedirect: '/'\n  }), function (req, res) {\n    res.redirect('/');\n  });\n  return authRouter;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authRoutes);\n\n//# sourceURL=webpack://prestige-autos/./routes/authRoutes.js?");

/***/ }),

/***/ "./routes/carRoutes.js":
/*!*****************************!*\
  !*** ./routes/carRoutes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_carModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/carModel */ \"./models/carModel.js\");\n/* harmony import */ var _controllers_carController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/carController */ \"./controllers/carController.js\");\n/* harmony import */ var _validators_carValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validators/carValidator */ \"./validators/carValidator.js\");\n\n\n\n\n\n\n\nvar log = debug__WEBPACK_IMPORTED_MODULE_3___default()('app:carRouter');\nfunction carRoutes() {\n  var carRouter = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)();\n  var _carController = (0,_controllers_carController__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n    getCars = _carController.getCars,\n    getCar = _carController.getCar,\n    postCar = _carController.postCar,\n    putCar = _carController.putCar,\n    patchCar = _carController.patchCar,\n    deleteCar = _carController.deleteCar;\n  carRouter.route('/').get(getCars).post(_validators_carValidator__WEBPACK_IMPORTED_MODULE_6__[\"default\"], postCar);\n  carRouter.route('/:carId').all( /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res, next) {\n      var carId, foundCar;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            carId = req.params.carId;\n            _context.prev = 1;\n            _context.next = 4;\n            return _models_carModel__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(carId);\n          case 4:\n            foundCar = _context.sent;\n            if (!foundCar) {\n              res.status(404).json('Not Found!');\n            }\n            req.car = foundCar;\n            next();\n            _context.next = 14;\n            break;\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](1);\n            log(_context.t0);\n            res.status(500).json(_context.t0);\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[1, 10]]);\n    }));\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }()).get(getCar).put(putCar).patch(patchCar)[\"delete\"](deleteCar);\n  return carRouter;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carRoutes);\n\n//# sourceURL=webpack://prestige-autos/./routes/carRoutes.js?");

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      'textAlign': 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Hello Prestige Autos\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"This is The Home Page.\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://prestige-autos/./src/pages/App.js?");

/***/ }),

/***/ "./validators/carValidator.js":
/*!************************************!*\
  !*** ./validators/carValidator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar carSchema = joi__WEBPACK_IMPORTED_MODULE_2___default().object({\n  name: joi__WEBPACK_IMPORTED_MODULE_2___default().string().required().min(4),\n  model: joi__WEBPACK_IMPORTED_MODULE_2___default().string().required().min(2),\n  year: joi__WEBPACK_IMPORTED_MODULE_2___default().number().required(),\n  price: joi__WEBPACK_IMPORTED_MODULE_2___default().number().required(),\n  image_url: joi__WEBPACK_IMPORTED_MODULE_2___default().string().required().min(20)\n});\nvar carValidator = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res, next) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return carSchema.validateAsync(req.body);\n        case 3:\n          next();\n          _context.next = 9;\n          break;\n        case 6:\n          _context.prev = 6;\n          _context.t0 = _context[\"catch\"](0);\n          return _context.abrupt(\"return\", res.status(403).json(_context.t0));\n        case 9:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 6]]);\n  }));\n  return function carValidator(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carValidator);\n\n//# sourceURL=webpack://prestige-autos/./validators/carValidator.js?");

/***/ }),

/***/ "./validators/userValidator.js":
/*!*************************************!*\
  !*** ./validators/userValidator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar log = debug__WEBPACK_IMPORTED_MODULE_3___default()('app:userValidator');\nvar userSchema = joi__WEBPACK_IMPORTED_MODULE_2___default().object({\n  username: joi__WEBPACK_IMPORTED_MODULE_2___default().string().min(2).required(),\n  password: joi__WEBPACK_IMPORTED_MODULE_2___default().string().required().min(8),\n  email: joi__WEBPACK_IMPORTED_MODULE_2___default().string().email({\n    minDomainSegments: 2,\n    tlds: {\n      allow: ['com', 'net', 'org']\n    }\n  }),\n  mobile: joi__WEBPACK_IMPORTED_MODULE_2___default().string().optional(),\n  address: joi__WEBPACK_IMPORTED_MODULE_2___default().string().optional(),\n  role: joi__WEBPACK_IMPORTED_MODULE_2___default().string()[\"default\"]('client').optional()\n});\nvar validateUser = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res, next) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return userSchema.validateAsync(req.body);\n        case 3:\n          next();\n          _context.next = 10;\n          break;\n        case 6:\n          _context.prev = 6;\n          _context.t0 = _context[\"catch\"](0);\n          log(_context.t0);\n          return _context.abrupt(\"return\", res.status(403).json(_context.t0));\n        case 10:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 6]]);\n  }));\n  return function validateUser(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateUser);\n\n//# sourceURL=webpack://prestige-autos/./validators/userValidator.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

module.exports = require("debug");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-rate-limit");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-findorcreate":
/*!****************************************!*\
  !*** external "mongoose-findorcreate" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("mongoose-findorcreate");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;