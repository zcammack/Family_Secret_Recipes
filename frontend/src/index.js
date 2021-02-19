// const app = document.getElementById('root')

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(container);


// fetch("http://localhost:3000/cookbooks")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(json) {
//         const responseData = json;
//             responseData.forEach(cookbook => {
//                 const card = document.createElement('div');
//                 card.setAttribute('class', 'card');

//                 const h1 = document.createElement('h1');
//                 h1.textContent = cookbook.name;

//                 container.appendChild(card);
//                 card.appendChild(h1);
//             });
//     })
//     .catch(function(error) {
//         alert("Something has gone wrong.");
//         const errorMessage = document.createElement('errorCard');
//         errorMessage.textContent = "Something went terribly wrong."
//         app.appendChild(errorMessage);
//         console.log(error.message);
//     });

document.addEventListener("DOMContentLoaded", () => {
    getCookbooks();
    Cookbook.newCookbookForm()
})

function toggleDisplay(element) {
    if (element.style.display === "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}