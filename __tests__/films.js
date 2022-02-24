const { ENV_SWAPI_ALL_FILM, ENV_SWAPI_FILM } = require('../src/films/apiConfig.js');
const films = require('../src/films/handler.js')

describe('Films API', () => {
    test('id films of empty value', () => {
        expect(films.getUrl('')).toBe(ENV_SWAPI_ALL_FILM);
    });

    test('id films have there is value', () => {
        let value_test = 2;
        expect(films.getUrl(value_test)).toBe(ENV_SWAPI_FILM(value_test));
    });

    test('id films is string', () => {
        let value_test = 'a';
        expect(films.validateIdFilm(value_test)).toBe(ENV_SWAPI_ALL_FILM);
    });
})
