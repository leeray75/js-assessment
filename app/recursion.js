if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
		var files = [];
		var allow = (dirName==null || data.dir==dirName);	
		for(var i=0;i<data.files.length;i++){
			if(typeof data.files[i] === 'string' && allow){
				files.push(data.files[i]);
			}
			else if(typeof data.files[i]=== 'object'){
				var dir = allow ? data.files[i].dir : dirName;
				var newArr = this.listFiles(data.files[i],dir);
				files = files.concat(newArr);	
			}
		}
		return files;		
    },

    permute: function(arr) {

    },

    fibonacci: function(n) {
		var arr = [0,1];
		for(var i = 2; i<=n; i++){
			arr.push(arr[arr.length-2]+arr[arr.length-1]);	
		}
		return arr[n];
    },

    validParentheses: function(n) {

    }
  };
});
