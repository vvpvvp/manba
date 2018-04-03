
# manba
超级简洁的日期处理Util，比moment.js小很多。

[![npm package](https://img.shields.io/npm/v/manba.svg)](https://www.npmjs.org/package/manba)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/manba/build/manba.js?compression=gzip&label=gzip%20size:%20JS)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## website

[http://manba.ch-un.com](http://manba.ch-un.com)

## install
```sh
npm install manba
```
建议本地安装
```sh
npm install --save manba
```

## npm

[https://www.npmjs.com/package/manba](https://www.npmjs.com/package/manba)

## Api

### 配置

#### 定义简洁的格式化

```javascript
manba.config({
    formatString: {
        "r": "YYYY"
    },
})

manba().format("r") // 2017

```

#### 设定当前时间
设置前端与后端的时间差，这样前端也可以使用manba()获取当前时间。

```javascript
manba.config({
    now:"2016-07-11T18:42:34.453+08:00"
})

manba().format() // 2016-07-11
```

### init

初始化的时候，对月份做了修补。

`manba(String|Number|Date|Array|Manba)`

```javascript
let now = manba() // 定义当前时间的manba对象
let sevenDay = now.clone().add(7, manba.DAY) //定义七天后的日期
let twoDay = manba(now).add(2, manba.DAY) //定义两天后的日期
let month = now.startOf(manba.MONTH) //定义月初的日期

manba(1459235037).format() //秒 2016-03-29
manba(1459235037000).format() //毫秒 2016-03-29
manba([2016,12,23,4,3,5]).format("f") 
//月份自动补充，执行：new Date(2016,11,23,4,3,5) 2016-12-23 04:03:05
manba([2015,12,3]).format("f") 
//执行：new Date(2015,11,3) 2015-12-03
manba("2014-12-03").format("f") //2014-12-03 00:00:00
manba("2014-12-03 12:34").format("f") //2014-12-03 12:34:00
manba("2014-12-03 12:34:12").format("f") //2014-12-03 12:34:34
manba("20141203").format("f") //2014-12-03 00:00:00
manba("201412031223").format("f") //2014-12-03 12:23:00

```

### get
`month()`方法，对月份做了修补。

```javascript
manba().year() //2016
manba().year(2018).format() //2018-03-29
manba().month() //2016-03-29
manba().month(4).format() //2016-04-29
manba().minutes() //59
manba().minutes(34)
manba().time() //1459242450800
manba().time(123131312321).format() //1973-11-26
manba().date() //29
manba().date(4).format() //2016-03-04
```

### 格式化

#### 格式化日期转换标准
- YYYY/yyyy:年份
- M:月份
- MM:月份，个位补充0
- D/d:天数
- DD/dd:天数，个位补充0
- H/h:小时
- HH/hh:小时，个位补充0
- m:分钟
- mm:分钟，个位补充0
- S/s:秒数
- SS/ss:秒数，个位补充0
- w:星期，返回中文：['日', '一', '二', '三', '四', '五', '六']
- q:上下午，返回中文：['上午', '下午']

#### 简洁的格式化
- "l": "YYYY-MM-DD",
- "ll": "YYYY年MM月DD日",
- "k": "YYYY-MM-DD hh:mm",
- "kk": "YYYY年MM月DD日 hh点mm分",
- "kkk": "YYYY年MM月DD日 hh点mm分 q",
- "f": "YYYY-MM-DD hh:mm:ss",
- "ff": "YYYY年MM月DD日 hh点mm分ss秒",
- "fff": "YYYY年MM月DD日 hh点mm分ss秒 星期w",
- "n": "MM-DD",
- "nn": "MM月DD日",

```javascript
//各种format
manba() // Tue Mar 29 2016 16:52:56 GMT+0800 (CST)
manba().toString() // Tue Mar 29 2016 16:52:56 GMT+0800 (CST)
manba().format() // 2016-03-29
manba().format("l") // 2016-03-29
manba().format("ll") // 2016年03月29日
manba().format("k") // 2016-03-29 16:52
manba().format("kk") // 2016年03月29日 16点52分
manba().format("kkk") // 2016年03月29日 16点52分 下午
manba().format("f") // 2016-03-29 16:52:56
manba().format("ff") // 2016年03月29日 16点52分56秒
manba().format("fff") // 2016年03月29日 16点52分56秒 星期二
manba().format("n") // 03-29
manba().format("nn") // 03月29日
manba().format("YYYY") // 2016
```

### toString

`toString()`方法，输出本地的日期格式。

```javascript
manba().toString()
```

### isLeapYear

`isLeapYear()`方法，判断是否为闰年。

```javascript
manba().isLeapYear() //是否为闰年 true
```

### clone

`clone()`方法，可以复制一个manba对象。

```javascript
manba().clone() //复制manba对象，
```

### ISOString

`toISOString()`方法，获取带时区的格式化字符串(例：2016-12-02T20:58:02+08:00)。
可传递参数获取其他时区的格式化字符串。

```javascript

manba("2016-07-23 12:12:12").toISOString() //返回带时区的格式，2016-07-23T12:12:12+08:00
manba("2016-07-23 12:12:12").toISOString(+7) //返回UTC+7的日期，2016-07-23T11:12:12+07:00

```

### distance

`manba.distance(manba|String|Number|Date|Array,manba.TYPE)`

```javascript
manba("2012-09-21").distance("2012-09-20 23:59:59") 
//两个日期间相隔天数，纠正日期计算偏差 1

manba("2012-09-21").distance("2012-09-20 23:59:59",manba.DAY) 
//两个日期间相隔天数 1

manba("2012-09-21").distance("2012-08-20 23:59:59",manba.MONTH) 
//两个日期间相隔月数 1

manba("2012-09-21").distance("2011-09-20 23:59:59",manba.YEAR) 
//两个日期间相隔年数 1

manba('2017-07-01').distance(manba('2017-08-06'), manba.WEEK, manba.SUNDAY)
//两个日期间相隔星期数 -6

manba('2017-08-10').distance(manba('2017-08-06'), manba.WEEK, manba.SUNDAY)
//两个日期间相隔星期数 0

manba('2017-08-10').distance(manba('2017-08-06'), manba.WEEK, manba.MONDAY)
//两个日期间相隔星期数 1

manba('2016-07-23').distance(manba('2015-07-23'), manba.MINUTE)
//两个日期间相隔分钟 527040

manba('2016-07-23').distance(manba('2015-07-23'), manba.HOUR)
//两个日期间相隔小时数 8784

```
### add
`add`方法，对日期做加减法，只有add函数，如果需要减法，则传递负数。
`manba.add(Number,manba.TYPE)`

```javascript
manba("2012-10-03 23:59:59").add(1,manba.DAY).format("fff")
//2012年10月04日 23点59分59秒 星期四

manba("2012-10-03 23:59:59").add(-1,manba.DAY).format("fff")
//2012年10月02日 23点59分59秒 星期二

manba("2012-10-03 23:59:59").add(26,manba.MONTH).format("fff")
//2014年12月03日 23点59分59秒 星期三

manba("2012-10-03 23:59:59").add(-1,manba.YEAR).format("fff")
//2011年10月03日 23点59分59秒 星期一

manba("2012-10-03 23:59:59").add(1,manba.MINUTE).format("ff")
//2012年10月04日 00点00分59秒
```

### startOf
`startOf`方法，做一定规则的时间处理，并返回结果。
注：该处理并不修改原来的对象，请使用返回的对象处理。  
`manba.startOf(manba.TYPE)`

```javascript
manba("2012-10-03 23:59:59").startOf(manba.DAY).format("fff")
//2012年10月03日 00点00分00秒 星期三

manba("2012-10-03 23:59:59").startOf(manba.YEAR).format("fff")
//2012年01月01日 00点00分00秒 星期日

manba("2012-10-03 23:59:59").startOf(manba.MONTH).format("fff")
//2012年10月01日 00点00分00秒 星期一

manba("2012-10-03 23:59:59").startOf(manba.HOUR).format("fff")
//2012年10月03日 15点00分00秒 星期三

manba("2012-10-03 23:59:59").startOf(manba.WEEK).format("fff")
//2012年09月30日 00点00分00秒 星期日

manba("2012-10-03 23:59:59").startOf(manba.WEEK,manba.MONDAY).format("fff")
//2012年10月01日 00点00分00秒 星期一

manba('2016-07-23 12:12:12').startOf(manba.QUARTER).format("f")
//2016-07-01 00:00:00
```


### endOf
`endOf`方法，做一定规则的时间处理，并返回结果。
注：该处理并不修改原来的对象，请使用返回的对象处理。  
`manba.endOf(manba.TYPE)`

```javascript
manba("2012-10-03 23:59:59").endOf(manba.DAY).format("ff")
//2012年10月03日 23点59分59秒

manba("2012-10-03 23:59:59").endOf(manba.YEAR).format()
//2012-12-31

manba("2012-10-03 23:59:59").endOf(manba.MONTH).format()
//2012-10-31

manba("2012-10-03 23:59:59").endOf(manba.WEEK).format("fff")
//2012年10月06日 23点59分59秒 星期六

manba("2012-10-03 23:59:59").endOf(manba.WEEK,manba.MONDAY).format("fff")
//2012年10月07日 23点59分59秒 星期日

manba('2016-07-23 12:12:12').endOf(manba.QUARTER).format("f")
//2016-09-30 23:59:59
```

### week
```javascript
//获取当月的星期数
//manba.SUNDAY 星期日开始
//默认星期日
manba().getWeekOfMonth()
manba().getWeekOfMonth(manba.MONDAY)

//获取当年的星期数
//manba.MONDAY 星期一开始
manba().getWeekOfYear(manba.MONDAY)
```

