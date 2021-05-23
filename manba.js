;(function (name, definition) {
  var hasDefine = typeof define === 'function',
    hasExports = typeof module !== 'undefined' && module.exports;
  if (hasExports) {
    module.exports = definition();
  } else if (hasDefine) {
    define(definition);
  } else {
    this[name] = definition();
  }
})('manba', function () {
  "use strict";
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
    "nn": "MM月DD日",
  }

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

  function _Manba(arg1, arg2) {
    Utils.initmanba(this, arg1, arg2);
    return this;
  }

  _Manba.prototype.format = function (str) {
    var m = this;
    var v = this.isValid();
    if (v !== true) return v;

    str = str || "l";
    var formatStr = FORMAT_LIST[str] || str;
    return Utils.format(m._date, formatStr);
  }

  _Manba.prototype.UTCformat = function (str) {
    var m = this;

    var v = this.isValid();
    if (v !== true) return v;

    str = str || "l";
    var formatStr = FORMAT_LIST[str] || str;
    return Utils.UTCformat(m._date, formatStr);
  }

  _Manba.prototype.toString = function () {
    var v = this.isValid();
    if (v !== true) return v;
    return this._date.toString();
  }

  _Manba.prototype.toISOString = function (utcZone) {
    var v = this.isValid();
    if (v !== true) return v;
    var offset = 0;
    if (utcZone !== undefined) {
      offset = utcZone * 60;
    } else {
      offset = -new Date().getTimezoneOffset();
    }
    var dif = offset >= 0 ? '+' : '-';
    // console.log(Utils.pad(offset / 60))
    var times = manba(this.time() + offset * 60 * 1000);
    return times.UTCformat("yyyy-MM-ddThh:mm:ss") + dif + Utils.pad(parseInt(offset / 60)) + ':' + Utils.pad(offset % 60);
  }

  _Manba.prototype.toLocalString = function () {
    var v = this.isValid();
    if (v !== true) return v;
    var offset = -new Date().getTimezoneOffset();
    var dif = offset >= 0 ? '+' : '-';
    return this.format("yyyy-MM-ddThh:mm:ss") + dif + Utils.pad(parseInt(offset / 60)) + ':' + Utils.pad(offset % 60);
  }

  _Manba.prototype.distance = function (_m, type, weekStart) {
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

  _Manba.prototype.getWeekOfYear = function (weekStart) {
    weekStart = (weekStart || 0) - 0;
    if (isNaN(weekStart) || weekStart > 6) {
      weekStart = 0;
    }
    var firstDay = this.startOf(manba.YEAR);
    var firstWeekDays = (7 - firstDay.day() + weekStart) % 7;
    var dayOfYear = ((this.startOf(manba.DAY).time() - firstDay.time()) / (24 * 3600 * 1000)) + 1;
    return Math.ceil((dayOfYear - firstWeekDays) / 7);
  }

  _Manba.prototype.getWeekOfMonth = function (weekStart) {
    weekStart = (weekStart || 0) - 0;
    if (isNaN(weekStart) || weekStart > 6) {
      weekStart = 0;
    }
    var dayOfWeek = this.day();
    var day = this.date();
    return Math.ceil((day - dayOfWeek - 1) / 7) + (dayOfWeek >= weekStart ? 1 : 0);
  }

  _Manba.prototype.isLeapYear = function () {
    var v = this.isValid();
    if (v !== true) return v;
    return Utils.isLeapYear(this.year());
  }

  _Manba.prototype.isThisYear = function () {
    var v = this.isValid();
    if (v !== true) return v;
    return Utils.timestamp(this._date);
  }

  _Manba.prototype.isBefore = function () {
    var v = this.isValid();
    if (v !== true) return v;
    return Utils.timestamp(this._date);
  }

  _Manba.prototype.isAfter = function () {
    var v = this.isValid();
    if (v !== true) return v;
    return Utils.timestamp(this._date);
  }

  _Manba.prototype.month = function (num) {
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

  _Manba.prototype.add = function (num, type) {
    var v = this.isValid();
    if (v !== true) return v;
    var m = this;
    num = parseInt(num);
    type = type || manba.DAY;

    switch (type) {
    case manba.DAY:
      m.time(m.time() + (num * _DAYS));
      break;
    case manba.MONTH:
      var originDay = m.date();
      var month_add = m.month() + num;
      m.month(month_add);
      if (m.date() != originDay) {
        m.add(-1, manba.MONTH);
        m.date(m.endOf(manba.MONTH).date());
      }
      break;
    case manba.QUARTER:
      m.month(m.month() + num * 3);
      break;
    case manba.YEAR:
      m.year(m.year() + num);
      break;
    case manba.WEEK:
      m.time(m.time() + (num * _WEEKS));
      break;
    case manba.HOUR:
      m.time(m.time() + (num * _HOURS));
      break;
    case manba.MINUTE:
      m.time(m.time() + (num * _MINUTES));
      break;
    case manba.SECOND:
      m.time(m.time() + (num * _SECONDS));
      break;
    case manba.TIME:
      m.time(m.time() + (num));
      break;
    }
    return m;
  }

  _Manba.prototype.clone = function () {
    return new _Manba(this);
  }

  _Manba.prototype.endOf = function (type, set) {
    var v = this.isValid();
    if (v !== true) return v;
    var m = new _Manba(this);
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

  _Manba.prototype.startOf = function (type, set) {
    var v = this.isValid();
    if (v !== true) return v;
    var m = new _Manba(this);
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
      m = m.startOf(manba.DAY);
      m.month(1);
      m.date(1);
      break;
    case manba.HOUR:
      m.time(Math.floor((m.time()) / _HOURS) * _HOURS);
      break;
    }
    return m;
  }

  _Manba.prototype.isValid = function () {
    return Utils.isDate(this._date) ? true : "Invalid Date";
  }

  _Manba.prototype.getServerTime = function () {
    if (timeDelay != 0) {
      return this.add(timeDelay, manba.TIME);
    }
    return this;
  }

  var Utils = {
    initmanba: function(manba_obj, arg1, arg2) {
      var _date = new Date();
      if (arg1 != undefined) {
        if (Utils.isNumber(arg1)) {
          // if (arg1 < 9999999999) arg1 = arg1 * 1000;
          _date.setTime(arg1);
        } else if (Utils.isArray(arg1)) {
          Utils.padMonth(arg1);
          _date = Utils.initDateWithArray(arg1);
        } else if (Utils.isDate(arg1)) {
          _date = arg1;
        } else if (Utils.isString(arg1)) {
          _date = Utils.parse(arg1, arg2);
        } else if (arg1 instanceof _Manba) {
          _date = new Date(arg1.time());
        }
      }
      manba_obj._date = _date;
    },
    initDateWithArray: function(args) {
      if (args.length > 1) {
        return new Date((new (Function.prototype.bind.apply(Date, [0].concat(args)))).setFullYear(args[0]));
      }
      return new Date();
    },
    pad: function(num, targetLength) {
      targetLength = targetLength || 2;
      var padString = '0';
      num = String(Math.abs(num) || 0);
      if (num.length >= targetLength) {
        return num;
      } else {
        targetLength = targetLength - num.length;
        padString += Array(targetLength+1).join(padString);
        return padString.slice(0, targetLength) + String(num);
      }
    },
    parse: function(str, arg2) {
      if (Utils.isString(arg2)) {
        var obj = { Y: 0, M: 1, D: 1, H: 0, m: 0, S: 0 };
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
        var date = Utils.initDateWithArray([obj.Y, obj.M, obj.D, obj.H, obj.m, obj.S]);
        return date;
      }
      var aspNetJsonRegex = /^(\d{4,})\-(\d{2})\-(\d{2})\s?\:?(\d{2})?\:?(\d{2})?\:?(\d{2})?$/i;
      var matched = aspNetJsonRegex.exec(str);

      if (matched !== null) {
        matched.shift();
        Utils.padMonth(matched);
        Utils.popUndefined(matched);
        return Utils.initDateWithArray(matched);
      }
      var date = new Date(str);
      if (date == "Invalid Date") {
        throw new Error('Invalid date parse from ' +str);
      } else {
        return date;
      }
    },
    popUndefined: function(arr) {
      if (arr.length > 0 && arr[arr.length - 1] == undefined) {
        arr.pop();
        return Utils.popUndefined(arr);
      }
      return arr;
    },
    padMonth: function(arr) {
      //自动补充月份
      if (arr.length > 1 && arr[1] > 0) arr[1] -= 1;
    },
    isLeapYear: function(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    },
    format: function(date, formatStr) {
      var str = formatStr;
      str = str.replace(/yyyy|YYYY/, this.pad(date.getFullYear(), 4));
      str = str.replace(/yy|YY/, (date.getFullYear() % 100) > 8 ? (date.getFullYear() % 100).toString() : '0' + (date.getFullYear() % 100));
      str = str.replace(/MM/, date.getMonth() > 8 ? (date.getMonth() + 1).toString() : ('0' + (date.getMonth() + 1)));
      str = str.replace(/M/g, (date.getMonth() + 1));
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
    UTCformat: function(date, formatStr) {
      var str = formatStr;
      str = str.replace(/yyyy|YYYY/, this.pad(date.getUTCFullYear(), 4));
      str = str.replace(/yy|YY/, (date.getUTCFullYear() % 100) > 8 ? (date.getUTCFullYear() % 100).toString() : '0' + (date.getUTCFullYear() % 100));
      str = str.replace(/MM/, date.getUTCMonth() > 8 ? (date.getUTCMonth() + 1).toString() : ('0' + (date.getUTCMonth() + 1)));
      str = str.replace(/M/g, (date.getUTCMonth() + 1));
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
    timestamp: function(date) {
      return Math.floor(date.getTime() / 1000);
    },
    getDays: function(date) {
      return Math.floor((date.getTime() - MSE) / _DAYS);
    },
    getHours: function(date) {
      return Math.floor((date.getTime() - MSE) / _HOURS);
    },
    getMonths: function(date) {
      return date.getYear() * 12 + date.getMonth() + 1;
    },
    isObject: function(input) {
      return Object.prototype.toString.call(input) === '[object Object]';
    },
    isArray: function(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    },
    isDate: function(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    },
    isNumber: function(input) {
      return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
    },
    isString: function(input) {
      return input instanceof String || Object.prototype.toString.call(input) === '[object String]';
    },
    extend: function(a, b) {
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
    makeGetSet: function(unit) {
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
  }


  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  var manbaPrototype__proto = _Manba.prototype;

  var methods = {
    "year": "FullYear",
    "day": "Day",
    "date": "Date",
    "hours": "Hours",
    "milliseconds": "Milliseconds",
    "seconds": "Seconds",
    "minutes": "Minutes",
    "time": "Time",
  };

  for (var unit in methods) {
    manbaPrototype__proto[unit] = Utils.makeGetSet(methods[unit]);
  }

  var manba = function (param, arg2) {
    if (param instanceof _Manba) {
      return new _Manba(param);
    } else if (Utils.isObject(param)) {
      //config
      if (param.formatString && Utils.isObject(param.formatString)) {
        Utils.extend(FORMAT_LIST, param.formatString);
      }
      if (param.now) {
        timeDelay = manba(param.now).time() - manba().time();
      }
    } else {
      return new _Manba(param, arg2);
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

  manba.SECOND = "SECOND";
  manba.MINUTE = "MINUTE";
  manba.HOUR = "HOUR";
  manba.DAY = "DAY";
  manba.MONTH = "MONTH";
  manba.YEAR = "YEAR";
  manba.WEEK = "WEEK";
  manba.TIME = "TIME";
  manba.QUARTER = "QUARTER";

  manba.MONDAY = 1;
  manba.TUESDAY = 2;
  manba.WEDNESDAY = 3;
  manba.THURSDAY = 4;
  manba.FRIDAY = 5;
  manba.SATURDAY = 6;
  manba.SUNDAY = 7;

  return manba;
});
