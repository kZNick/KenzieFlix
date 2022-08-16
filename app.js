// api key  from TMDB 
const api = "api_key=2ed0ff9ee7c314247f0df49cf2b1da30";
// base url of the site 
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img url 
const img_url = "https://image.tmdb.org/t/p/original";
banner
// requests for movies data 
const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}&language=pt-BR`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=pt-BR`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213&language=pt-BR`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28&language=pt-BR`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35&language=pt-BR`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27&language=pt-BR`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35&language=pt-BR`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27&language=pt-BR`,
};
// usado para troncar a string 
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
  console.log(data.results);
  // a cada atualização o filme será alterado
  const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
  console.log(setMovie);
  var banner = document.getElementById("banner");
  var banner_title = document.getElementById("banner__title");
  var banner__desc = document.getElementById("banner__description");
  banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
  banner__desc.innerText = truncate(setMovie.overview, 150);
  banner_title.innerText = setMovie.name;
})

// movies rows
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("netflixrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Originais Kenziflix";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    var s = movie.name.replace(/\s+/g, "");
    poster.id = s;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);

  });
});



//trending 
fetch(requests.fetchPopular)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("popularrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Populares";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);

  });
});

// top rated 
fetch(requests.fetchTrending)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Os Melhores";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);

  });
});