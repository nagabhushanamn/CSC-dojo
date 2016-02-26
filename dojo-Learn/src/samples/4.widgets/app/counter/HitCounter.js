/**
 * http://usejsdoc.org/
 */

define([ 'dojo',
         'dijit/_WidgetBase',
         'dojo/dom-construct',
         'dojo/on'],
         
function(dojo,_WidgetBase,domConstruct,on) {

	var HitCounter = dojo.declare([_WidgetBase], {
		
		_count:0,
		btn:null,
		
		// Init-phase
		constructor:function(){
			console.log('::constructor');
		},
		postMixInProperties:function(){
			console.log('::postMixInProperties');
			this._i=10;
		},
		
		buildRendering:function(){
			// construct UI
			console.log('::buildRendering');
			this.btn=domConstruct.create('button',{innerHTML:'Hit Me',class:'btn btn-primary'});
			
			this.domNode=this.btn;   // UI
		},
		postCreate:function(){
			// final touch-up work to widget , before we place in page
			// e.g binding event-listeners
			console.log('::postCreate');
			
			this.own(
					on(this.btn,'click',this.doCount.bind(this))		
			);
			
		},
		// Use-phase
		doCount:function(){
			console.log("::doCount");
			this._count++;
			//console.log('count:'+this._count);
			this.btn.innerHTML=this._count;
		},
		// Destroy-phase
		destroy:function(){
			console.log('::destroy');
			this.inherited(arguments);
		}
	});

	return HitCounter;

});