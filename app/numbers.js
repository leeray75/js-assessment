if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
		var n = new Number(num);
		var s = n.toString(2);
		var bits = s.split("").reverse().join("");		
		return parseInt(bits.charAt(bit-1));
    },

    base10: function(str) {

    },

    convertToBinary: function(num) {
		/* Got solution from: http://stackoverflow.com/questions/24337260/javascript-a-byte-is-suppose-to-be-8-bits */
		var n = new Number(num);
		var s = ("000000000"+n.toString(2)).substr(-8);
		return s;
    },

    multiply: function(a, b) {
    }
  };
});

