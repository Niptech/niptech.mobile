'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/niptech', {templateUrl: 'partials/niptechView.html'});
        $routeProvider.when('/nipdev', {templateUrl: 'partials/nipdevView.html'});
        $routeProvider.when('/niplife', {templateUrl: 'partials/niplifeView.html'});
        $routeProvider.when('/nipsales', {templateUrl: 'partials/nipsalesView.html'});
        $routeProvider.otherwise({redirectTo: '/'});
  }]);
