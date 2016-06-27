var Users = require('../controllers/users.js');
var Questions = require('../controllers/questions.js');
var Answers = require('../controllers/answers.js')
module.exports = function(){

	app.post('/users', function(request, response){
		Users.loginreg(request, response);
	});

	app.get('/questions', function(request, response){
		Questions.showAll(request, response);
	});

	app.post('/questions', function(request, response){
		Questions.create(request, response);
	});

	app.get('/questions/:id', function(request, response){
		Questions.showOne(request, response);
	});

	app.post('/answers/:questionId', function(request, response){
		Answers.create(request, response);
	});

	app.post('/like/:id', function(request, response){
		Answers.like(request, response);
	});

}