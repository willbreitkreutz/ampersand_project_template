var domready = require('domready');
var MainView = require('./views/main');
var Router = require('./router');
// require model collections

// require app-state model <- make sure you build out the model
var Me = require('/models/me');

window.app = {
	init:function(){
		var self = this;

		this.router = new Router();
		this.me = window.me = new Me();

		domready(function(){
			self.view = new MainView({
				el: document.body,
				model: self.me
			});

			self.router.history.start({pushState:true});
		});
	}
}
