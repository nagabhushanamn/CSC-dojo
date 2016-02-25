/**
 * http://usejsdoc.org/
 */

function f() {

	console.log('hello...');
	var name='Nag';

	setTimeout(function() {
		try {
			console.log('after timeout...');
			//throw new Error('ooops');
			console.log(name+" back to work..");
		} catch (e) {
			console.log('i caught ' + e.message);
		}
	}, 5000);

}
f();