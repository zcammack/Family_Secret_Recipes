class Cookbook {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.recipes = data.recipes.sort((a,b) => (a.created_at < b.created_at) ? 1 : ((b.created_at < b.created_at) ? -1 : 0));
    }

    static newCookbookForm() {

        let newCookbookFormDiv = document.getElementById('cookbook-form')
        newCookbookFormDiv.innerHTML = `
        <form onsubmit="createCookbook(); return false;">
            <label><strong>Cookbook Title: </strong></label><br/>
            <input type="text" id="cookbook-name"><br/>
            <input type="hidden" id="cookbookId">
            <input type="submit" value="Add New Cookbook" style="color:black;background-color:white">
        </form>
        <br/>
        `
    }

    static editCookbookForm() {
        let editCookbookFormDiv = document.getElementById('cookbook-form')
        editCookbookFormDiv.innerHTML = `
        <form onsubmit="updateCookbook(); return false;">
            <label><strong>Name: </strong></label><br/>
            <input type="text" id="cookbook-name"><br/>
            <input type="hidden" id="cookbookId">
            <input type="submit" value="Update Cookbook">
        </form>
        <br/>
        `
    }
}

function addCookbooksClickListeners() {
    document.querySelectorAll('.view-recipes-button').forEach(element => {
        element.addEventListener("click", showRecipes)
    })

    document.querySelectorAll('.edit-cookbook-button').forEach(element => {
        element.addEventListener("click", editCookbook)
    })

    document.querySelectorAll('.delete-cookbook-button').forEach(element => {
        element.addEventListener("click", deleteCookbook)
    })

    document.querySelector('.sort-button').addEventListener("click", sortCookbooks)
}

function createCookbook() {
    const cookbook = {
        name: document.getElementById('cookbook-name').value
    }

    fetch(`http://localhost:3000/cookbooks`, {
        method: 'POST',
        body: JSON.stringify(cookbook),
        headers: {  'Content-Type': 'application/json',
                    'Accept': 'application/json' 
                }
    })
    .then(response => response.json())
    .then(cookbook => {
        clearCookbooksHTML()
        getCookbooks()
        Cookbook.newCookbookForm()
    });
}

function getCookbooks() {
    fetch(`http://localhost:3000/cookbooks`)
    .then(response => response.json())
    .then(data => {
        renderCookbooks(data)
        addCookbooksClickListeners()
        addRecipesClickListeners()
    })
}

function renderCookbooks(data) {
    let cookbooks = document.getElementById("cookbooks-list")

    data.forEach((cookbook) => {
  
        let recipesHTML = document.createElement('div')
        recipesHTML.className = 'recipes'
        recipesHTML.style.display = 'none'
        let emptyRecipes = recipesHTML
          

        let newCookbook = new Cookbook(cookbook)
        recipesHTML.innerHTML = newCookbook.cookbookRecipesHTML()     
   
        cookbooks.innerHTML += newCookbook.cookbookHTML() 
   
        let selectedCookbookHTML = document.querySelector(`.card[data-cookbook-id="${newCookbook.id}"]`)           
        selectedCookbookHTML.append(recipesHTML.childElementCount ? recipesHTML : emptyRecipes )
        selectedCookbookHTML.querySelector('.recipes').appendChild(newCookbook.addRecipeButton())

    });

}

function showRecipes() {
    toggleDisplay(this.parentElement.querySelector('.recipes'))
}

function editCookbook() {
    let cookbookId = this.parentElement.getAttribute('data-cookbook-id')

    fetch(`http://localhost:3000/cookbooks/${cookbookId}`)
    .then(response => response.json())
    .then(data => {
        Cookbook.editCookbookForm()
        let cookbookForm = document.getElementById('cookbook-form')
        cookbookForm.querySelector('#cookbook-name').value = data.name
        cookbookForm.querySelector('#cookbookId').value = data.id
    })
}

function updateCookbook() {
    let cookbookId = this.event.target.cookbookId.value

    const cookbook = {
        name: document.getElementById('cookbook-name').value
    }

    fetch(`http://localhost:3000/cookbooks/${cookbookId}`, {
        method: 'PATCH',
        body: JSON.stringify(cookbook),
        headers: {  'Content-Type': 'application/json',
                    'Accept': 'application/json' 
                }
    })
    .then(response => response.json() )
    .then(data => {
         clearCookbooksHTML()
         getCookbooks()
         Cookbook.newCookbookForm()
    });
}

function deleteCookbook() {
    let cookbookId = this.parentElement.getAttribute('data-cookbook-id')

    fetch(`http://localhost:3000/cookbooks/${cookbookId}`, {
        method: 'DELETE'
    })
    .then(response => response)
    .then(data => {
        let cookbook = document.querySelector(`.card[data-cookbook-id="${cookbookId}"]`)
        cookbook.remove()
    })
}

function clearCookbooksHTML() {
    let cookbooks = document.getElementById("cookbooks-list")
    cookbooks.innerHTML = ''
}

function sortCookbooks() { 

    fetch("http://localhost:3000/cookbooks")
    .then(response => response.json())
    .then(data => {

        data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
        console.log(data)
        clearCookbooksHTML()
        renderCookbooks(data)
        addCookbooksClickListeners()
        addRecipesClickListeners()
    })
}

Cookbook.prototype.cookbookRecipesHTML = function () {

	let cookbookRecipes = this.recipes.map(recipe => {
    let date = parseDate(recipe.created_at)

    return (`
    <div class="card" recipe-id="${recipe.id}" >
    <i>Created/Updated: </i>${date} <br/>
    <strong>Name: </strong>${recipe.name} <br/>
    <strong>Ingredients: </strong>${recipe.ingredients} <br/>
    <strong>Directions: </strong>${recipe.directions} <br/>
    <strong>Author: </strong>${recipe.author} <br/>
        
    <button class="edit-recipe-button" style="background-color:blue">Edit Recipe</button>  
    <button class="delete-recipe-button" style="background-color:red">Delete Recipe</button>  
    </div>
	`)

    }).join('')

    return (cookbookRecipes)
}

Cookbook.prototype.cookbookHTML = function () {
     
    return `<div class="card" data-cookbook-id="${this.id}">
            <button class="view-recipes-button" style="background-color:green">View Recipes</button>  
            <button class="edit-cookbook-button" style="background-color:blue">Edit Cookbook</button>  
            <button class="delete-cookbook-button" style="background-color:red">Delete Cookbook</button>
            </br></br>
            <strong class="cookbook-name">${this.name}</strong> <br/>
            </div>` 
}

Cookbook.prototype.addRecipeButton = function () {

    let addNewRecipeButton = document.createElement('button')
    addNewRecipeButton.className = 'add-recipe-button'
    addNewRecipeButton.id = this.id 
    addNewRecipeButton.innerText = "Add Recipe"
    addNewRecipeButton.style.backgroundColor = "green"
     
    return addNewRecipeButton

}