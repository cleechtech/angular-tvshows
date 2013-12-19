app.controller("mainController", function($scope, $http){
    
    $scope.apiKey = '3aac6b6682740a17bec433abdf6d7537';
    $scope.init = function() {
        // API requires a start date
        var today = new Date();
        // Create the date string and ensure leading zeros if required
        var apiDate = todat.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + "" + ('0' + today.getDate()).slice(-2);
        
        $http.jsonp('http://api.trakt.tv/calendar/premieres.json/' + $scope.apiKey + '/' + apiDate + '/' + 30 + '/?callback=JSON_CALLBACK').success(function(data) {
            console.log(data);
        }).error(function(error) {
 
        });                
    };

});

