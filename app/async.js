if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
		/* create Promise object. */
		return new Promise(
			function(resolve,reject){ 	
				if(value) resolve(value);
				else reject(value);
			});
    },

    manipulateRemoteData : function(url) {

    }
  };
});
