'use strict';

angular.module('departmentsAdminApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'pascalprecht.translate'
])
  .config(['$routeProvider', '$translateProvider', function ($routeProvider, $translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'translations/locale-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('pl');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
