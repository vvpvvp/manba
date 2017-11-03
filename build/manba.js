(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["manba"] = factory();
	else
		root["manba"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(21)('wks');
var uid = __webpack_require__(25);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(19)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(39);
var toPrimitive = __webpack_require__(55);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(12);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(5);
var ctx = __webpack_require__(16);
var hide = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(21)('keys');
var uid = __webpack_require__(25);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(34);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(6);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(40);
var defined = __webpack_require__(8);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(31);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(29);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(30);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORMAT_LIST = {
  "l": "YYYY-MM-DD",
  "ll": "YYYY年MM月DD日",
  "k": "YYYY-MM-DD hh:mm",
  "kk": "YYYY年MM月DD日 hh点mm分",
  "kkk": "YYYY年MM月DD日 hh点mm分 q",
  "f": "YYYY-MM-DD hh:mm:ss",
  "ff": "YYYY年MM月DD日 hh点mm分ss秒",
  "fff": "YYYY年MM月DD日 hh点mm分ss秒 星期w",
  "n": "MM-DD",
  "nn": "MM月DD日"
};

var timeDelay = 0;

var _SECONDS = 1000;
var _MINUTES = 1000 * 60;
var _HOURS = 1000 * 60 * 60;
var _DAYS = 1000 * 60 * 60 * 24;
var _WEEKS = _DAYS * 7;
var _YEARS = _DAYS * 365;
var MSE = new Date(1970, 0, 1, 0, 0, 0).getTime();

var WEEK = ['日', '一', '二', '三', '四', '五', '六'];
var DAY_STRING = ['上午', '下午'];

var Manba = function () {
  function Manba() {
    (0, _classCallCheck3.default)(this, Manba);

    Utils.initmanba.apply(Utils, [this].concat(Array.prototype.slice.call(arguments)));
    return this;
  }

  (0, _createClass3.default)(Manba, [{
    key: "format",
    value: function format(str) {
      var m = this;

      var v = this.isValid();
      if (v !== true) return v;

      str = str || "l";
      var formatStr = FORMAT_LIST[str] || str;
      return Utils.format(m._date, formatStr);
    }
  }, {
    key: "UTCformat",
    value: function UTCformat(str) {
      var m = this;

      var v = this.isValid();
      if (v !== true) return v;

      str = str || "l";
      var formatStr = FORMAT_LIST[str] || str;
      return Utils.UTCformat(m._date, formatStr);
    }
  }, {
    key: "toString",
    value: function toString() {
      var v = this.isValid();
      if (v !== true) return v;
      return this._date.toString();
    }
  }, {
    key: "toISOString",
    value: function toISOString(utcZone) {
      var v = this.isValid();
      if (v !== true) return v;
      var offset = 0;
      if (utcZone !== undefined) {
        offset = utcZone * 60;
      } else {
        offset = -this._date.getTimezoneOffset();
      }
      var dif = offset >= 0 ? '+' : '-';
      var times = manba(this.time() + offset * 60 * 1000);
      return times.UTCformat("yyyy-MM-ddThh:mm:ss") + dif + Utils.pad(offset / 60) + ':' + Utils.pad(offset % 60);
    }
  }, {
    key: "toLocalString",
    value: function toLocalString() {
      var v = this.isValid();
      if (v !== true) return v;
      var offset = -this._date.getTimezoneOffset();
      var dif = offset >= 0 ? '+' : '-';
      return this.format("yyyy-MM-ddThh:mm:ss") + dif + Utils.pad(offset / 60) + ':' + Utils.pad(offset % 60);
    }
  }, {
    key: "distance",
    value: function distance(_m, type, weekStart) {
      var v = this.isValid();
      if (v !== true) return v;
      var m = this;
      type = type || manba.DAY;
      _m = manba(_m);
      v = _m.isValid();
      if (v !== true) return v;
      switch (type) {
        case manba.MINUTE:
          return Math.floor((m.time() - _m.time()) / 60 / 1000);
        case manba.HOUR:
          return Utils.getHours(m._date) - Utils.getHours(_m._date);
        case manba.DAY:
          return Utils.getDays(m._date) - Utils.getDays(_m._date);
        case manba.WEEK:
          return (Utils.getDays(m.startOf(manba.WEEK, weekStart)._date) - Utils.getDays(_m.startOf(manba.WEEK, weekStart)._date)) / 7;
        case manba.MONTH:
          return Utils.getMonths(m._date) - Utils.getMonths(_m._date);
        case manba.YEAR:
          return m._date.getYear() - _m._date.getYear();
      }
      return 0;
    }
  }, {
    key: "getWeekOfYear",
    value: function getWeekOfYear(weekStart) {
      weekStart = (weekStart || 0) - 0;
      if (isNaN(weekStart) || weekStart > 6) {
        weekStart = 0;
      }
      var year = this.year();
      var firstDay = this.startOf(manba.YEAR);
      var firstWeekDays = 7 - firstDay.day() + weekStart;
      var dayOfYear = (this.startOf(manba.DAY).time() - firstDay.time()) / (24 * 3600 * 1000) + 1;
      return Math.ceil((dayOfYear - firstWeekDays) / 7) + 1;
    }
  }, {
    key: "getWeekOfMonth",
    value: function getWeekOfMonth(weekStart) {
      weekStart = (weekStart || 0) - 0;
      if (isNaN(weekStart) || weekStart > 6) {
        weekStart = 0;
      }
      var dayOfWeek = this.day();
      var day = this.date();
      return Math.ceil((day - dayOfWeek - 1) / 7) + (dayOfWeek >= weekStart ? 1 : 0);
    }
  }, {
    key: "isLeapYear",
    value: function isLeapYear() {
      var v = this.isValid();
      if (v !== true) return v;
      return Utils.isLeapYear(this.year());
    }
  }, {
    key: "isThisYear",
    value: function isThisYear() {
      var v = this.isValid();
      if (v !== true) return v;
      return Utils.timestamp(this._date);
    }
  }, {
    key: "isBefore",
    value: function isBefore() {
      var v = this.isValid();
      if (v !== true) return v;
      return Utils.timestamp(this._date);
    }
  }, {
    key: "isAfter",
    value: function isAfter() {
      var v = this.isValid();
      if (v !== true) return v;
      return Utils.timestamp(this._date);
    }
  }, {
    key: "month",
    value: function month(num) {
      var v = this.isValid();
      if (v !== true) return v;
      var m = this;
      if (num == undefined) {
        return m._date.getMonth() + 1;
      }
      num = parseInt(num);
      num = m._date.setMonth(num - 1);
      return m;
    }
  }, {
    key: "add",
    value: function add(num, type) {
      var v = this.isValid();
      if (v !== true) return v;
      var m = this;
      num = parseInt(num);
      type = type || manba.DAY;

      switch (type) {
        case manba.DAY:
          m.time(m.time() + num * _DAYS);
          break;
        case manba.MONTH:
          var month_add = m.month() + num;
          m.month(month_add);
          break;
        case manba.QUARTER:
          m.month(m.month() + num * 3);
          break;
        case manba.YEAR:
          m.year(m.year() + num);
          break;
        case manba.WEEK:
          m.time(m.time() + num * _WEEKS);
          break;
        case manba.HOUR:
          m.time(m.time() + num * _HOURS);
          break;
        case manba.MINUTE:
          m.time(m.time() + num * _MINUTES);
          break;
        case manba.SECOND:
          m.time(m.time() + num * _SECONDS);
          break;
        case manba.TIME:
          m.time(m.time() + num);
          break;
      }
      return m;
    }
  }, {
    key: "endOf",
    value: function endOf(type, set) {
      var v = this.isValid();
      if (v !== true) return v;
      var m = new Manba(this);
      type = type || manba.DAY;
      m = m.startOf(type, set);
      m.add(1, type);
      // if (manba.DAY == type||manba.WEEK == type) {
      m.add(-1, manba.SECOND);
      // } else {
      // m.add(-1, manba.DAY);
      // }
      return m;
    }
  }, {
    key: "startOf",
    value: function startOf(type, set) {
      var v = this.isValid();
      if (v !== true) return v;
      var m = new Manba(this);
      type = type || manba.DAY;
      switch (type) {
        case manba.DAY:
          m.milliseconds(0);
          m.seconds(0);
          m.minutes(0);
          m.hours(0);
          break;
        case manba.MONTH:
          m.date(1);
          m = m.startOf(manba.DAY);
          break;
        case manba.QUARTER:
          m = m.startOf(manba.MONTH);
          m.add(-(m.month() - 1) % 3, manba.MONTH);
          break;
        case manba.WEEK:
          m = m.startOf(manba.DAY);
          set = set || manba.SUNDAY;
          var startDay = set == manba.SUNDAY ? 0 : 1;
          if (m.day() == 0 && startDay == 1) {
            startDay = -6;
          }
          m.add(-m.day() + startDay, manba.DAY);
          break;
        case manba.YEAR:
          m.month(1);
          m.date(1);
          m = m.startOf(manba.DAY);
          break;
        case manba.HOUR:
          m.time(Math.floor(m.time() / _HOURS) * _HOURS);
          break;
      }
      return m;
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return Utils.isDate(this._date) ? true : "Invalid Date";
    }
  }]);
  return Manba;
}();

var Utils = {
  initmanba: function initmanba(manba_obj, arg1, arg2) {
    var _date = new Date(),
        date_bak = _date;
    if (arg1 != undefined) {
      if (Utils.isNumber(arg1)) {
        // if (arg1 < 9999999999) arg1 = arg1 * 1000;
        _date.setTime(arg1);
      } else if (Utils.isArray(arg1)) {
        Utils.padMonth(arg1);
        _date = new (Function.prototype.bind.apply(Date, [null].concat((0, _toConsumableArray3.default)(arg1))))();
      } else if (Utils.isDate(arg1)) {
        _date = arg1;
      } else if (Utils.isString(arg1)) {
        _date = Utils.parse(arg1, arg2);
      } else if (arg1 instanceof Manba) {
        _date = new Date(arg1.time());
      }
    }
    manba_obj._date = _date;
    if (date_bak === _date && timeDelay != 0) {
      manba_obj.add(timeDelay, manba.TIME);
    }
  },
  pad: function pad(num) {
    var norm = Math.abs(Math.floor(num));
    return (norm < 10 ? '0' : '') + norm;
  },
  parse: function parse(str, arg2) {
    if (Utils.isString(arg2)) {
      var obj = { Y: 0, M: 1, D: 0, H: 0, m: 0, S: 0 };
      arg2.replace(/([^YyMDdHhmsS]*?)(([YyMDdHhmsS])\3*)([^YyMDdHhmsS]*?)/g, function (m, $1, $2, $3, $4, idx, old) {
        var num = parseInt(str.substr(idx + $1.length, $2.length), 10);
        if ($3.toLowerCase() == 'm') {
          obj[$3] = num;
        } else {
          obj[$3.toUpperCase()] = num;
        }
        return '';
      });
      obj.M--;
      var _date2 = new Date(obj.Y, obj.M, obj.D, obj.H, obj.m, obj.S);
      return _date2;
    }
    var aspNetJsonRegex = /^(\d{4})\-?(\d{2})\-?(\d{2})\s?\:?(\d{2})?\:?(\d{2})?\:?(\d{2})?$/i;
    var matched = aspNetJsonRegex.exec(str);
    if (matched !== null) {
      matched.shift();
      Utils.padMonth(matched);
      Utils.popUndefined(matched);
      return new (Function.prototype.bind.apply(Date, [null].concat((0, _toConsumableArray3.default)(matched))))();
    }
    var date = new Date(str);
    if (date == "Invalid Date") {
      // console.error("Invalid date parse from \"" + str + "\"");
      // return null;
      throw new Error("Invalid date parse from " + str);
    } else {
      return date;
    }
  },
  popUndefined: function popUndefined(arr) {
    if (arr.length > 0 && arr[arr.length - 1] == undefined) {
      arr.pop();
      return Utils.popUndefined(arr);
    }
    return arr;
  },
  padMonth: function padMonth(arr) {
    //自动补充月份
    if (arr.length > 1 && arr[1] > 0) arr[1] -= 1;
  },
  isLeapYear: function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  },
  format: function format(date, formatStr) {
    var str = formatStr;
    str = str.replace(/yyyy|YYYY/, date.getFullYear());
    str = str.replace(/yy|YY/, date.getFullYear() % 100 > 8 ? (date.getFullYear() % 100).toString() : '0' + date.getFullYear() % 100);
    str = str.replace(/MM/, date.getMonth() > 8 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1));
    str = str.replace(/M/g, date.getMonth() + 1);
    str = str.replace(/w|W/g, WEEK[date.getDay()]);
    str = str.replace(/dd|DD/, this.pad(date.getDate()));
    str = str.replace(/d|D/g, date.getDate());
    str = str.replace(/hh|HH/, this.pad(date.getHours()));
    str = str.replace(/h|H/g, date.getHours());
    str = str.replace(/mm/, this.pad(date.getMinutes()));
    str = str.replace(/m/g, date.getMinutes());
    str = str.replace(/ss|SS/, this.pad(date.getSeconds()));
    str = str.replace(/s|S/g, date.getSeconds());
    str = str.replace(/q|Q/g, date.getHours() > 12 ? DAY_STRING[1] : DAY_STRING[0]);
    return str;
  },
  UTCformat: function UTCformat(date, formatStr) {
    var str = formatStr;
    str = str.replace(/yyyy|YYYY/, date.getUTCFullYear());
    str = str.replace(/yy|YY/, date.getUTCFullYear() % 100 > 8 ? (date.getUTCFullYear() % 100).toString() : '0' + date.getUTCFullYear() % 100);
    str = str.replace(/MM/, date.getUTCMonth() > 8 ? (date.getUTCMonth() + 1).toString() : '0' + (date.getUTCMonth() + 1));
    str = str.replace(/M/g, date.getUTCMonth() + 1);
    str = str.replace(/w|W/g, WEEK[date.getUTCDay()]);
    str = str.replace(/dd|DD/, this.pad(date.getUTCDate()));
    str = str.replace(/d|D/g, date.getUTCDate());
    str = str.replace(/hh|HH/, this.pad(date.getUTCHours()));
    str = str.replace(/h|H/g, date.getUTCHours());
    str = str.replace(/mm/, this.pad(date.getUTCMinutes()));
    str = str.replace(/m/g, date.getUTCMinutes());
    str = str.replace(/ss|SS/, this.pad(date.getUTCSeconds()));
    str = str.replace(/s|S/g, date.getUTCSeconds());
    str = str.replace(/q|Q/g, date.getUTCHours() > 12 ? DAY_STRING[1] : DAY_STRING[0]);
    return str;
  },
  timestamp: function timestamp(date) {
    return Math.floor(date.getTime() / 1000);
  },
  getDays: function getDays(date) {
    return Math.floor((date.getTime() - MSE) / _DAYS);
  },
  getHours: function getHours(date) {
    return Math.floor((date.getTime() - MSE) / _HOURS);
  },
  getMonths: function getMonths(date) {
    return date.getYear() * 12 + date.getMonth() + 1;
  },
  isObject: function isObject(input) {
    return Object.prototype.toString.call(input) === '[object Object]';
  },
  isArray: function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  },
  isDate: function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  },
  isNumber: function isNumber(input) {
    return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
  },
  isString: function isString(input) {
    return input instanceof String || Object.prototype.toString.call(input) === '[object String]';
  },
  extend: function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }

    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }

    return a;
  },
  makeGetSet: function makeGetSet(unit) {
    return function (value) {
      if (value != undefined) {
        // if(unit=="Month")value = value>0?(value-1):0;
        Date.prototype["set" + unit].call(this._date, value);
        return this;
      } else {
        return Date.prototype["get" + unit].call(this._date);
        // return unit=="Month"?(result+1):result;
      }
    };
  }
};

function hasOwnProp(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}

var manbaPrototype__proto = Manba.prototype;

var methods = {
  "year": "FullYear",
  "day": "Day",
  "date": "Date",
  "hours": "Hours",
  "milliseconds": "Milliseconds",
  "seconds": "Seconds",
  "minutes": "Minutes",
  "time": "Time"
};

for (var unit in methods) {
  manbaPrototype__proto[unit] = Utils.makeGetSet(methods[unit]);
}

var manba = function manba(param, arg2) {
  if (param instanceof Manba) {
    return new Manba(param);
  } else if (Utils.isObject(param)) {
    //config
    if (param.formatString && Utils.isObject(param.formatString)) {
      Utils.extend(FORMAT_LIST, param.formatString);
    }
    if (param.now) {
      timeDelay = manba(param.now).time() - manba().time();
    }
  } else {
    return new Manba(param, arg2);
  }
};

manba.config = function (param) {
  if (param.formatString && Utils.isObject(param.formatString)) {
    Utils.extend(FORMAT_LIST, param.formatString);
  }
  if (param.now) {
    timeDelay = manba(param.now).time() - manba().time();
  }
};

manba.SECOND = 2;
manba.MINUTE = 3;
manba.HOUR = 4;
manba.DAY = 5;
manba.MONTH = 6;
manba.YEAR = 7;
manba.WEEK = 8;
manba.TIME = 9;
manba.QUARTER = 10;

manba.MONDAY = 1;
manba.TUESDAY = 2;
manba.WEDNESDAY = 3;
manba.THURSDAY = 4;
manba.FRIDAY = 5;
manba.SATURDAY = 6;
manba.SUNDAY = 7;
module.exports = manba;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(28);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(27);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(57);
module.exports = __webpack_require__(5).Array.from;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(23);
var toAbsoluteIndex = __webpack_require__(54);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3);
var createDesc = __webpack_require__(12);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(19)(function () {
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(11);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(47);
var descriptor = __webpack_require__(12);
var setToStringTag = __webpack_require__(20);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(46);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(52);
var hide = __webpack_require__(7);
var has = __webpack_require__(6);
var Iterators = __webpack_require__(11);
var $iterCreate = __webpack_require__(43);
var setToStringTag = __webpack_require__(20);
var getPrototypeOf = __webpack_require__(49);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(48);
var enumBugKeys = __webpack_require__(18);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(38).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(51);

module.exports = __webpack_require__(1) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6);
var toObject = __webpack_require__(24);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(35)(false);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(50);
var enumBugKeys = __webpack_require__(18);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var defined = __webpack_require__(8);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(36);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(11);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(16);
var $export = __webpack_require__(9);
var toObject = __webpack_require__(24);
var call = __webpack_require__(42);
var isArrayIter = __webpack_require__(41);
var toLength = __webpack_require__(23);
var createProperty = __webpack_require__(37);
var getIterFn = __webpack_require__(56);

$export($export.S + $export.F * !__webpack_require__(45)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(3).f });


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(53)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(44)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ })
/******/ ]);
});