if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
		/* use apply to pass a array as arguments */
		return fn.apply(null,arr);
    },

    speak : function(fn, obj) {
		/* use apply or call to change the context of this inside the function */
		return fn.apply(obj);
    },

    functionFunction : function(str) {
		/* using closure, the 'str' is still in the lexical scope of the return function */
		return function(str2){
			return str+", "+str2;	
		}
    },
    makeClosures : function(arr, fn) {
		var funcs = [];
		for(var i=0; i<arr.length; i++){
			(function(num){
				var f = function(){
					return fn(num);
				};
				funcs.push(f);
			})(arr[i]);
		};
		return funcs;

    },
    partial : function(fn, str1, str2) {
		return function(punctuation){
			return fn(str1,str2,punctuation);	
		}
    },

    useArguments : function() {
		var sum = 0;
		for(var i=0; i<arguments.length; i++){
			sum+=arguments[i];	
		}
		return sum;
    },

    callIt : function(fn) {
		var args = [];
		for(var i=1; i<arguments.length; i++)
		{
			args.push(arguments[i]);	
		}
		return fn.apply(null,args);
    },

    partialUsingArguments : function(fn) {
		var args = [];
		for(var i=1; i<arguments.length; i++)
		{
			args.push(arguments[i]);	
		}
		return function(){
			for(var i=0; i<arguments.length; i++)
			{
				args.push(arguments[i]);	
			}
			return fn.apply(null,args);
		};
    },

    curryIt : function(fn) {

    }
  };
});
