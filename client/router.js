var Router = require('ampersand-router');
var HomePage = require('./pages/home');


module.exports = Router.extend({

	//set up routes here
	routes: {
		'':'home'
	},

	//define your routing functions here:
	home:function(){
		this.trigger('page', new HomePage());
	}
	
});
