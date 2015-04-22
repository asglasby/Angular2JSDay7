app.controller('HomeController', function ($scope, $http, BugService) {
    $scope.bugs = [];

    $scope.Bug_Constructor = function (desc, priority) {
        this.description = desc;
        this.priority = priority;
    }
 
    $scope.addBug = function () {
        $scope.newBug = new $scope.Bug_Constructor($scope.inputDesc, $scope.inputPriority);
        BugService.addBug($scope.newBug).then(function (response) {
            $scope.bugs.push(response);
        });
        $scope.inputDesc = ''; $scope.inputPriority = '';        
    }

    $scope.getBugs = function () {
        BugService.getBugs().then(function (response) {
            $scope.bugs = response;
            console.log(response);
        });
    }

    //$http({
    //    method: 'GET',
    //    url: 'https://ccamplessons.firebaseio.com/.json'
    //}).success(function (response) {
    //    for (var prop in response) {
    //        response[prop].key = prop;
    //        $scope.bugs.push(response[prop]);
    //    }
    //}).error(function (response) {
    //    console.error(response);
    //});

   
});