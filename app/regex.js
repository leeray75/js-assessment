if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		/* Solution from Stackoverflow: http://stackoverflow.com/questions/3180354/regex-check-if-string-contains-at-least-one-digit */
		return /\d/.test(str);
    },

    containsRepeatingLetter : function(str) {

    },

    endsWithVowel : function(str) {

    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
