

var app =  angular.module("myApp", []);

app.directive("scroll" ,function ($window) {

  return function($scope){
    angular.element($window).bind("scroll", function () {

      if (this.pageYOffset >= 150) {
        $scope.boolChangeClass = true;
      } else {
        $scope.boolChangeClass = false;
      }
      $scope.$apply();
    });
  };
});
