/**
 * http://usejsdoc.org/
 */

define([ './counter/HitCounter' ,'dojo/dom'], function(HitCounter,dom) {

	var c1 = new HitCounter({count:100});
	c1.placeAt(dom.byId('counterBox'));
	

	 var c2 = new HitCounter();
	 //c2.set('count',200);
	 c2.placeAt(dom.byId('counterBox'));
	

	 setTimeout(function() {
		 console.log(c1.get('count'));
	 }, 5000);
	 
	 var i=0;
	 setInterval(function() {
	 	i++;
	 	c2.set('count',i);
	 }, 1000);

	 
});