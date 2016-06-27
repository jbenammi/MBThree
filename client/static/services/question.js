myApp.factory('questionFactory', function($http){
	var factory = {};

	factory.create = function(newQuestion, callback){
		$http.post('/questions', newQuestion).success(function(fromDB){
			if(fromDB.errors){
				alert('There are errors, check your console log');
				console.log(fromDB.errors);
			}
			else{
				callback();
			}
		})
	}

	factory.showAll = function(callback){
		$http.get('/questions').success(function(fromDB){
			if(fromDB.errors){
				alert('There are errors, check your console log');
				console.log(fromDB.errors);
			}
			else{
				callback(fromDB);
			}
		})
	};

	factory.showOne = function(id, callback){
		$http.get('/questions/' + id.id).success(function(fromDB){
			if(fromDB.errors){
				alert('There are errors, check your console log');
				console.log(fromDB.errors);
			}
			else{
				callback(fromDB);
			}			
		})
	};

	factory.createAnswer = function(question_id, newAnswer, callback){
		$http.post('/answers/'+ question_id, newAnswer).success(function(fromDB){
			if(fromDB.errors){
				alert('There are errors, check your console log');
				console.log(fromDB.errors);
			}
			else{
				callback();
			}			
		})
	};

	factory.like = function(a_id, callback){
		$http.post('/like/' + a_id).success(function(fromDB){
			if(fromDB.errors){
				alert('There are errors, check your console log');
				console.log(fromDB.errors);
			}
			else{
				callback();
			}			
		})
	}

	return factory;
})