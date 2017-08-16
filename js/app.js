angular.module("drinks", []);

angular.module("drinks").controller(
    "getIngredients", 
    ['$scope', '$http', function($scope, $http){
        $http.get("http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(function(result){
            $scope.ingredients = result.data;
        }, function(error){
            console.log(error.message);
        });
    }]
);