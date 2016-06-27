myApp.controller('newQuestionsController', function(questionFactory, userFactory, $location){
	var self = this;
	self.newQuestion = {};
	self.user_session = {};

	userFactory.chk_session(function(factoryUser_Session){
		self.user_session = factoryUser_Session;
		if(!self.user_session.success){
			$location.url('/');
		}
	});

	self.create = function(){
		questionFactory.create(self.newQuestion, function(){
			$location.url('/dashboard')
		})
	}
})