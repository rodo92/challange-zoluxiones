const { SWAPI_GET_ALL_FILM_URL, SWAPI_GET_FILM_URL } = require('../src/films/apiConfig.js');
const films = require('../src/films/handler.js')

describe('Films API', () => {
    test('id films of empty value', () => {
        expect(films.getUrl('')).toBe(SWAPI_GET_ALL_FILM_URL);
    });

    test('id films have there is value', () => {
        let value_test = 2;
        expect(films.getUrl(value_test)).toBe(SWAPI_GET_FILM_URL(value_test));
    });

    test('id films is string', () => {
        let value_test = 'a';
        expect(films.validateIdFilm(value_test)).toBe(SWAPI_GET_ALL_FILM_URL);
    });
})
