const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("searchButton");
const hamburguerMenu = document.getElementById("hamburguer");
const buttons = document.querySelector(".buttons");

searchInput.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){
        alert("The search bar is working");
    }
})

btnSearch.addEventListener('click', function() {
    alert("The search button is also working");
});

hamburguerMenu.addEventListener('click', function() {
    buttons.classList.toggle("active");

    const isOpen = buttons.classList.contains("active");
    hamburguerMenu.setAttribute("aria-expanded", isOpen);
})