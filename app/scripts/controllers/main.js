'use strict';

angular.module('spaAdminApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeFeatures = [
      {name: 'Coverage', description: 'Code coverage for unit tests  - grunt test:unit'},
      {name: 'E2E configuration', description: 'E2E tests configuration - grunt test:e2e'},
      {name: 'Angular-translate', description: 'Angular translate plugin for translations, configured for static json files.'}
    ];
  }]);
