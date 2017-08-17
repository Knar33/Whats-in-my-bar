angular.module("drinks", []);

angular.module("drinks").directive("getIngredients", function(){
    return {
        templateUrl: "templates/ingredient-list.html",
        controller: ['$scope', '$http', function($scope, $http){
            
            $scope.drinkList = [];
            
            $http.get("http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(function(result){
                $scope.ingredients = result.data;
            }, function(error){
                console.log(error.message);
            });
            
            $scope.submitChoices = function() {
                $scope.drinkForm;
            };
        }]
    }
});