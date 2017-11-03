"use strict";
const FORMAT_LIST = {
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

let timeDelay = 0;

const _SECONDS = 1000;
const _MINUTES = 1000 * 60;
const _HOURS = 1000 * 60 * 60;
const _DAYS = 1000 * 60 * 60 * 24;
const _WEEKS = _DAYS * 7;
const _YEARS = _DAYS * 365;
const MSE = new Date(1970, 0, 1, 0, 0, 0).getTime();

const WEEK = ['日', '一', '二', '三', '四', '五', '六'];
const DAY_STRING = ['上午', '下午'];

class Manba {
  constructor() {
    Utils.initmanba(this, ...arguments);
    return this;
  }

  format(str) {
    let m = this;

    let v = this.isValid();
    if (v !== true) return v;

    str = str || "l";
    let formatStr = FORMAT_LIST[str] || str;
    return Utils.format(m._date, formatStr);
  }

  UTCformat(str) {
    let m = this;

    let v = this.isValid();
    if (v !== true) return v;

    str = str || "l";
    let formatStr = FORMAT_LIST[str] || str;
    return Utils.UTCformat(m._date, formatStr);
  }

  toString() {
    let v = this.isValid();
    if (v !== true) return v;
    return this._date.toString();
  }

  toISOString(utcZone) {
    let v = this.isValid();
    if (v !== true) return v;
    let offset = 0;
    if (utcZone !== undefined) {
      offset = utcZone * 60;
    } else {
      offset = -this._date.getTimezoneOffset();
    }
    let dif = offset >= 0 ? '+' : '-';
    let times = manba(this.time() + offset * 60 * 1000);
    return times.UTCformat("yyyy-MM-ddThh:mm:ss") + dif + Utils.pad(offset / 60) + ':' + Utils.pad(offset % 60);
  }

  toLocalString() {
    let v = this.isValid();
    if (v !== true) return v;
    let offset = -this._date.getTimezoneOffset();
    let dif = offset >= 0 ? '+' : '-';
    return this.format("yyyy-MM-ddThh:mm:ss") + dif + Utils.pad(offset / 60) + ':' + Utils.pad(offset % 60);
  }

  distance(_m, type, weekStart) {
    let v = this.isValid();
    if (v !== true) return v;
    let m = this;
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

  getWeekOfYear(weekStart) {
    weekStart = (weekStart || 0) - 0;
    if (isNaN(weekStart) || weekStart > 6) {
      weekStart = 0;
    }
    var year = this.year();
    var firstDay = this.startOf(manba.YEAR);
    var firstWeekDays = 7 - firstDay.day() + weekStart;
    var dayOfYear = ((this.startOf(manba.DAY).time() - firstDay.time()) / (24 * 3600 * 1000)) + 1;
    return Math.ceil((dayOfYear - firstWeekDays) / 7) + 1;
  }

  getWeekOfMonth(weekStart) {
    weekStart = (weekStart || 0) - 0;
    if (isNaN(weekStart) || weekStart > 6) {
      weekStart = 0;
    }
    let dayOfWeek = this.day();
    let day = this.date();
    return Math.ceil((day - dayOfWeek - 1) / 7) + (dayOfWeek >= weekStart ? 1 : 0);
  }

  isLeapYear() {
    let v = this.isValid();
    if (v !== true) return v;
    return Utils.isLeapYear(this.year());
  }

  isThisYear() {
    let v = this.isValid();
    if (v !== true) return v;
    return Utils.timestamp(this._date);
  }

  isBefore() {
    let v = this.isValid();
    if (v !== true) return v;
    return Utils.timestamp(this._date);
  }

  isAfter() {
    let v = this.isValid();
    if (v !== true) return v;
    return Utils.timestamp(this._date);
  }

  month(num) {
    let v = this.isValid();
    if (v !== true) return v;
    let m = this;
    if (num == undefined) {
      return m._date.getMonth() + 1;
    }
    num = parseInt(num);
    num = m._date.setMonth(num - 1);
    return m;
  }

  add(num, type) {
    let v = this.isValid();
    if (v !== true) return v;
    let m = this;
    num = parseInt(num);
    type = type || manba.DAY;

    switch (type) {
    case manba.DAY:
      m.time(m.time() + (num * _DAYS));
      break;
    case manba.MONTH:
      let month_add = m.month() + num;
      m.month(month_add);
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

  endOf(type, set) {
    let v = this.isValid();
    if (v !== true) return v;
    let m = new Manba(this);
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

  startOf(type, set) {
    let v = this.isValid();
    if (v !== true) return v;
    let m = new Manba(this);
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
      m.add( - ( m.month() - 1 ) % 3 , manba.MONTH );
      break;
    case manba.WEEK:
      m = m.startOf(manba.DAY);
      set = set || manba.SUNDAY;
      let startDay = set == manba.SUNDAY ? 0 : 1;
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
      m.time(Math.floor((m.time()) / _HOURS) * _HOURS);
      break;
    }
    return m;
  }

  isValid() {
    return Utils.isDate(this._date) ? true : "Invalid Date";
  }
}

let Utils = {
  initmanba(manba_obj, arg1, arg2) {
    let _date = new Date(),
      date_bak = _date;
    if (arg1 != undefined) {
      if (Utils.isNumber(arg1)) {
        // if (arg1 < 9999999999) arg1 = arg1 * 1000;
        _date.setTime(arg1);
      } else if (Utils.isArray(arg1)) {
        Utils.padMonth(arg1);
        _date = new Date(...arg1);
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
  pad(num) {
    let norm = Math.abs(Math.floor(num));
    return (norm < 10 ? '0' : '') + norm;
  },
  parse(str, arg2) {
    if (Utils.isString(arg2)) {
      let obj = { Y: 0, M: 1, D: 0, H: 0, m: 0, S: 0 };
      arg2.replace(/([^YyMDdHhmsS]*?)(([YyMDdHhmsS])\3*)([^YyMDdHhmsS]*?)/g, function (m, $1, $2, $3, $4, idx, old) {
        let num = parseInt(str.substr(idx + $1.length, $2.length), 10);
        if ($3.toLowerCase() == 'm') {
          obj[$3] = num;
        } else {
          obj[$3.toUpperCase()] = num;
        }
        return '';
      });
      obj.M--;
      let date = new Date(obj.Y, obj.M, obj.D, obj.H, obj.m, obj.S);
      return date;
    }
    let aspNetJsonRegex = /^(\d{4})\-?(\d{2})\-?(\d{2})\s?\:?(\d{2})?\:?(\d{2})?\:?(\d{2})?$/i;
    let matched = aspNetJsonRegex.exec(str);
    if (matched !== null) {
      matched.shift();
      Utils.padMonth(matched);
      Utils.popUndefined(matched);
      return new Date(...matched);
    }
    let date = new Date(str);
    if (date == "Invalid Date") {
      // console.error("Invalid date parse from \"" + str + "\"");
      // return null;
      throw new Error(`Invalid date parse from ${str}`);
    } else {
      return date;
    }
  },
  popUndefined(arr) {
    if (arr.length > 0 && arr[arr.length - 1] == undefined) {
      arr.pop();
      return Utils.popUndefined(arr);
    }
    return arr;
  },
  padMonth(arr) {
    //自动补充月份
    if (arr.length > 1 && arr[1] > 0) arr[1] -= 1;
  },
  isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  },
  format(date, formatStr) {
    let str = formatStr;
    str = str.replace(/yyyy|YYYY/, date.getFullYear());
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
  UTCformat(date, formatStr) {
    let str = formatStr;
    str = str.replace(/yyyy|YYYY/, date.getUTCFullYear());
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
  timestamp(date) {
    return Math.floor(date.getTime() / 1000);
  },
  getDays(date) {
    return Math.floor((date.getTime() - MSE) / _DAYS);
  },
  getHours(date) {
    return Math.floor((date.getTime() - MSE) / _HOURS);
  },
  getMonths(date) {
    return date.getYear() * 12 + date.getMonth() + 1;
  },
  isObject(input) {
    return Object.prototype.toString.call(input) === '[object Object]';
  },
  isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  },
  isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  },
  isNumber(input) {
    return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
  },
  isString(input) {
    return input instanceof String || Object.prototype.toString.call(input) === '[object String]';
  },
  extend(a, b) {
    for (let i in b) {
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
  makeGetSet(unit) {
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

let manbaPrototype__proto = Manba.prototype;

const methods = {
  "year": "FullYear",
  "day": "Day",
  "date": "Date",
  "hours": "Hours",
  "milliseconds": "Milliseconds",
  "seconds": "Seconds",
  "minutes": "Minutes",
  "time": "Time",
};

for (let unit in methods) {
  manbaPrototype__proto[unit] = Utils.makeGetSet(methods[unit]);
}

let manba = function (param, arg2) {
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
