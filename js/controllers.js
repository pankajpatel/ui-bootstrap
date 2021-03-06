app
  .controller('ModalCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

    $scope.agree = function () {
      //send the status as true
      $uibModalInstance.close( true );
    };

    $scope.disagree = function () {
      //send the status as false
      $uibModalInstance.close( false );
    };
    /* Calculate the width of available ad space */
    ad = document.getElementById('google-ads-1');
    if( ad ){
      if (ad.getBoundingClientRect().width) {
          adWidth = ad.getBoundingClientRect().width; // for modern browsers 
      } else {
          adWidth = ad.offsetWidth; // for old IE 
      }
    }
  }])
  .controller('FormCtrl', ['$scope','$uibModal','$log', function($scope, $uibModal, $log) {
    $scope.userData = {};
    console.log('FormCtrl', $uibModal)
    $scope.showTerms = function(){
      var modalInstance = $uibModal.open({
        //to set this true, you will need to add ngAnimate module
        animation: true,
        // templateUrl: 'myModalContent.html',
        templateUrl: 'js/partials/termsModal.html',
        controller: 'ModalCtrl',
        size: 'md'
      });

      modalInstance.result.then(function (status) {
        $scope.userData.agree = status;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }
    /* Calculate the width of available ad space */
    ad = document.getElementById('google-ads-1');
    if( ad ){
      if (ad.getBoundingClientRect().width) {
          adWidth = ad.getBoundingClientRect().width; // for modern browsers 
      } else {
          adWidth = ad.offsetWidth; // for old IE 
      }
    }
  }])
  .controller('DatePickerCtrl', ['$scope', function($scope) {
    // You can do the stuff with date here
    console.log('DatePickerCtrl')
  }])