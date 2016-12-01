Template.Menu.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('publicRecipes');
	});
});

Template.Menu.helpers({
	recipes: ()=> {
		return Recipes.find({inMenu:true}, {sort: {createdAt: -1}})
	}
});