if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		/* Arrays have a indexOf method */
		return arr.indexOf(item);
    },

    sum : function(arr) {
		/* Loop through the Array and add their values, assuming the array contains only numbers. */
		var sum =0;
		for(var i=0;i<arr.length;i++){
			sum+=arr[i];
		}
		return sum;
    },

    remove : function(arr, item) {
		/* Create a new array and add the itmes that aren't the item argument */
		var newArray = [];
		for(var i=0;i<arr.length;i++){
			if(arr[i]!==item){
				newArray.push(arr[i]);
			}
		}
		return newArray;
		
    },

    removeWithoutCopy : function(arr, item) {
		/* Find a indexOf the item in the array, loop through it using the array's splice method to remove the index of the item until their aren't any more index of the item */
		var index = arr.indexOf(item);
		while(index>-1){
			arr.splice(index,1);
			index = arr.indexOf(item);	
		}
		return arr;
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		arr.pop();
		return arr;
    },

    prepend : function(arr, item) {
		arr.unshift(item);
		return arr;
    },

    curtail : function(arr) {
		arr.shift();
		return arr;
    },

    concat : function(arr1, arr2) {
		return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
		arr.splice(index,0,item);
		return arr;

    },

    count : function(arr, item) {
		var count = 0;
		for(var i=0; i<arr.length; i++){
			if(arr[i]===item){
				count++;	
			}
		}
		return count;
    },

    duplicates : function(arr) {
		var map = {};
		var dupes = [];
		for(var i=0; i<arr.length; i++){
			var val = arr[i];
			if(map.hasOwnProperty(val)){
				map[val]++;	
			}
			else{
				map[val] = 1;	
			}
		}
		for(var key in map){
			if(map[key]>1){
				dupes.push(key);	
			}
		}
		return dupes;
		
    },

    square : function(arr) {
		var squares = [];
		for(var i=0; i<arr.length; i++){
			squares[i] = (arr[i]*arr[i]);
		}		
		return squares;
    },

    findAllOccurrences : function(arr, target) {
		var results = [];
		for(var i=0; i<arr.length; i++){
			if(arr[i]===target){
				results.push(i);	
			}
		}		
		return results;
    }
  };
});
