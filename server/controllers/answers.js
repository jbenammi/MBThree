var Question = mongoose.model('questions');
var Answer = mongoose.model('answers');
var User = mongoose.model('users')

module.exports = {
	create: function(request, response){
		var aInfo = request.body
		aInfo._user = request.params.userId
		aInfo._question = request.params.questionId
		var newAnswer = new Answer(aInfo);
		newAnswer.save(function(err){
			if(err){
				response.json({errors: err});
			}
			else{
				Question.findOne({_id: request.params.questionId}, function(err, question){
					question._answers.push(newAnswer._id);
					question.save(function(err){
						if (err) {
							response.json({errors: err});
						}
						else{
							response.json({success: true});
						}
					})
				})
			}
		})
	},

	like: function(request, response){
		Answer.findOne({_id: request.params.id}, function(err, answer){
			answer.likes ++
			answer.save(function(err){
				if(err){
					response.json({errors: err});
				}
				else{
					response.json({success: true});
				}
			})
		})
	}
}