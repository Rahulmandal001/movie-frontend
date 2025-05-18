<<<<<<< HEAD
const movies = [
    { title: "Inception", year: 2010 },
    { title: "Interstellar", year: 2014 },
    { title: "The Batman", year: 2022 },
  ];
  
  const movieList = document.getElementById("movie-list");
  
  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.className = "movie-card";
    div.innerHTML = `<h2>${movie.title}</h2><p>Released: ${movie.year}</p>`;
    movieList.appendChild(div);
  });
=======
const movies = [
    { title: "Inception", year: 2010 },
    { title: "Interstellar", year: 2014 },
    { title: "The Batman", year: 2022 },
  ];
  
  const movieList = document.getElementById("movie-list");
  
  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.className = "movie-card";
    div.innerHTML = `<h2>${movie.title}</h2><p>Released: ${movie.year}</p>`;
    movieList.appendChild(div);
  });
>>>>>>> b5ec0cc91ff331c274f1c3231dda748d4669b6ba
  