to do:
        add an ng-submit function to the form that adds all ingredients to an array, which triggers the results directive or controller?
        
        
features

user submitted ingredients
    checkboxes of all ingredients
    ng-submit: put all checked ingredients into array.
    
return list of cocktails that contain ONLY the ingredients listed
    for each ingredient in the selected ingredient array {
        do API call http://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka
        for each cocktail returned {
            do API call http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15112
            if (exists in ingredient array: ingredient1, ingredient2, ingredient3 etc etc) {
                add to drink list
            }
        }
                
    }

    Search cocktail by name
    http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

    Search ingredient by name
    http://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

    Lookup full cocktail details by id
    http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15112

    Lookup a random cocktail
    http://www.thecocktaildb.com/api/json/v1/1/random.php

    Search by ingredient
    http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
    http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

    Search by alcoholic?
    http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
    http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

    Filter by Category
    http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
    http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

    Filter by Glass
    http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
    http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

    List the categories, glasses, ingredients or alcoholic filters
    http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
    http://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
    http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
    http://www.thecocktaildb.com/api/json/v1/1/list.php?a=list
    
    variables in api:
        s: search cocktail by cocktail name
        i: search cocktail by ingredient name, or by cocktail ID
        a: search cocktails by alcoholic/non-alcoholic
        c: seacch cocktails by category
        g: search by glass
        

(maybe later) return list of cocktails that contain one or more of the ingredients, plus one or more additional ingredients that the user doesn't have