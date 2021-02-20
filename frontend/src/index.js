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