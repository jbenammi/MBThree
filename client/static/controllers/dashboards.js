myApp.controller('dashboardsController', function(userFactory, questionFactory, $location){
	var self = this;
	self.user_session = {}
	self.chkuser = {};
	self.questions = []
	
	userFactory.chk_session(function(factoryUser_Session){
		self.user_session = factoryUser_Session;
		if(!self.user_session.success){
			$location.url('/');
		}
	});

	questionFactory.showAll(function(factoryQuestions){
		self.questions = factoryQuestions;
	})

})