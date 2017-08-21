angular.module("drinks", []);

angular.module("drinks").directive("getIngredients", function(){
    return {
        templateUrl: "templates/ingredient-list.html",
        controller: ['$scope', '$http', function($scope, $http){
            
            $scope.inputs = {};
            $scope.submitted = false;
            
            $http.get("http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(function(result){
                $scope.ingredients = result.data;
            }, function(error){
                console.log(error.message);
            });
            
            $scope.submitChoices = function() {
                $scope.submitted = true;
                $scope.drinkList = [];
                $scope.possibleDrinks = [];
                $scope.mixableDrinks = [];
                $scope.almostMixableDrinks = [];
                
                Object.keys($scope.inputs).forEach(function(ingredientName){
                    if ($scope.inputs[ingredientName]) {
                        $scope.drinkList.push(ingredientName);
                    }
                });           
                
                //drinks you can mix with 1 or 2 additional ingredients
                $scope.drinkList.forEach(function(drink){
                    $http.get("http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drink.split('_').join(' ')).then(function(result2){
                        $scope.retreivedDrinks = result2.data;
                        //for each drink the API call returned
                        $scope.retreivedDrinks.drinks.forEach(function(retreivedDrink) {
                            $http.get("http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + retreivedDrink.idDrink).then(function(result3){
                                $scope.retreivedDrinkData = result3.data;
                                var mixable = true;
                                var almostMixable = true;
                                var missingIngredients = 0;
                                
                                for (i = 0; i < 15; i++) {
                                    if ($scope.retreivedDrinkData.drinks[0]['strIngredient' + i] && $.inArray($scope.retreivedDrinkData.drinks[0]['strIngredient' + i].split(' ').join('_'), $scope.drinkList) == -1) {
                                        mixable = false;
                                        if (missingIngredients < 1) {
                                            missingIngredients++;
                                        } else {
                                            almostMixable = false;
                                        }
                                    }
                                }
                                
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
                                
                                if (almostMixable) {
                                    var found = false;
                                    for(var i = 0; i < $scope.almostMixableDrinks.length; i++) {
                                        if ($scope.almostMixableDrinks[i].idDrink == $scope.retreivedDrinkData.drinks[0].idDrink) {
                                            found = true;
                                            break;
                                        }
                                    }
                                    if (!found) {
                                        $scope.almostMixableDrinks.push($scope.retreivedDrinkData.drinks[0]);
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
            };
        }]
    }
});