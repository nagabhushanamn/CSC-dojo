/**
 * http://usejsdoc.org/
 */

define([ 'dojo/dom',
         'dojo/on',
         'dojo/query',
         'dojo/_base/lang',
         'dojo/dom-construct' ], 
         
         function(dom,
        		  on,
        		  query,
        		  lang,
        		  domConstruct) {

	
			//	var b1=dom.byId('b1');
			//	var b2=dom.byId('b2');
			
			//	on(b1,'click,mouseover',function(event){
			//		console.log('on '+event.target.id+" "+event.type +" event emitted");
			//	});
			//	
			
		
			//-------------------------------------------
			
			//	var i=0;
			//	var handler=on(b1,'click',function(event){
			//		console.log('on '+event.target.id+" "+event.type +" event emitted");
			//		i++;
			//		if(i===5){
			//			handler.remove();
			//		}
			//	});
			
			//-------------------------------------------
			
			//	var tnr={
			//			tnrName:'Nag',
			//			doTeach:function(){
			//				console.log(this.tnrName+" teaching DOJO");
			//			}
			//	};
			//	
			//	//on(b2,'click',tnr.doTeach.bind(tnr));
			//	on(b2,'click',lang.hitch(tnr, "doTeach"));
			//	
			
			//-------------------------------------------
			
			
			//	
			//	query('button.odd').on('click',function(event){
			//		console.log('odd btn clicked....'+event.target.id);
			//	});
			//	query('button.even').on('click',function(event){
			//		console.log('even btn clicked....'+event.target.id);
			//	});
			
			
			//-------------------------------------------
			
			// Event Delegation ( adding event-listeners for the elements which are get placed in future )
			
				var box2=dom.byId('box2')
				
				on(box2,'.hit:click',function(event){
					console.log('Hit btn handler...');
				});
				
				
				setTimeout(function() {
					var btn=domConstruct.create('button',{innerHTML:'New Hit',class:"hit btn btn-danger"});
					box2.appendChild(btn);
				}, 10000);
			
			
			//-------------------------------------------------------------------
			
			//	var box1=dom.byId('box1');
			//	var b1=dom.byId('b1');
			//	
			//	
			//	on(box1,'click',function(event){
			//		console.log("Box Handler :"+event.type+" on "+event.target.id);
			//	});
			//	
			//	on(b1,'click',function(event){
			//		console.log("Btn Handler :"+event.type+" on "+event.target.id);
			//		event.stopPropagation();
			//	});
			
			
			//-----------------------------------------------------------------------
			
			// pausable events
			
			//	
			//	var handler=on.pausable(dom.byId('play'),'click',function(){
			//		console.log('playing...');
			//	});
			//	
			//	on(dom.byId('pause'),'click',function(){
			//		handler.pause();
			//	});
			//	on(dom.byId('resume'),'click',function(){
			//		handler.resume();
			//	});
			
			//--------------------------------------------------------------
			
			//	on.once(dom.byId('once'),'click',function(){
			//		console.log('once....');
			//	});
		
			//--------------------------------------------------------------
			//		
			// var tnr=dom.byId('tnr');
			// var emp=dom.byId('emp');
			//			
			//			
			// on(tnr,'click',function(){
			// console.log('tnr click handler');
			// on.emit(emp,'click',{bubbles:true}); //
			// });
			//			
			// on(emp,'click',function(){
			// console.log('emp click handler');
			// });
			//		
			
	
			//=====================================================
	
	
	
			
			
		});