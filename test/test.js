var manba = require('../manba');
var expect = require('chai').expect;
(function () {
  'use strict';

  describe('初始化manba', function () {
    it('使用manba初始化', function () {
      let d = new manba();
      expect(manba(d).toString()).to.equal(d.toString());
    });
    it('使用date初始化', function () {
      let d = new Date();
      expect(manba(d).toString()).to.equal(d.toString());
    });
    it('使用time初始化', function () {
      expect(manba(1482913870836).format("f")).to.equal("2016-12-28 16:31:10");
    });
    // it('使用秒初始化', function () {
    //   expect(manba(1482913870).format("f")).to.equal("2016-12-28 16:31:10");
    // // });
    // it('使用秒初始化', function () {
    //   expect(manba(1482913870).format("f")).to.equal("2016-12-28 16:31:10");
    // });
    it('使用日期数组', function () {
      expect(manba([2016, 11, 23, 4, 3, 5]).format("f")).to.equal("2016-11-23 04:03:05");
    });
    it('使用简单的日期数组', function () {
      expect(manba([2015, 12, 3]).format("f")).to.equal("2015-12-03 00:00:00");
    });
    it('时间戳初始化', function () {
      expect(manba(1468970113000).format("f")).to.equal("2016-07-20 07:15:13");
    });
    it('使用大于千年的日期格式字符串初始化', function () {
      expect(manba("10014-12-03").format("f")).to.equal("10014-12-03 00:00:00");
    });
    it('使用小于千年的日期格式字符串初始化', function () {
      expect(manba("0014-12-03").format("f")).to.equal("0014-12-03 00:00:00");
    });
    it('使用日期格式字符串2014-12-03初始化', function () {
      expect(manba("2014-12-03").format("f")).to.equal("2014-12-03 00:00:00");
    });
    it('使用日期格式字符串2014-12-03 12:34初始化', function () {
      expect(manba("2014-12-03 12:34").format("f")).to.equal("2014-12-03 12:34:00");
    });
    it('使用日期格式字符串2014-12-03 12:34:34初始化', function () {
      expect(manba("2014-12-03 12:34:34").format("f")).to.equal("2014-12-03 12:34:34");
    });
    it('使用日期格式字符串0384-10-02 12:34:34初始化', function () {
      expect(manba("0384-10-02").toISOString()).to.equal("0384-10-02T00:00:00+08:00");
    });
    it('使用日期格式字符串0384-10-02 12:34:34初始化', function () {
      expect(manba("0384-10-02").toISOString(-7)).to.equal("0384-10-01T09:00:00-07:00");
    });
    it('使用日期格式字符串20141203初始化', function () {
      expect(manba("20141203", "YYYYMMDD").format("f")).to.equal("2014-12-03 00:00:00");
    });
    it('使用日期格式字符串201412031223初始化', function () {
      expect(manba("201412031223", "YYYYMMDDHHmm").format("f")).to.equal("2014-12-03 12:23:00");
    });
    it('使用parse初始化', function () {
      expect(manba("120320142312", "MMDDYYYYmmHH").format("f")).to.equal("2014-12-03 12:23:00");
    });
    it('使用parse初始化2', function () {
      expect(manba("2014年12月03日 12时23分", "YYYY年MM月DD日 HH时mm分").format("f")).to.equal("2014-12-03 12:23:00");
    });
    it('使用parse初始化3', function () {
      expect(manba("2014年12月03日 12时23分", "YYYY年MM月DD日 HH时mm分").format("f")).to.equal("2014-12-03 12:23:00");
    });
  });

  describe('manba format', function () {

    it('默认格式化', function () {
      expect(manba(1475942400000).format('')).to.equal("2016-10-09");
    });

    it('l', function () {
      expect(manba(1475942400000).format('l')).to.equal("2016-10-09");
    });

    it('ll', function () {
      expect(manba(1475942400000).format('ll')).to.equal("2016年10月09日");
    });

    it('k"', function () {
      expect(manba(1475942400000).format('k')).to.equal("2016-10-09 00:00");
    });

    it('kk', function () {
      expect(manba(1475942400000).format('kk')).to.equal("2016年10月09日 00点00分");
    });

    it('kkk', function () {
      expect(manba(1475942400000).format('kkk')).to.equal("2016年10月09日 00点00分 上午");
    });

    it('f', function () {
      expect(manba(1475942400000).format('f')).to.equal("2016-10-09 00:00:00");
    });

    it('ff', function () {
      expect(manba(1475942400000).format('ff')).to.equal("2016年10月09日 00点00分00秒");
    });

    it('fff', function () {
      expect(manba(1475942400000).format('fff')).to.equal("2016年10月09日 00点00分00秒 星期日");
    });

    it('n', function () {
      expect(manba(1475942400000).format('n')).to.equal("10-09");
    });

    it('nn', function () {
      expect(manba(1475942400000).format('nn')).to.equal("10月09日");
    });

  });


  describe('manba add', function () {

    it('manba add manba.MONTH', function () {
      expect(manba('2017-12-31 02:01').add(2, manba.MONTH).format("f")).to.equal("2018-02-28 02:01:00");
    });

    it('manba add manba.MONTH', function () {
      expect(manba('2017-12-31 02:01').add(-6, manba.MONTH).format("f")).to.equal("2017-06-30 02:01:00");
    });

    it('manba add manba.DAY', function () {
      expect(manba(1468970113000).add(1, manba.DAY).format("f")).to.equal("2016-07-21 07:15:13");
    });

    it('manba delete manba.DAY', function () {
      expect(manba(1468970113000).add(-1, manba.DAY).format("f")).to.equal("2016-07-19 07:15:13");
    });

    it('manba add manba.MONTH', function () {
      expect(manba(1468970113000).add(26, manba.MONTH).format("f")).to.equal("2018-09-20 07:15:13");
    });

    it('manba add manba.YEAR', function () {
      expect(manba(1468970113000).add(-1, manba.YEAR).format("f")).to.equal("2015-07-20 07:15:13");
    });

    it('manba add manba.YEAR2', function () {
      expect(manba(1468970113000).add(-2000, manba.YEAR).format("f")).to.equal("0016-07-20 07:15:13");
    });

    it('manba add manba.MINUTE', function () {
      expect(manba(1468970113000).add(-1, manba.MINUTE).format("f")).to.equal("2016-07-20 07:14:13");
    });

  });


  describe('manba startOf', function () {

    it('manba startOf manba.DAY', function () {
      expect(manba(1468970113000).startOf(manba.DAY).format("f")).to.equal("2016-07-20 00:00:00");
    });

    it('manba startOf manba.HOUR', function () {
      expect(manba(1468970113000).startOf(manba.HOUR).format("f")).to.equal("2016-07-20 07:00:00");
    });

    it('manba startOf manba.MONTH', function () {
      expect(manba(1468970113000).startOf(manba.MONTH).format("f")).to.equal("2016-07-01 00:00:00");
    });

    it('manba startOf manba.YEAR', function () {
      expect(manba(1468970113000).startOf(manba.YEAR).format("f")).to.equal("2016-01-01 00:00:00");
    });

    it('manba startOf manba.WEEK', function () {
      expect(manba(1468970113000).startOf(manba.WEEK, manba.MONDAY).format("f")).to.equal("2016-07-18 00:00:00");
    });
  });


  describe('manba endOf', function () {

    it('manba endOf manba.DAY', function () {
      expect(manba(1468970113000).endOf(manba.DAY).format("f")).to.equal("2016-07-20 23:59:59");
    });

    it('manba endOf manba.HOUR', function () {
      expect(manba(1468970113000).endOf(manba.HOUR).format("f")).to.equal("2016-07-20 07:59:59");
    });

    it('manba endOf manba.MONTH', function () {
      expect(manba(1468970113000).endOf(manba.MONTH).format("f")).to.equal("2016-07-31 23:59:59");
    });

    it('manba endOf manba.YEAR', function () {
      expect(manba(1468970113000).endOf(manba.YEAR).format("f")).to.equal("2016-12-31 23:59:59");
    });

    it('manba endOf manba.WEEK', function () {
      expect(manba(1468970113000).endOf(manba.WEEK).format("f")).to.equal("2016-07-23 23:59:59");
    });

  });



  describe('manba getWeekOfMonth', function () {

    it('manba getWeekOfMonth manba.MONDAY', function () {
      expect(manba("2016-12-25").getWeekOfMonth(manba.MONDAY)).to.equal(4);
    });

    it('manba getWeekOfYear manba.SUNDAY', function () {
      expect(manba("2016-12-25").getWeekOfMonth(manba.SUNDAY)).to.equal(5);
    });

  });


  describe('manba getWeekOfYear', function () {

    it('manba getWeekOfYear manba.MONDAY', function () {
      expect(manba("2016-12-25").getWeekOfYear(manba.MONDAY)).to.equal(52);
    });

    it('manba getWeekOfYear manba.SUNDAY', function () {
      expect(manba("2016-12-25").getWeekOfYear(manba.SUNDAY)).to.equal(53);
    });

  });

  describe('manba distance', function () {

    it('manba distance manba.DAY', function () {
      expect(manba('2016-07-23').distance(manba('2015-07-23'), manba.DAY)).to.equal(366);
    });

    it('manba distance manba.MONTH', function () {
      expect(manba('2016-07-23').distance(manba('2015-07-23'), manba.MONTH)).to.equal(12);
    });

    it('manba distance manba.YEAR', function () {
      expect(manba('2016-07-23').distance(manba('2015-07-23'), manba.YEAR)).to.equal(1);
    });

    it('manba distance manba.HOUR', function () {
      expect(manba('2016-07-23').distance(manba('2015-07-23'), manba.HOUR)).to.equal(8784);
    });

    it('manba distance manba.MINUTE', function () {
      expect(manba('2016-07-23').distance(manba('2015-07-23'), manba.MINUTE)).to.equal(527040);
    });

    it('manba distance manba.WEEK1', function () {
      expect(manba('2017-08-10').distance(manba('2017-08-06'), manba.WEEK, manba.MONDAY)).to.equal(1);
    });

    it('manba distance manba.WEEK2', function () {
      expect(manba('2017-08-10').distance(manba('2017-08-06'), manba.WEEK, manba.SUNDAY)).to.equal(0);
    });

    it('manba distance manba.WEEK3', function () {
      expect(manba('2017-07-01').distance(manba('2017-08-06'), manba.WEEK, manba.SUNDAY)).to.equal(-6);
    });

  });

  describe('manba iso', function () {
    it('本地ISO格式', function () {
      expect(manba('2016-07-23 12:12:12').toISOString()).to.equal("2016-07-23T12:12:12+08:00");
    });

    it('定制化ISO格式', function () {
      expect(manba('2016-07-23 12:12:12').toISOString(+7)).to.equal("2016-07-23T11:12:12+07:00");
    });

    it('UTCformat', function () {
      expect(manba('2016-07-23 07:00:00').UTCformat("YYYY-MM-DD")).to.equal("2016-07-22");
    });

  });
  
  describe('manba quarter', function () {

    it('quarter startOf', function () {
      expect(manba('2016-07-23 12:12:12').startOf(manba.QUARTER).format("f")).to.equal("2016-07-01 00:00:00");
    });

    it('quarter endOf', function () {
      expect(manba('2016-07-23 07:00:00').endOf(manba.QUARTER).format("f")).to.equal("2016-09-30 23:59:59");
    });

    it('quarter add', function () {
      expect(manba('2016-07-23 12:12:12').add(1, manba.QUARTER).format("f")).to.equal("2016-10-23 12:12:12");
    });

  });

  describe('manba config', function () {

    it('设定其他快捷格式化', function () {
      manba.config({
        formatString: {
          "r": "YYYY",
          "po": "MM"
        }
      });
      expect(manba("201412031223", "YYYYMMDDHHmm").format("r")).to.equal("2014");
      expect(manba("201412031223", "YYYYMMDDHHmm").format("po")).to.equal("12");
    });

    it('设定日期基准', function () {
      manba.config({
        now: "2016-10-09 00:00:00"
      });
      expect(manba().format()).to.equal("2016-10-09");
    });

  });



}());
// console.log(manba(1459235037).format());
// console.log(manba(1459235037000).format());
// console.log(manba([2016,11,23,4,3,5]).format("f"));
// console.log(manba([2015,12,3]).format());
// console.log(manba("2014-12-03").format("f"));
// console.log(manba("2014-12-03 12:34").format("f"));
// console.log(manba("2014-12-03 12:34:34").format("f"));
// console.log(manba("20141203").format("f"));
// console.log(manba("201412031223").format("f"));

// manba.config({
//     formatString: {
//         "r": "YYYY"
//     },
//     now:"2016-10-09"
// });

// console.log(manba());

// console.log(manba().startOf(manba.WEEK,manba.SUNDAY).format("ff"))
// console.log(manba('2016-07-23').distance(manba(),manba.DAY))

// console.log(manba().toString());
// console.log(manba().format());
// console.log(manba().format("l"));
// console.log(manba().format("ll"));
// console.log(manba().format("k"));
// console.log(manba().format("kk"));
// console.log(manba().format("kkk"));
// console.log(manba().format("f"));
// console.log(manba().format("ff"));
// console.log(manba().format("fff")); 
// console.log(manba().format("n"));
// console.log(manba().format("nn"));
// console.log(manba().format("r"));


// console.log(manba().year(2018).format());
// console.log(manba("2012-10-03 23:59:59").month(8).month());
// console.log(manba().isLeapYear());

// console.log(manba("2012-10-03 23:59:59").add(1,manba.DAY).format("ff"));
// console.log(manba("2012-10-03 23:59:59").add(-1,manba.DAY).format("ff"));

// console.log(manba("2012-10-03 23:59:59").add(26,manba.MONTH).format("ff"));
// console.log(manba("2012-10-03 23:59:59").add(-1,manba.YEAR).format("ff"));
// console.log(manba("2012-10-03 23:59:59").add(1,manba.MINUTE).format("ff"));

// console.log(manba().startOf(manba.DAY).format("ff"));
// console.log(manba("2012-10-03 23:59:59").startOf(manba.YEAR).format("ff"));
// console.log(manba("2012-10-03 23:59:59").startOf(manba.MONTH).format("ff"));
// console.log(manba().startOf(manba.HOUR).format("ff"));

// console.log(manba("2012-10-03 23:59:59").endOf(manba.YEAR).format("fff"));
// console.log(manba("2012-10-03 23:59:59").endOf(manba.MONTH).format("fff"));
// let m = manba(1391184000000);
// console.log(m.add(-3, manba.MONTH).format());
// console.log(manba("2016-12-02T20:58:02+08:00").toLocalString());
// console.log(global||window);
// console.log(manba())
// console.log(manba('2016-07-22'))

// console.log(manba("2012-10-03 23:59:59").startOf(manba.WEEK,manba.MONDAY).format("fff"))
// console.log(manba("2012-10-03 23:59:59").endOf(manba.WEEK,manba.MONDAY).format("fff"))
// console.log(manba().getWeekOfMonth(manba.MONDAY))
// console.log(manba().format("f"))
