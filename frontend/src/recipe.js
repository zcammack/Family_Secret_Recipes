class Recipe {
    constructor(data) {
        this.id = data.id
        this.name = data.name 
        this.cookbook_id = data.cookbook_id
        this.ingredients = data.ingredients
        this.directions = data.directions
        this.author = data.author
        this.updated_at = data.updated_at
        this.created_at = data.created_at
    }

}

function addRecipesClickListeners() {

    document.querySelectorAll('.add-recipe-button').forEach(element => {
        element.addEventListener('click', renderNewRecipeForm)
    })
    
    document.querySelectorAll('.edit-recipe-button').forEach(element => {
        element.addEventListener("click", editRecipe)
    })

    document.querySelectorAll('.delete-recipe-button').forEach(element => {
        element.addEventListener("click", deleteRecipe)
    })

}


function renderNewRecipeForm() {
    let cookbookId = this.getAttribute('id')
    this.style.display = "none"
    let recipesHTML = this.parentElement
    let recipeForm = document.createElement('form')
    recipeForm.setAttribute("onsubmit", "addRecipe(); return false;")
    recipeForm.innerHTML = renderRecipeFormInfo(cookbookId)
    recipesHTML.appendChild(recipeForm)
}


function addRecipe() {     
    const recipe = {
        name: document.getElementById('recipe-name').value,
        ingredients: document.getElementById('recipe-ingredients').value,
        cookbook_id: document.getElementById('recipe-cookbookId').value,
        directions: document.getElementById('recipe-directions').value,
        author: document.getElementById('recipe-author').value
    }

    fetch("http://localhost:3000/recipes", {
        method: 'POST',
        body: JSON.stringify(recipe),
        headers: {  'Content-Type': 'application/json',
                    'Accept': 'application/json' 
                }
    })
    .then(response => response.json())
    .then(recipe => {
         clearCookbooksHTML()
         getCookbooks()
      });
}

function renderRecipeFormInfo(cookbookId) {
    return `<label><strong>Name: </strong></label>
    <input type="text" id="recipe-name"><br><br>
    <label><strong>List of Ingredients:   </strong></label><br>
    <textarea id="recipe-ingredients" rows="5" cols="50"></textarea><br><br>
    <label><strong>Directions: </strong></label><br>
    <textarea id="recipe-directions" rows="5" cols="50"></textarea><br><br>
    <label><strong>Authored By: </strong></label>
    <input type="text" id="recipe-author"><br>
    <input type="hidden" id="recipe-cookbookId" value="${cookbookId}">  
    <input type="submit" value="Submit" style="color:black;background-color:white">
    `  
}

function editRecipe() { 
    toggleDisplay(this)

    let recipeId = this.parentElement.getAttribute('recipe-id')
    fetch(`http://localhost:3000/recipes/${recipeId}`)
    .then(response => response.json())
    .then(data => {
        fillRecipeForm(data)
    })

}

function fillRecipeForm(data) { 
    let recipe = new Recipe(data)
    let recipeForm = renderRecipeForm(recipe.cookbook_id)
    
    recipeForm.querySelector('#recipe-name').value = recipe.name 
    recipeForm.querySelector('#recipe-ingredients').value = recipe.ingredients 
    recipeForm.querySelector('#recipe-cookbookId').value = recipe.cookbook_id 
    recipeForm.querySelector('#recipe-directions').value = recipe.directions
    recipeForm.querySelector('#recipe-author').value = recipe.author
    document.querySelector(`.card[recipe-id="${recipe.id}"]`).appendChild(recipeForm)
}


function renderRecipeForm (cookbookId) {
    let recipeForm = document.createElement('form')
    recipeForm.setAttribute("onsubmit", "updateRecipe(); return false;")
    recipeForm.innerHTML = renderRecipeFormInfo(cookbookId)
    return recipeForm 
}

function updateRecipe() { 
    let recipeId = this.event.target.parentElement.getAttribute('recipe-id')     
    let recipeElement = document.querySelector(`.card[recipe-id="${recipeId}"]`)
        
     let recipe = {
         name: recipeElement.querySelector('#recipe-name').value, 
         ingredients: recipeElement.querySelector('#recipe-ingredients').value, 
         cookbook_id: recipeElement.querySelector('#recipe-cookbookId').value,
         directions: recipeElement.querySelector('#recipe-directions').value,
         author: recipeElement.querySelector('#recipe-author').value
     }
       

    fetch(`http://localhost:3000/recipes/${recipeId}`, {
        method: 'PATCH',
        body: JSON.stringify(recipe),
        headers: {  'Content-Type': 'application/json',
                    'Accept': 'application/json' 
                }
    })
    .then(response => response.json() )
    .then(data => {
         clearCookbooksHTML()
         getCookbooks()  
         Cookbook.newCookbookForm()
    })
}

function deleteRecipe() {
    let recipeId = this.parentElement.getAttribute('recipe-id')

    fetch(`http://localhost:3000/recipes/${recipeId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(json => {
          let recipe = document.querySelector(`.card[recipe-id="${recipeId}"]`) 
          recipe.remove()
      })
}