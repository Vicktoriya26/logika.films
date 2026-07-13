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