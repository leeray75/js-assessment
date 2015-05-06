if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
	
  return {
    count : function (start, end) {
		var timer;
		for(var i=start;i<=end;i++){
			(function(count){
			timer = setTimeout(function(){
				console.log(count);	
				},count*100);
			})(i);
		}
		return{
			cancel: function(){
				clearTimeout(timer);	
			}
		}


    }
  };
});