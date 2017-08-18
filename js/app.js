angular.module("drinks", []);

angular.module("drinks").directive("getIngredients", function(){
    return {
        templateUrl: "templates/ingredient-list.html",
        controller: ['$scope', '$http', function($scope, $http){
            
            $scope.inputs = {};
            
            $http.get("http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(function(result){
                $scope.ingredients = result.data;
            }, function(error){
                console.log(error.message);
            });
            
            $scope.submitChoices = function() {
                $scope.drinkList = [];
                $scope.possibleDrinks = [];
                $scope.mixableDrinks = [];
                $scope.almostMixableDrinks = [];
                
                Object.keys($scope.inputs).forEach(function(ingredientName){
                    if ($scope.inputs[ingredientName]) {
                        $scope.drinkList.push(ingredientName);
                    }
                });
                
                //do API call for each drink the user entered, get retreivedDrinks array back push those to new array
                $scope.drinkList.forEach(function(drink){
                    $http.get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink.split('_').join(' ')).then(function(result2){
                        $scope.retreivedDrinks = result2.data;
                        //for each drink the API call returned
                        $scope.retreivedDrinks.drinks.forEach(function(retreivedDrink) {
                            $http.get("http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + retreivedDrink.idDrink).then(function(result3){
                                $scope.retreivedDrinkData = result3.data;
                                var mixable = true;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient1 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient1.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient2 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient2.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient3 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient3.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient4 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient4.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient5 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient5.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient6 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient6.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient7 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient7.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient8 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient8.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient9 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient9.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient10 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient10.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient11 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient11.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient12 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient12.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient13 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient13.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient14 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient14.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                if ($scope.retreivedDrinkData.drinks[0].strIngredient15 && $.inArray($scope.retreivedDrinkData.drinks[0].strIngredient15.split(' ').join('_'), $scope.drinkList) == -1)
                                    mixable = false;
                                
                                if (mixable) {
                                    var found = false;
                                    for(var i = 0; i < $scope.mixableDrinks.length; i++) {
                                        if ($scope.mixableDrinks[i].idDrink == $scope.retreivedDrinkData.drinks[0].idDrink) {
                                            found = true;
                                            break;
                                        }
                                    }
                                    if (!found) {
                                        $scope.mixableDrinks.push($scope.retreivedDrinkData.drinks[0]);
                                    }
                                }
                            }, function(error){
                                console.log(error.message);
                            });
                        });
                    }, function(error){
                        console.log(error.message);
                    });
                });
                console.log($scope.mixableDrinks);
            };
            
            
        }]
    }
});