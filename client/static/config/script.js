var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'static/partials/logreg.html'
		})
		.when('/dashboard', {
			templateUrl: 'static/partials/dashboard.html'
		})
		.when('/new_question', {
			templateUrl: 'static/partials/newquestion.html'
		})
		.when('/question/:id', {
			templateUrl: 'static/partials/question.html'
		})
		.when('/question/:id/new_answer', {
			templateUrl: 'static/partials/newanswer.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})