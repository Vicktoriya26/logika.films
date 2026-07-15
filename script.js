const genreFilter = document.getElementById("genreFilter");
const movies = document.querySelectorAll(".movie");

genreFilter.addEventListener("change", function () {

    const selectedGenre = this.value;

    movies.forEach(function(movie) {

        const genre = movie.dataset.genre;

        if (selectedGenre === "Усі жанри" || genre === selectedGenre) {
            movie.style.display = "flex";
        } else {
            movie.style.display = "none";
        }

    });

});

const sortFilter = document.getElementById("sortFilter");
const moviesContainer = document.getElementById("movies");

sortFilter.addEventListener("change", function () {

    const movieArray = Array.from(document.querySelectorAll(".movie"));

    if (this.value === "rating") {
        movieArray.sort((a, b) =>
            parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating)
        );
    }

    movieArray.forEach(movie => moviesContainer.appendChild(movie));
});


const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");


// відкриття пошуку по натисканню на лупу
searchBtn.addEventListener("click", function () {

    searchInput.style.display = "block";
    searchInput.focus();

});


// пошук фільмів
searchInput.addEventListener("input", function () {

    const text = this.value.toLowerCase();

    const movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {

        const title = movie.querySelector("h2").textContent.toLowerCase();

        if (title.includes(text)) {
            movie.style.display = "flex";
        } else {
            movie.style.display = "none";
        }

    });

});


function addLike(button) {

    let box = button.parentElement;

    let text = box.querySelector(".impressions");

    let number = parseInt(text.textContent);

    number++;

    text.textContent = number + " вражень";


    // вимкнути кнопку після натискання
    button.disabled = true;

    button.textContent = "❤️✓";

}