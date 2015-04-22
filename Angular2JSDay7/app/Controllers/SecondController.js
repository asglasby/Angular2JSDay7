app.controller('SecondController', function ($scope, $http, BugFactory) {
    $scope.bugs = BugFactory.bugs;

    $scope.Bug_Constructor = function (desc, priority) {
        this.description = desc;
        this.priority = priority;
    }

    $scope.addBug = function () {
        $scope.newBug = new $scope.Bug_Constructor($scope.inputDesc, $scope.inputPriority);
        BugFactory.addBug($scope.newBug).then(function (response) {
            $scope.bugs.push(response);
        });
        $scope.inputDesc = ''; $scope.inputPriority = '';
    }

    BugFactory.getBugs();
    $scope.deleteBug = function (i) {
        BugFactory.deleteBug(i);
    }

    $scope.editBug = function (i) {
        

    }

});