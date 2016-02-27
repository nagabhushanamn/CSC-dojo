/**
 * http://usejsdoc.org/
 */

define([ 'dojo/topic' ],

function(topic) {

	// Publisher ( Trainer )

	var trainer = {
		doTeach : function() {

			//
			setTimeout(function() {
				console.log('trainer publishing js-topic');
				topic.publish('js',{data:'JS Notes'});
			}, 5000);
			setTimeout(function() {
				console.log('trainer publishing dojo-topic');
				topic.publish('dojo',{data:'DOJO Notes'});
			}, 10000);

		}
	};

	trainer.doTeach();

	
	
	
	// Subscriber(s) ( Employees )
	var emp1 = {
		listen : function() {

			topic.subscribe('js', function(e) {
				console.log('emp-1 : learning -'+e.data);
			});
			topic.subscribe('dojo', function(e) {
				console.log('emp-1 : learning -'+e.data);
			});

		}
	};
	emp1.listen();

	var emp2 = {
		listen : function() {

			topic.subscribe('js', function(e) {
				console.log('emp-2 : learning -'+e.data);
			});

		}
	};
	emp2.listen();

});