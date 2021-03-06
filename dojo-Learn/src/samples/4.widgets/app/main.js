/**
 * http://usejsdoc.org/
 */

define([ './counter/HitCounter',
         'dojo/dom' ,
         'dojo/on',
         'dojo/parser' ,
         'dijit/registry',
         'dojo/ready',
         'dojo/aspect',
         './loan/LoanInput',
         'dojo/domReady!'],
         
	    function(HitCounter, dom,on,parser,registry,ready,aspect) {
			
		
			// Programmatic widget usage
			//----------------------------------------------
			
			// var c1 = new HitCounter({count:100});
			// c1.placeAt(dom.byId('counterBox'));
			//	
			//
			// var c2 = new HitCounter();
			// //c2.set('count',200);
			// c2.placeAt(dom.byId('counterBox'));
		
			// setTimeout(function() {
			// console.log(c1.get('count'));
			// }, 5000);
			//	 
			// var i=0;
			// setInterval(function() {
			// i++;
			// c2.set('count',i);
			// }, 1000);
			
			
			// Declarative widget usage
			//--------------------------------------------
			
			//parser.parse();
			
			//setTimeout(function() {
				//var c=registry.byId('c1').get('count');
				//console.log(c);
				//registry.byId('c1').destroy();
			//}, 10000);
			
	       //--------------------------------------------
	
			ready(function(){
				var loanWidget=registry.byId('loan');
				aspect.after(loanWidget,'calculate',function(){
					dom.byId('mpSpan').innerHTML=loanWidget.monthlyPayment.toFixed(2);
				});
			});
	
		
	});