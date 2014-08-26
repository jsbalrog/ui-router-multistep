// create our angular app and inject ngAnimate and ui-router
angular.module('myApp', ['ngAnimate', 'ui.router']).config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		// route to show our basic form (/form)
		.state('form', {
			url: '/form',
			templateUrl: 'form.html',
			controller: 'formController'
		})

		// nested states
		// each of these sections will have their own view

		// url will be /form/profile
		.state('form.profile', {
			url: '/profile',
			templateUrl: 'form-profile.html'
		})

		// url will be /form/interests
		.state('form.interests', {
			url: '/interests',
			templateUrl: 'form-interests.html'
		})

		// url will be /form/payment
		.state('form.payment', {
			url: '/payment',
			templateUrl: 'form-payment.html'
		});
	
	// catch all route
	$urlRouterProvider.otherwise('/form');
});

angular.module('myApp').controller('formController', function($scope) {
	
	// we will store all of our form data on this object
	$scope.formData = {};
	
	// function to process the form
	$scope.processForm = function() {
		alert('form processing...');
	};
});