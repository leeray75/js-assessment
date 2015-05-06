if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
		/* defining a variable with 'var' will keep it local */
      var myObject = {
        name : 'Jory'
      };

      return myObject;
    },

    functions : function(flag) {	
	/* Because of hoisting, the second getValue will be used 
      if (flag) {
        function getValue() { return 'a'; }
      } else {
        function getValue() { return 'b'; }
      }
	*/
		function getValue(){
			return flag ? 'a' : 'b';	
		}
      return getValue();
    },

    parseInt : function(num) {
		/* 
		http://www.2ality.com/2013/01/parseint.html
		If radix is missing then it is assumed to be 10 except if value begins with '0x' or '0X', in which case radix is set to 16 (hexadecimal). */
      return parseInt(num,10);
    },

    identity : function(val1, val2) {
		return val1 === val2;
    }
  };
});
