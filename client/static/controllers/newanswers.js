myApp.controller('newAnswersController', function(userFactory, questionFactory, $location, $routeParams){
	var self = this;
	self.question = {};
	self.user_session = {};
	self.q_id = $routeParams;
	self.newAnswer = {};

	userFactory.chk_session(function(factoryUser_Session){
		self.user_session = factoryUser_Session;
		if(!self.user_session.success){
			$location.url('/');
		}
	});

	questionFactory.showOne(self.q_id, function(factoryQuestion){
		self.question = factoryQuestion;
	});

	self.create = function(){
		self.newAnswer.user = self.user_session.name
		questionFactory.createAnswer(self.q_id.id, self.newAnswer, function(){
			$location.url('/dashboard');
		})

	}
})