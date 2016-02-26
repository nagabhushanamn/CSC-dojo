/**
 * http://usejsdoc.org/
 */

define(['dojo'], function(dojo) {
	
	var A=dojo.declare([],{
		m1:function(){this.inherited(arguments);console.log('A-old');},
		m2:function(){this.inherited(arguments);console.log('A-old');},
	});
	var B=dojo.declare([],{
		m2:function(){this.inherited(arguments);console.log('B-old');},
		m3:function(){this.inherited(arguments);console.log('B-old');}
	});
	var C=dojo.declare([],{
		m3:function(){this.inherited(arguments);console.log('C-old');},
		m4:function(){this.inherited(arguments);console.log('C-old');}
	});
	
	var ABC=dojo.declare([A,B,C],{}); // class
	
	var abc=new ABC();   // instance
	//abc.m1();  // A-old
	//abc.m2();
	//abc.m3();
	//abc.m4();
	
	//-----------------------
	
	A.extend({
		m1:function(){this.inherited(arguments);console.log('A-new');},
		m2:function(){this.inherited(arguments);console.log('A-new');},
	});
	B.extend({
		m2:function(){this.inherited(arguments);console.log('B-new');},
		m3:function(){this.inherited(arguments);console.log('B-new');}
	});
	C.extend({
		m3:function(){this.inherited(arguments);console.log('C-new');},
		m4:function(){this.inherited(arguments);console.log('C-new');}
	});
	
	
	//abc.m1();
	//abc.m2();
	//abc.m3();
	//abc.m4();
	
});