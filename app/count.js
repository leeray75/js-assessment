if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
	
  return {
    count : function (start, end) {
		var count = start;
		var timer = setInterval(function(){
			console.log(count);
			count++;
			if(count>end){
				clearTimer();
			}
		},100);
		function clearTimer(){
			clearInterval(timer);
		}
		return{
			cancel: function(){
				clearTimer();	
			}
		}


    }
  };
});