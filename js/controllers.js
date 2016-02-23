app
  .controller('FormCtrl', ['$scope', function($scope) {
    $scope.userData = {};
    console.log('FormCtrl')
  }])
  .controller('DatePickerCtrl', ['$scope', function($scope) {
    console.log('DatePickerCtrl')
  }])
