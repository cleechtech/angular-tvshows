app.controller("mainController", function($scope, $http){
    
    $scope.apiKey = '3aac6b6682740a17bec433abdf6d7537';
    $scope.results = [];
    $scope.filterText = null;
    $scope.genreFilter = null;
    $scope.availableGenres = [];
    $scope.init = function() {
        // API requires a start date
        var today = new Date();
        // Create the date string and ensure leading zeros if required
        var apiDate = today.getFullYear() + ('0' + (today.getMonth() + 1)).slice(-2) + "" + ('0' + today.getDate()).slice(-2);
        
        $http.jsonp('http://api.trakt.tv/calendar/premieres.json/' + $scope.apiKey + '/' + apiDate + '/' + 30 + '/?callback=JSON_CALLBACK')
            .success(function(data) {
                // format data
                // for each day, get all the episodes
                angular.forEach(data, function(day, index){
                
                    // the API stores the date separately for each episode, save it to use later
                    var date = day.date;
                    
                    // loop through day's episodes
                    angular.forEach(day.episodes, function(episode, index){
                        episode.date = date;
                        $scope.results.push(episode); // add episode to results array
                        
                        //loop through episode's genres
                        angular.forEach(episode.show.genres, function(genre, index){
                            var inAG = false;
                            angular.forEach($scope.availableGenres, function(ag, index){
                                if (ag == genre){ inAG = true; }
                            });
                            if (!inAG) { $scope.availableGenres.push(genre); }
                                
                        });
                    });
                });            
            
            })
            .error(function(error) {
 
            });                
    };

});

