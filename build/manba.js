!function(t){var e="function"==typeof define;"undefined"!=typeof module&&module.exports?module.exports=t():e?define(t):this.manba=t()}(function(){"use strict";var r={l:"YYYY-MM-DD",ll:"YYYY年MM月DD日",k:"YYYY-MM-DD hh:mm",kk:"YYYY年MM月DD日 hh点mm分",kkk:"YYYY年MM月DD日 hh点mm分 q",f:"YYYY-MM-DD hh:mm:ss",ff:"YYYY年MM月DD日 hh点mm分ss秒",fff:"YYYY年MM月DD日 hh点mm分ss秒 星期w",n:"MM-DD",nn:"MM月DD日"},a=0,o=36e5,s=864e5,e=new Date(1970,0,1,0,0,0).getTime(),n=["日","一","二","三","四","五","六"],i=["上午","下午"];function u(t,e){return c.initmanba(this,t,e),this}u.prototype.format=function(t){var e=this.isValid();return!0!==e?e:c.format(this._date,r[t=t||"l"]||t)},u.prototype.UTCformat=function(t){var e=this.isValid();return!0!==e?e:c.UTCformat(this._date,r[t=t||"l"]||t)},u.prototype.toString=function(){var t=this.isValid();return!0!==t?t:this._date.toString()},u.prototype.toISOString=function(t){var e=this.isValid();if(!0!==e)return e;e=0,t=0<=(e=void 0!==t?60*t:-(new Date).getTimezoneOffset())?"+":"-";return l(this.time()+60*e*1e3).UTCformat("yyyy-MM-ddThh:mm:ss")+t+c.pad(parseInt(e/60))+":"+c.pad(e%60)},u.prototype.toLocalString=function(){var t=this.isValid();if(!0!==t)return t;var e=-(new Date).getTimezoneOffset(),t=0<=e?"+":"-";return this.format("yyyy-MM-ddThh:mm:ss")+t+c.pad(parseInt(e/60))+":"+c.pad(e%60)},u.prototype.distance=function(t,e,r){var a=this.isValid();if(!0!==a)return a;var n=this;e=e||l.DAY;a=(t=l(t)).isValid();if(!0!==a)return a;switch(e){case l.MINUTE:return Math.floor((n.time()-t.time())/60/1e3);case l.HOUR:return c.getHours(n._date)-c.getHours(t._date);case l.DAY:return c.getDays(n._date)-c.getDays(t._date);case l.WEEK:return(c.getDays(n.startOf(l.WEEK,r)._date)-c.getDays(t.startOf(l.WEEK,r)._date))/7;case l.MONTH:return c.getMonths(n._date)-c.getMonths(t._date);case l.YEAR:return n._date.getYear()-t._date.getYear()}return 0},u.prototype.getWeekOfYear=function(t){t=+(t||0),(isNaN(t)||6<t)&&(t=0);var e=this.startOf(l.YEAR),t=(7-e.day()+t)%7,e=(this.startOf(l.DAY).time()-e.time())/864e5+1;return Math.ceil((e-t)/7)},u.prototype.getWeekOfMonth=function(t){t=+(t||0),(isNaN(t)||6<t)&&(t=0);var e=this.day(),r=this.date();return Math.ceil((r-e-1)/7)+(t<=e?1:0)},u.prototype.isLeapYear=function(){var t=this.isValid();return!0!==t?t:c.isLeapYear(this.year())},u.prototype.isThisYear=function(){var t=this.isValid();return!0!==t?t:c.timestamp(this._date)},u.prototype.isBefore=function(){var t=this.isValid();return!0!==t?t:c.timestamp(this._date)},u.prototype.isAfter=function(){var t=this.isValid();return!0!==t?t:c.timestamp(this._date)},u.prototype.month=function(t){var e=this.isValid();if(!0!==e)return e;return null==t?this._date.getMonth()+1:(t=parseInt(t),t=this._date.setMonth(t-1),this)},u.prototype.add=function(t,e){var r=this.isValid();if(!0!==r)return r;var a=this;switch(t=parseInt(t),e=e||l.DAY){case l.DAY:a.time(a.time()+t*s);break;case l.MONTH:var n=a.date(),i=a.month()+t;a.month(i),a.date()!=n&&(a.add(-1,l.MONTH),a.date(a.endOf(l.MONTH).date()));break;case l.QUARTER:a.month(a.month()+3*t);break;case l.YEAR:a.year(a.year()+t);break;case l.WEEK:a.time(a.time()+6048e5*t);break;case l.HOUR:a.time(a.time()+t*o);break;case l.MINUTE:a.time(a.time()+6e4*t);break;case l.SECOND:a.time(a.time()+1e3*t);break;case l.TIME:a.time(a.time()+t)}return a},u.prototype.clone=function(){return new u(this)},u.prototype.endOf=function(t,e){var r=this.isValid();if(!0!==r)return r;r=new u(this),t=t||l.DAY;return(r=r.startOf(t,e)).add(1,t),r.add(-1,l.SECOND),r},u.prototype.startOf=function(t,e){var r=this.isValid();if(!0!==r)return r;var a=new u(this);switch(t||l.DAY){case l.DAY:a.milliseconds(0),a.seconds(0),a.minutes(0),a.hours(0);break;case l.MONTH:a.date(1),a=a.startOf(l.DAY);break;case l.QUARTER:(a=a.startOf(l.MONTH)).add(-(a.month()-1)%3,l.MONTH);break;case l.WEEK:var a=a.startOf(l.DAY),n=(e=e||l.SUNDAY)==l.SUNDAY?0:1;0==a.day()&&1==n&&(n=-6),a.add(-a.day()+n,l.DAY);break;case l.YEAR:(a=a.startOf(l.DAY)).month(1),a.date(1);break;case l.HOUR:a.time(Math.floor(a.time()/o)*o)}return a},u.prototype.isValid=function(){return!!c.isDate(this._date)||"Invalid Date"},u.prototype.getServerTime=function(){return 0!=a?this.add(a,l.TIME):this};var c={initmanba:function(t,e,r){var a=new Date;null!=e&&(c.isNumber(e)?a.setTime(e):c.isArray(e)?(c.padMonth(e),a=c.initDateWithArray(e)):c.isDate(e)?a=e:c.isString(e)?a=c.parse(e,r):e instanceof u&&(a=new Date(e.time()))),t._date=a},initDateWithArray:function(t){return 1<t.length?new Date((new(Function.prototype.bind.apply(Date,[0].concat(t)))).setFullYear(t[0])):new Date},pad:function(t,e){e=e||2;var r="0";return(t=String(Math.abs(t)||0)).length>=e?t:(e-=t.length,(r+=Array(e+1).join(r)).slice(0,e)+String(t))},parse:function(s,t){if(c.isString(t)){var u={Y:0,M:1,D:1,H:0,m:0,S:0};return t.replace(/([^YyMDdHhmsS]*?)(([YyMDdHhmsS])\3*)([^YyMDdHhmsS]*?)/g,function(t,e,r,a,n,i,o){r=parseInt(s.substr(i+e.length,r.length),10);return"m"==a.toLowerCase()?u[a]=r:u[a.toUpperCase()]=r,""}),u.M--,e=c.initDateWithArray([u.Y,u.M,u.D,u.H,u.m,u.S])}var e,t=/^(\d{4,})\-(\d{2})\-(\d{2})\s?\:?(\d{2})?\:?(\d{2})?\:?(\d{2})?$/i.exec(s);if(null!==t)return t.shift(),c.padMonth(t),c.popUndefined(t),c.initDateWithArray(t);if("Invalid Date"==(e=new Date(s)))throw new Error("Invalid date parse from "+s);return e},popUndefined:function(t){return 0<t.length&&null==t[t.length-1]?(t.pop(),c.popUndefined(t)):t},padMonth:function(t){1<t.length&&0<t[1]&&--t[1]},isLeapYear:function(t){return t%4==0&&t%100!=0||t%400==0},format:function(t,e){return e.replace(/yyyy|YYYY/,this.pad(t.getFullYear(),4)).replace(/yy|YY/,8<t.getFullYear()%100?(t.getFullYear()%100).toString():"0"+t.getFullYear()%100).replace(/MM/,8<t.getMonth()?(t.getMonth()+1).toString():"0"+(t.getMonth()+1)).replace(/M/g,t.getMonth()+1).replace(/w|W/g,n[t.getDay()]).replace(/dd|DD/,this.pad(t.getDate())).replace(/d|D/g,t.getDate()).replace(/hh|HH/,this.pad(t.getHours())).replace(/h|H/g,t.getHours()).replace(/mm/,this.pad(t.getMinutes())).replace(/m/g,t.getMinutes()).replace(/ss|SS/,this.pad(t.getSeconds())).replace(/s|S/g,t.getSeconds()).replace(/q|Q/g,12<t.getHours()?i[1]:i[0])},UTCformat:function(t,e){return e.replace(/yyyy|YYYY/,this.pad(t.getUTCFullYear(),4)).replace(/yy|YY/,8<t.getUTCFullYear()%100?(t.getUTCFullYear()%100).toString():"0"+t.getUTCFullYear()%100).replace(/MM/,8<t.getUTCMonth()?(t.getUTCMonth()+1).toString():"0"+(t.getUTCMonth()+1)).replace(/M/g,t.getUTCMonth()+1).replace(/w|W/g,n[t.getUTCDay()]).replace(/dd|DD/,this.pad(t.getUTCDate())).replace(/d|D/g,t.getUTCDate()).replace(/hh|HH/,this.pad(t.getUTCHours())).replace(/h|H/g,t.getUTCHours()).replace(/mm/,this.pad(t.getUTCMinutes())).replace(/m/g,t.getUTCMinutes()).replace(/ss|SS/,this.pad(t.getUTCSeconds())).replace(/s|S/g,t.getUTCSeconds()).replace(/q|Q/g,12<t.getUTCHours()?i[1]:i[0])},timestamp:function(t){return Math.floor(t.getTime()/1e3)},getDays:function(t){return Math.floor((t.getTime()-e)/s)},getHours:function(t){return Math.floor((t.getTime()-e)/o)},getMonths:function(t){return 12*t.getYear()+t.getMonth()+1},isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isArray:function(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)},isDate:function(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)},isNumber:function(t){return t instanceof Number||"[object Number]"===Object.prototype.toString.call(t)},isString:function(t){return t instanceof String||"[object String]"===Object.prototype.toString.call(t)},extend:function(t,e){for(var r in e)d(e,r)&&(t[r]=e[r]);return d(e,"toString")&&(t.toString=e.toString),d(e,"valueOf")&&(t.valueOf=e.valueOf),t},makeGetSet:function(e){return function(t){return null!=t?(Date.prototype["set"+e].call(this._date,t),this):Date.prototype["get"+e].call(this._date)}}};function d(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var t,p=u.prototype,h={year:"FullYear",day:"Day",date:"Date",hours:"Hours",milliseconds:"Milliseconds",seconds:"Seconds",minutes:"Minutes",time:"Time"};for(t in h)p[t]=c.makeGetSet(h[t]);var l=function(t,e){return t instanceof u?new u(t):c.isObject(t)?(t.formatString&&c.isObject(t.formatString)&&c.extend(r,t.formatString),void(t.now&&(a=l(t.now).time()-l().time()))):new u(t,e)};return l.config=function(t){t.formatString&&c.isObject(t.formatString)&&c.extend(r,t.formatString),t.now&&(a=l(t.now).time()-l().time())},l.SECOND="SECOND",l.MINUTE="MINUTE",l.HOUR="HOUR",l.DAY="DAY",l.MONTH="MONTH",l.YEAR="YEAR",l.WEEK="WEEK",l.TIME="TIME",l.QUARTER="QUARTER",l.MONDAY=1,l.TUESDAY=2,l.WEDNESDAY=3,l.THURSDAY=4,l.FRIDAY=5,l.SATURDAY=6,l.SUNDAY=7,l});