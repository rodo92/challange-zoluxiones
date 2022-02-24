'use strict';

const axios = require('axios');
const { SWAPI_GET_ALL_FILM_URL, SWAPI_GET_FILM_URL } = require('./apiConfig.js');
const { filmParse } = require("./model.js");

const getUrl = (idFilm) => {
    return idFilm ? SWAPI_GET_FILM_URL(idFilm) : SWAPI_GET_ALL_FILM_URL;
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
            response.data.results = response.data.results.map(pp => (filmParse(pp)));
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

module.exports.getUrl = getUrl;