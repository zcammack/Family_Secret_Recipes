setupCookbook();

document.addEventListener("DOMContentLoaded", function() {
    Recipe.loadRecipes();
});

document.getElementById("addRecipeForm").addEventListener("submit, addRecipe");

class Recipe { 
    constructor(recipeData) {
        this.name = recipeData["name"];
    }

    static loadRecipes() {
        fetch("http://localhost:3000/cookbooks")
            .then(function (response) {
                return response.json();
            })
            .then(function (cookbooks) {
                console.log(cookbooks);
            });
    }

}


