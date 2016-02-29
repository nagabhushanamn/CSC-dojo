/**
 * http://usejsdoc.org/
 */
define([ 'doh', 'app/HelloDialog' ], function(doh, HelloDialog) {

	var dialog = new HelloDialog();

	doh.register('app.HelloDialog', [

	function testTitle(t) {
		t.is(dialog.get('title'), "hello");
	}

	]);

});