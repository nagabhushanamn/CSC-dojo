/**
 * http://usejsdoc.org/
 */

define([ './counter/HitCounter' ,'dojo/dom'], function(HitCounter,dom) {

	var c1 = new HitCounter();
	c1.placeAt(dom.byId('counterBox'));
	

	// var c2 = new HitCounter();
	// c2.placeAt(dom.byId('counterBox'));
	

	 setTimeout(function() {
	 c1.destroy();
	 }, 5000);

});