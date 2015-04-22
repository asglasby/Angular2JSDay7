app.factory('BugFactory', function ($http, $q) {
    
    var bugs = []; // going to hold all of our bugs

    var getBugs = function () {
        $http({
            url: 'https://glowing-fire-7170.firebaseio.com/Bugs.json',
            method: 'GET'
        }).success(function (response) {
            for (var prop in response) {
                response[prop].key = prop;
                bugs.push(response[prop]);
            }
        }).error(function (response) {
            console.error(response);
        });
    } 
    
    var addBug = function(bug){
        $http({
            url: 'https://glowing-fire-7170.firebaseio.com/Bugs.json',
            method: 'POST',
            data: bug
        }).success(function(response){
            bug.key = response.name;
            bugs.push(bug);
        }).error(function(response){
            console.error(response);
        });
    }

    var deleteBug = function(i){
        $http({
            url: 'https://glowing-fire-7170.firebaseio.com/Bugs/' + bugs[i].key + '.json',
            method:'DELETE',
        }).success(function(response){
            bugs.splice(i, 1);
        }).error(function(response){
            console.error(response);
        });
    }

    var editBug = function (i) {
        $http({
            url: 'https://glowing-fire-7170.firebaseio.com/Bugs.json',
            method: 'PUT',
            
        }).success(function (response) {
            
        }).error(function (response) {
            console.error(response);
        });
    }

    return {
        getBugs: getBugs,
        bugs: bugs,
        addBug: addBug,
        deleteBug: deleteBug,
        editBug: editBug
    }
});