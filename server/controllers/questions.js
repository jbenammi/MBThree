var Question = mongoose.model('questions');
var Answer = mongoose.model('answers');
var User = mongoose.model('users')

module.exports = {
	create: function(request, response){
		var qInfo = request.body
		var newQuestion = new Question(qInfo);
		newQuestion._answers = []
		newQuestion.save(function(err){
			if(err){
				response.json({errors: err});
			}
			else{
				response.json({success: true});
			}
		})
	},
	showAll: function(request, response){
		Question.find({}).populate('_answers').exec(function(err, questions){
			if(err){
				response.json({errors: err});
			}
			else{
				response.json(questions)
			}
		})
	},

	showOne: function(request, response){
		Question.findOne({_id: request.params.id}).populate('_answers').exec(function(err, question){
			if(err){
				response.json({errors: err});
			}
			else{
				response.json(question);
			}
		})
	}
}