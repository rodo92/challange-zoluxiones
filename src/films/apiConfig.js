const SWAPI_GET_ALL_FILM_URL = "https://swapi.py4e.com/api/films/";
const SWAPI_GET_FILM_URL = (idFilms) => (`https://swapi.py4e.com/api/films/${idFilms}/?format=json`);

exports.SWAPI_GET_ALL_FILM_URL = SWAPI_GET_ALL_FILM_URL;
exports.SWAPI_GET_FILM_URL = SWAPI_GET_FILM_URL;