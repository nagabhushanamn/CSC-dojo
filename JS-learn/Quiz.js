/**
 * http://usejsdoc.org/
 */

var trainer = {
	name : 'Nag',
	doTeach : function() {
		console.log(this.name + " teaching JS");
		var that = this;
		function learn() {
			console.log(this.name + ' learning JS from ' + that.name);
		}
		var emp = {
			name : 'CSC'
		};
		learn.call(emp);
	}
};

trainer.doTeach();

//var newTrainer={name:'kishore'};
//trainer.doTeach.call(newTrainer);