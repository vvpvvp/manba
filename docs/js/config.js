(function(window,$) {
	$(function(){
		var m = manba();
		var code1 = 
			"manba().format('YYYY/MM/DD, h:mm:ss q');     // "+m.format('YYYY/MM/DD, h:mm:ss q')+"\n"+
			"manba().format('kk');                        // "+m.format('kk')+"\n"+
			"manba().format('星期w');                      // "+m.format('星期w')+"\n"+
			"manba().format('M月 D日 YY');                 // "+m.format('M月 D日 YY')+"\n"+
			"manba().format();                            // "+m.format();

		var code2 = 
			"manba().add(2,manba.DAY).format('kk');       // "+manba().add(2,manba.DAY).format('kk')+"\n"+
			"manba().add(-2,manba.YEAR).format('kk');     // "+manba().add(-2,manba.YEAR).format('kk')+"\n"+
			"manba().add(4,manba.MONTH).format('kk');     // "+manba().add(4,manba.MONTH).format('kk')+"\n"+
			"manba().startOf(manba.DAY).format('kk');     // "+manba().startOf(manba.DAY).format('kk')+"\n"+
			"manba().endOf(manba.YEAR).format('kk');      // "+manba().endOf(manba.YEAR).format('kk')+"\n"+
			"manba().add(-9,manba.MINUTE).format('kk');   // "+manba().add(-9,manba.MINUTE).format('kk');

		var code3 = 
			"manba().distance('2013-03-23',manba.DAY);    // "+m.distance('2013-03-23',manba.DAY)+"\n"+
			"manba().distance('2013-03-23',manba.YEAR);   // "+m.distance('2013-03-23',manba.YEAR)+"\n"+
			"manba().distance('2013-03-23',manba.MONTH);  // "+m.distance('2013-03-23',manba.MONTH)+"\n"+
			"manba('2013-03-23').distance(manba.NOW,manba.MONTH);// "+manba('2013-03-23').distance(manba.NOW,manba.MONTH);

		var code4 = "npm install manba                            #npm\ngit clone https://github.com/vvpvvp/manba    #git"
		$("#code1").text(code1);
		$("#code2").text(code2);
		$("#code3").text(code3);
		$("#code4").text(code4);
		$('.codes code').map(function() {
          	Prism.highlightElement(this);
        });
	});
})(window,$)