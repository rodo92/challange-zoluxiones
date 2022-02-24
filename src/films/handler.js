'use strict';

const axios = require('axios');
const { ENV_SWAPI_ALL_FILM, ENV_SWAPI_FILM } = require('./apiConfig.js');
const { filmParse } = require("./model.js");

const getUrl = (idFilm) => {
    return idFilm ? ENV_SWAPI_FILM(idFilm) : ENV_SWAPI_ALL_FILM;
}

// for test
const validateIdFilm = (idFilm) => {
    return Number.isInteger(idFilm) ? ENV_SWAPI_FILM(idFilm) : ENV_SWAPI_ALL_FILM;
}

module.exports.listFilm = async (event) => {

    const { idFilm } = event.pathParameters ? event.pathParameters : { idFilm: '' };
    const filmAPIUrl = getUrl(idFilm);
    const params = {
        "params": { "format": "json", ...event.queryStringParameters }
    }

    try {
        let data;
        const response = await axios.get(filmAPIUrl, params);
        if (idFilm) {
            data = filmParse(response.data);
        } else {
            response.data.results = response.data.results.map(item => (filmParse(item)));
            data = response.data;
        }

        return {
            'statusCode': 200,
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify(data)
        };

    } catch (error) {
        return {
            'statusCode': error.response.status,
            'body': JSON.stringify(error.response.statusText)
        };
    }
};

module.exports = { getUrl, validateIdFilm };