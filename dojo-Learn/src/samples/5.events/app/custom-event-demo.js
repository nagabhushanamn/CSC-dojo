/**
 * http://usejsdoc.org/
 */

define([ 'dojo', 'dojo/Evented', 'dojo/on' ], function(dojo, Evented, on) {

	var Door = dojo.declare([ Evented ], {
		open : function() {
			console.log('door opened...');
			this.emit('door-open',{doorNum:4});
		},
		close : function() {
			console.log('door closed..');
			this.emit('door-close');
		}
	});

	var door = new Door();

	setTimeout(function() {
		door.open();
	}, 5000);

	setTimeout(function() {
		door.close();
	}, 10000);

	// -------------------------------------------------

	var light = {
		setup : function() {
			on(door, 'door-open', function(e) {
				console.log('Light ON>>>>'+e.doorNum);
			});
			on(door, 'door-close', function() {
				console.log('Light OFF<<<');
			});
		}
	};
	light.setup();

	var AC = {
		setup : function() {
			on(door, 'door-open', function() {
				console.log('AC ON>>>>');
			});
			on(door, 'door-close', function() {
				console.log('AC OFF<<<');
			});
		}
	};
	AC.setup();

});