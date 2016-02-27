/**
 * http://usejsdoc.org/
 */

define(["dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dijit/form/CurrencyTextBox",
        "dijit/form/NumberSpinner",
        "dijit/form/ComboBox",
        "dojo/text!./template/LoanInput.html",
        'dojo/Evented',
        "dojo/topic"],
        function(_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, CurrencyTextBox, NumberSpinner, ComboBox,template,Evented,topic) {

		dojo.declare("app.loan.LoanInput", [_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin,Evented], {

		// Path to the template
		templateString : template,
		
		principal : 0,
		interestPaid : 0,
		monthlyPayment : 0,

		// Override this method to perform custom behavior during dijit construction.
		// Common operations for constructor:
		// 1) Initialize non-primitive types (i.e. objects and arrays)
		// 2) Add additional properties needed by succeeding lifecycle methods
		constructor : function() {

		},

		// When this method is called, all variables inherited from superclasses are 'mixed in'.
		// Common operations for postMixInProperties
		// 1) Modify or assign values for widget property variables defined in the template HTML file
		postMixInProperties : function() {
		},

		// postCreate() is called after buildRendering().  This is useful to override when
		// you need to access and/or manipulate DOM nodes included with your widget.
		// DOM nodes and widgets with the dojoAttachPoint attribute specified can now be directly
		// accessed as fields on "this".
		// Common operations for postCreate
		// 1) Access and manipulate DOM nodes created in buildRendering()
		// 2) Add new DOM nodes or widgets
		postCreate : function() {
		},

		//this function will perform the calculations for our loan payment
		calculate : function() {
			
			this.principal = this.amount.attr('value');
			
			if (this.principal == NaN) {
				this.monthlyPayment = 0;
				this.principal = 0;
				this.interestPaid = 0;
			} else {
				
				var interestRate = this.rate.attr('value') / 1200;
				var termInMonths = this.term.attr('value') * 12;

				this.monthlyPayment = Math.pow(1 + interestRate, termInMonths) - 1;
				this.monthlyPayment = interestRate + (interestRate / this.monthlyPayment);
				this.monthlyPayment = this.monthlyPayment * this.principal;

				this.interestPaid = (this.monthlyPayment * termInMonths) - this.principal;
			}
			
			console.log(this.monthlyPayment.toFixed(2));
			
			// way-1
			
			this.emit('loan-event',this.monthlyPayment.toFixed(2));
			
			// way-2
			// topic.publish('loan-topic',this.monthlyPayment.toFixed(2));
			
			
		}
	});

});