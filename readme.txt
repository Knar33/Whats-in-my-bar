features

user submitted ingredients
    options:
        text boxes with "add another ingredient" button next to it, that creates a new text box under the first.
        textarea, where user separates ingredients on new lines, or by commas
        dropdown of all possible ingredients gathered from the api itself. When one is picked, "add another ingredient" appears next to dropdown that creates another dropdown below the first
    
return list of cocktails that contain ONLY the ingredients listed
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
        

return list of cocktails that contain one or more of the ingredients, plus one or more additional ingredients that the user doesn't have