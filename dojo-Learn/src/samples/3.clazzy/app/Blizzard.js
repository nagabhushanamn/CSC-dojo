/**
 * http://usejsdoc.org/
 */

define([ 'dojo'], function(dojo) {
	

	var VannilaSoftServ = dojo.declare([], {
		constructor : function() {
			console.log('Vanilla Soft-Serv');
		}
	});
	

	var CookieDoughMixin = dojo.declare([], {
		chunk:'medium',
		constructor : function() {
			console.log('Cooie-Dough');
		}
	});
	
	var OreoMixin = dojo.declare([], {
		type:'plain',
		constructor : function() {
			console.log('Oreo-Mixin');
		}
	});
	

	var Blizzard = dojo.declare([VannilaSoftServ,CookieDoughMixin,OreoMixin], {
		constructor : function() {
			console.log('Blizzard...with VannilaSoftServ + '+this.chunk +" sized CookieDough + " +this.type +" Oreo");
		}
	});

	return Blizzard;

});