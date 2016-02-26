/**
 * http://usejsdoc.org/
 */

define([ 'dojo', 
         'dijit/_WidgetBase',
         'dijit/_TemplatedMixin',
		 'dojo/dom-construct',
		 'dojo/on',
		 'dojo/text!./template/HitCounter.html' ],

		function(dojo, _WidgetBase, _TemplatedMixin, domConstruct, on, template) {

			var HitCounter = dojo.declare([ _WidgetBase, _TemplatedMixin ], {

				_count : 0,
				// btn:null,
				templateString : template,
				// Init-phase
				constructor : function() {
					console.log('::constructor');
				},
				postMixInProperties : function() {
					console.log('::postMixInProperties');
				},
				
				// buildRendering:function(){
				// // construct UI
				// console.log('::buildRendering');
				// this.btn=domConstruct.create('button',{innerHTML:'HitMe',class:'btn btn-primary'});
				// this.domNode=this.btn; // UI
				// },
				
				_setCountAttr:function(count){
					console.log('::set count');
					if(count){
						this._count=count;
						this.countSpan.innerHTML=this._count;
					}
				},
				_getCountAttr:function(count){
					console.log('::get count');
					return this._count;
				},
				
				postCreate : function() {
					// final touch-up work to widget , before we place in page
					// e.g binding event-listeners
					console.log('::postCreate');
					this.own(on(this.btn, 'click', this.doCount.bind(this)));

				},
				// Use-phase
				doCount : function() {
					console.log("::doCount");
					this._count++;
					// console.log('count:'+this._count);
					// this.btn.innerHTML=this._count;
					//this.countSpan.innerHTML = this._count;
					this.set('count',this._count);
				},
				// Destroy-phase
				destroy : function() {
					console.log('::destroy');
					this.inherited(arguments);
				}
				
			});

			return HitCounter;
			

		});