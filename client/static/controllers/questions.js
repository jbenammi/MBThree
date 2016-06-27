myApp.controller('questionsController', function(questionFactory, userFactory, $location, $routeParams){
	var self = this;
	self.question = {};
	self.user_session = {};
	self.q_id = $routeParams;

	userFactory.chk_session(function(factoryUser_Session){
		self.user_session = factoryUser_Session;
		if(!self.user_session.success){
			$location.url('/');
		}
	});

	questionFactory.showOne(self.q_id, function(factoryQuestion){
		self.question = factoryQuestion;
	})

	self.create = function(){
		questionFactory.create(self.newQuestion, function(){
			$location.url('/dashboard')
		})
	};

	self.like = function(a_id){
		questionFactory.like(a_id, function(){
			questionFactory.showOne(self.q_id, function(factoryQuestion){
				self.question = factoryQuestion;
			})
		})
	}

})