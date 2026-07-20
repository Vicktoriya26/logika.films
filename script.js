const genreFilter = document.getElementById("genreFilter");
const sortFilter = document.getElementById("sortFilter");
const moviesContainer = document.getElementById("movies");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

const moviesData = [
  {
    id: 1,
    title: "Дедпул і Росомаха",
    year: 2024,
    genre: "Бойовик",
    cast: "Раян Рейнольдс, Г'ю Джекман, Емма Коррін",
    duration: "2г 8хв",
    impressions: 280,
    rating: 8.1,
    votes: "212 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg",
    trailer: "https://youtu.be/ACGBv-CZ3bM"
  },
  {
    id: 2,
    title: "Барбі",
    year: 2023,
    genre: "Комедія",
    cast: "Марго Роббі, Раян Гослінг, Америка Феррера",
    duration: "1г 54хв",
    impressions: 180,
    rating: 8.1,
    votes: "230 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
    trailer: "https://youtu.be/K9cibjqbcBQ"
  },
  {
    id: 3,
    title: "Дюна: Частина друга",
    year: 2024,
    genre: "Фантастика",
    cast: "Тімоті Шаламе, Зендея, Ребекка Фергюсон",
    duration: "2г 46хв",
    impressions: 124,
    rating: 8.8,
    votes: "145 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
    trailer: "https://youtu.be/ygtS6q3EL7Y"
  },
  {
    id: 4,
    title: "Усміхайся",
    year: 2022,
    genre: "Жахи",
    cast: "Соссі Бейкон, Джессі Ашер, Кайл Галлнер",
    duration: "1г 55хв",
    impressions: 150,
    rating: 7.8,
    votes: "173 оцінки",
    image: "https://s9.vcdn.biz/static/f/5106130101/image.jpg",
    trailer: "https://youtu.be/gunu-sLhOAU"
  },
  {
    id: 5,
    title: "Гладіатор II",
    year: 2024,
    genre: "Історичний",
    cast: "Пол Мескал, Педро Паскаль, Дензел Вашингтон",
    duration: "2г 28хв",
    impressions: 147,
    rating: 8.2,
    votes: "168 оцінок",
    image: "https://cdn.planetakino.ua/730_gladiator-ii_2024/Media/Posters/vertical/opt_f2e680e4-a3ca-44ee-b2e2-602793cb69fa.jpg",
    trailer: "https://youtu.be/ZMGbRsip7l8"
  },
  {
    id: 6,
    title: "Джон Вік 4",
    year: 2023,
    genre: "Бойовик",
    cast: "Кіану Рівз, Донні Єн, Білл Скашгорд",
    duration: "2г 49хв",
    impressions: 290,
    rating: 8.2,
    votes: "340 оцінок",
    image: "https://thumbs.dfs.ivi.ru/storage0/contents/4/1/eb87206b1744bda60fbbbdf7409a24.jpg",
    trailer: "https://youtu.be/nR3UhmqJR5s"
  },
  {
    id: 7,
    title: "Думками навиворіт 2",
    year: 2024,
    genre: "Мультфільм",
    cast: "Емі Полер, Майя Гоук, Кенсінгтон Таллман",
    duration: "1г 36хв",
    impressions: 415,
    rating: 7.7,
    votes: "480 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg",
    trailer: "https://youtu.be/71Tq0CCCZdE"
  },
  {
    id: 8,
    title: "Воно",
    year: 2017,
    genre: "Жахи",
    cast: "Білл Скашгорд, Джейден Мартелл, Фінн Вулфгард",
    duration: "2г 15хв",
    impressions: 198,
    rating: 7.3,
    votes: "215 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/uk/b/b4/%D0%92%D0%BE%D0%BD%D0%BE_%28%D0%BF%D0%BB%D0%B0%D0%BA%D0%B0%D1%82_%D1%84%D1%96%D0%BB%D1%8C%D0%BC%D1%83%2C_2017%29.jpeg",
    trailer: "https://youtu.be/pv-vSt25vVQ"
  },
  {
    id: 9,
    title: "Володар перснів: Хранителі персня",
    year: 2001,
    genre: "Фантастика",
    cast: "Елайджа Вуд, Ієн Маккеллен, Вігго Мортенсен",
    duration: "2г 58хв",
    impressions: 520,
    rating: 8.9,
    votes: "890 оцінок",
    image: "https://audiobook.co.ua/wp-content/uploads/2023/10/volodar-persniv-hraniteli-persnya-dzh-r-r-tolkin.jpg",
    trailer: "https://youtu.be/uHt4lWmqMD8"
  },
  {
    id: 10,
    title: "Ножі наголо",
    year: 2019,
    genre: "Детектив",
    cast: "Деніел Крейґ, Ана де Армас, Кріс Еванс",
    duration: "2г 10хв",
    impressions: 195,
    rating: 7.9,
    votes: "189 оцінок",
    image: "https://images.vertigo.com.ua/2019/12/knives-out-poster.jpg",
    trailer: "https://youtu.be/4fLrfxSeCL0"
  },
  {
    id: 11,
    title: "Шалений Макс: Дорога гніву",
    year: 2015,
    genre: "Бойовик",
    cast: "Том Гарді, Шарліз Терон, Ніколас Голт",
    duration: "2г 00хв",
    impressions: 310,
    rating: 8.1,
    votes: "420 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
    trailer: "https://youtu.be/UisXcFibFX4"
  },
  {
    id: 12,
    title: "Втеча з Шоушенка",
    year: 1994,
    genre: "Драма",
    cast: "Тім Роббінс, Морган Фрімен, Боб Ґантон",
    duration: "2г 22хв",
    impressions: 580,
    rating: 9.3,
    votes: "950 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    trailer: "https://youtu.be/kgAeKpAPOYk"
  },
  {
    id: 13,
    title: "Інтерстеллар",
    year: 2014,
    genre: "Фантастика",
    cast: "Меттью Макконагей, Енн Гетевей, Джессіка Честейн",
    duration: "2г 49хв",
    impressions: 490,
    rating: 8.7,
    votes: "780 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  },
  {
    id: 14,
    title: "Похмілля у Вегасі",
    year: 2009,
    genre: "Комедія",
    cast: "Бредлі Купер, Ед Гелмс, Зак Галіфіанакіс",
    duration: "1г 40хв",
    impressions: 240,
    rating: 7.7,
    votes: "310 оцінок",
    image: "https://ictv.ua/wp-content/uploads/2016/12/16/Pohmillya-u-Vegasi-1.jpg"
  },
  {
    id: 15,
    title: "Твоє ім'я",
    year: 2016,
    genre: "Анімація",
    cast: "Рюносуке Камікі, Моне Камішираїші",
    duration: "1г 46хв",
    impressions: 315,
    rating: 8.4,
    votes: "290 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png"
  },
  {
    id: 16,
    title: "Шерлок Холмс",
    year: 2009,
    genre: "Детектив",
    cast: "Роберт Дауні-молодший, Джуд Лоу, Рейчел Мак-Адамс",
    duration: "2г 08хв",
    impressions: 210,
    rating: 7.6,
    votes: "195 оцінок",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWD-simnooEbWSRdIbm8SMFNfwQ9TvwKqbISEgneq_HTftkZMJLN-QA&s=10"
  },
  {
    id: 17,
    title: "Гладіатор",
    year: 2000,
    genre: "Історичний",
    cast: "Рассел Кроу, Хоакін Фенікс, Конні Нільсен",
    duration: "2г 35хв",
    impressions: 395,
    rating: 8.5,
    votes: "610 оцінок",
    image: "https://uakino.best/uploads/post/Gladiator/fVF3wyy3DPHBr7lpzS2ScQp2XU7.jpg"
  },
  {
    id: 18,
    title: "Коко",
    year: 2017,
    genre: "Мультфільм",
    cast: "Ентоні Гонсалес, Гаель Гарсія Берналь",
    duration: "1г 45хв",
    impressions: 450,
    rating: 8.4,
    votes: "530 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg"
  },
  {
    id: 19,
    title: "Коханий з майбутнього",
    year: 2013,
    genre: "Романтична комедія",
    cast: "Донал Ґлісон, Рейчел Мак-Адамс, Білл Наї",
    duration: "2г 03хв",
    impressions: 285,
    rating: 7.8,
    votes: "240 оцінок",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdsfRPkcPsOLuLFx_kzKTM3HIBEVkds_4Njn9NMwYNrewae8wWlON0ueR&s=10"
  },
  {
    id: 20,
    title: "Топ Ґан: Меверік",
    year: 2022,
    genre: "Бойовик",
    cast: "Том Круз, Майлз Теллер, Дженніфер Коннеллі",
    duration: "2г 10хв",
    impressions: 380,
    rating: 8.3,
    votes: "490 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg"
  },
  {
    id: 21,
    title: "Зелена миля",
    year: 1999,
    genre: "Драма",
    cast: "Том Генкс, Майкл Кларк Дункан, Девід Морс",
    duration: "3г 09хв",
    impressions: 610,
    rating: 8.6,
    votes: "820 оцінок",
    image: "https://uakino.best/uploads/post/The%20Green%20Mile/bqwOUBxtK0KWijnSAR5ykWyQamn.jpg"
  },
  {
    id: 22,
    title: "Мачо і ботан",
    year: 2012,
    genre: "Комедія",
    cast: "Джона Гілл, Ченнінг Татум, Брі Ларсон",
    duration: "1г 49хв",
    impressions: 190,
    rating: 7.2,
    votes: "205 оцінок",
    image: "https://cdn-ksvod.kyivstar.ua/content/HLS/VOD/IMAGE5/66880dcb0a5430d32c38e705/IMAGE_2_3_XL.jpg"
  },
  {
    id: 23,
    title: "Початок",
    year: 2010,
    genre: "Фантастика",
    cast: "Леонардо Ді Капріо, Кілліан Мерфі, Том Гарді",
    duration: "2г 28хв",
    impressions: 510,
    rating: 8.8,
    votes: "790 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
  },
  {
    id: 24,
    title: "Сен і Тіхіро у полоні духів",
    year: 2001,
    genre: "Анімація",
    cast: "Румі Хіраґі, Мію Іріно, Марі Нацукі",
    duration: "2г 05хв",
    impressions: 420,
    rating: 8.6,
    votes: "580 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png"
  },
  {
    id: 25,
    title: "Полонянки",
    year: 2013,
    genre: "Детектив",
    cast: "Г'ю Джекман, Джейк Джилленгол, Віола Девіс",
    duration: "2г 33хв",
    impressions: 295,
    rating: 8.1,
    votes: "340 оцінок",
    image: "https://upload.wikimedia.org/wikipedia/en/6/63/Prisoners2013Poster.jpg"
  },
  {
    id: 26,
    title: "1917",
    year: 2019,
    genre: "Історичний",
    cast: "Джордж Маккей, Дін-Чарльз Чепмен, Марк Стронг",
    duration: "1г 59хв",
    impressions: 325,
    rating: 8.2,
    votes: "410 оцінок",
    image: "https://uaserials.my/posters/1860.webp"
  },
  {
    id: 27,
    title: "Шрек",
    year: 2001,
    genre: "Мультфільм",
    cast: "Майк Маєрс, Едді Мерфі, Камерон Діас",
    duration: "1г 30хв",
    impressions: 495,
    rating: 7.9,
    votes: "620 оцінок",
    image: "https://uakino.best/uploads/posts/2026-04/wj9woepmd5gws2l3tiypkzei6k.webp",
    trailer: ""
  },
  {
    id: 28,
    title: "Пропозиція",
    year: 2009,
    genre: "Романтична комедія",
    cast: "Сандра Буллок, Раян Рейнольдс, Бетті Вайт",
    duration: "1г 48хв",
    impressions: 185,
    rating: 6.7,
    votes: "150 оцінок",
    image: "https://kinoukr.tv/uploads/mini/short/6/0175320ec172f9b6c1e29feedade88.jpg",
    trailer: "https://youtu.be/wIwe71cVCjk"
  },
  {
    id: 29,
    title: "Фуріоса: Шалений Макс. Сага",
    year: 2024,
    genre: "Бойовик",
    cast: "Аня Тейлор-Джой, Кріс Гемсворт, Том Берк",
    duration: "2г 28хв",
    impressions: 265,
    rating: 7.6,
    votes: "310 оцінок",
    image: "https://cdn.planetakino.ua/179_furiosa-a-mad-max-saga_2024/Media/Posters/vertical/opt_74a4f219-8e79-43ff-accc-a960e5daa1b1.jpg",
    trailer: "https://youtu.be/-KrtC5eFIho"
  },
  {
    id: 30,
    title: "Швидкісний поїзд",
    year: 2022,
    genre: "Бойовик",
    cast: "Бред Пітт, Джої Кінг, Аарон Тейлор-Джонсон",
    duration: "2г 06хв",
    impressions: 290,
    rating: 7.3,
    votes: "280 оцінок",
    image: "https://uaserials.my/posters/6682.webp",
    trailer: "https://youtu.be/lGLySwBIm40"
  }
];

function getFilteredMovies() {
  const selectedGenre = genreFilter.value;
  const searchText = searchInput.value.trim().toLowerCase();
  let filteredMovies = moviesData.filter((movie) => {
    const matchesGenre = selectedGenre === "Усі жанри" || movie.genre === selectedGenre;
    const matchesSearch =
      movie.title.toLowerCase().includes(searchText) ||
      movie.cast.toLowerCase().includes(searchText);

    return matchesGenre && matchesSearch;
  });

  if (sortFilter.value === "rating") {
    filteredMovies = [...filteredMovies].sort((a, b) => b.rating - a.rating);
  } else if (sortFilter.value === "popularity") {
    filteredMovies = [...filteredMovies].sort((a, b) => b.impressions - a.impressions);
  }

  return filteredMovies;
}

function renderMovies() {
  const visibleMovies = getFilteredMovies();

  moviesContainer.innerHTML = "";

  visibleMovies.forEach((movie) => {
    const article = document.createElement("article");
    article.className = "movie";
    article.dataset.genre = movie.genre;
    article.dataset.rating = movie.rating;
    article.dataset.impressions = movie.impressions;

    article.innerHTML = `
      <img src="${movie.image}" alt="Постер фільму ${movie.title}">
      <div class="info">
        <h2>${movie.title}</h2>
        <p><b>${movie.year} • ${movie.genre}</b></p>
        <p><b>В ролях:</b> ${movie.cast}</p>
        <div class="meta">
          <span>Час: ${movie.duration}</span>
          <div class="like-box">
            <span class="impressions">${movie.impressions} вражень</span>
            <button class="like-btn" type="button" data-id="${movie.id}">❤️</button>
          </div>
        </div>
        <div class="bottom">
          <div class="score">
            <div class="big">${movie.rating.toFixed(1)}</div>
            <div class="small">${movie.votes}</div>
          </div>
          <div class="actions">
            <button type="button" class="trailer-btn" data-trailer="${movie.trailer}" data-title="${movie.title}">▶️</button>
          </div>
        </div>
      </div>
    `;

    moviesContainer.appendChild(article);
  });
}

function addLike(button) {
  const movieId = Number(button.dataset.id);
  const movie = moviesData.find((item) => item.id === movieId);

  if (!movie) return;

  movie.impressions += 1;
  const impressionsText = button.previousElementSibling;
  impressionsText.textContent = `${movie.impressions} вражень`;

  button.disabled = true;
  button.textContent = "❤️✓";
}

function trailer(url) {
  Fancybox.show([{
    src: url,
    // Вказуємо тип, щоб скрипт точно знав, як обробляти контент
    type: "video" 
  }]);
}

genreFilter.addEventListener("change", renderMovies);
sortFilter.addEventListener("change", renderMovies);
searchBtn.addEventListener("click", () => {
  searchInput.style.display = "block";
  searchInput.focus();
});
searchInput.addEventListener("input", renderMovies);

moviesContainer.addEventListener("click", (event) => {
  const likeButton = event.target.closest(".like-btn");
  if (likeButton) {
    addLike(likeButton);
    return;
  }

  const trailerButton = event.target.closest(".actions button");
  if (trailerButton) {
    trailer(trailerButton.dataset.trailer);
  }
});

renderMovies();

const loginWindow = document.getElementById("loginWindow");

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

loginBtn.addEventListener("click", function () {
    alert("Вікно входу");
});

registerBtn.addEventListener("click", function () {
    alert("Вікно створення акаунта");
});

const closeLogin = document.getElementById("closeLogin");

closeLogin.addEventListener("click", function () {
    loginWindow.style.display = "none";
});

const userBtn = document.getElementById("userBtn");
userBtn.addEventListener("click", function () {
    loginWindow.classList.remove("hide");
});