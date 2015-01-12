var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../templates');


module.exports = View.extend({
	//properties
	template: templates.body,
	autoRender: true,
	events:{
		'click a[href]': 'handleLinkClick'
	},
	bindings:{

	},
	//methods
	initialize:function(){
		this.listenTo(app.router, 'page', this.handleNewPage);
	},
	render:function(){
		this.renderWithTemplate(this);
		this.pages = new ViewSwitcher(this.queryByHook('page-container'));
	},
	handleNewPage:function(page){
		this.pages.set(page);
	},
	handleLinkClick:function(e){
		var aTag = e.target;
		var isLocal = aTag.host === window.location.host;

		if(isLocal && !i.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey){
			e.preventDefault();
			app.router.history.navigate(aTag.pathname, {trigger: true});
		}
	}
});
