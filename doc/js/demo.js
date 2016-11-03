(function(window,$) {
	$(function(){
		var m = moment();
		var code1 = 
			"moment().format('YYYY/MM/DD, h:mm:ss q');     // "+m.format('YYYY/MM/DD, h:mm:ss q')+"\n"+
			"moment().format('kk');                        // "+m.format('kk')+"\n"+
			"moment().format('星期w');                      // "+m.format('星期w')+"\n"+
			"moment().format('M月 D日 YY');                 // "+m.format('M月 D日 YY')+"\n"+
			"moment().format();                            // "+m.format();

		var code2 = 
			"moment().add(2,moment.DAY).format('kk');       // "+moment().add(2,moment.DAY).format('kk')+"\n"+
			"moment().add(-2,moment.YEAR).format('kk');     // "+moment().add(-2,moment.YEAR).format('kk')+"\n"+
			"moment().add(4,moment.MONTH).format('kk');     // "+moment().add(4,moment.MONTH).format('kk')+"\n"+
			"moment().startOf(moment.DAY).format('kk');     // "+moment().startOf(moment.DAY).format('kk')+"\n"+
			"moment().endOf(moment.YEAR).format('kk');      // "+moment().endOf(moment.YEAR).format('kk')+"\n"+
			"moment().add(-9,moment.MINUTE).format('kk');   // "+moment().add(-9,moment.MINUTE).format('kk');

		var code3 = 
			"moment().distance('2013-03-23',moment.DAY);    // "+m.distance('2013-03-23',moment.DAY)+"\n"+
			"moment().distance('2013-03-23',moment.YEAR);   // "+m.distance('2013-03-23',moment.YEAR)+"\n"+
			"moment().distance('2013-03-23',moment.MONTH);  // "+m.distance('2013-03-23',moment.MONTH)+"\n"+
			"moment('2013-03-23').distance(moment.NOW,moment.MONTH);// "+moment('2013-03-23').distance(moment.NOW,moment.MONTH);

		var code4 = "npm install momentjs                            #npm\ngit clone https://github.com/vvpvvp/momentjs    #git"
		$("#code1").text(code1);
		$("#code2").text(code2);
		$("#code3").text(code3);
		$("#code4").text(code4);
		$('.codes code').map(function() {
          	Prism.highlightElement(this);
        });
	});
})(window,$)