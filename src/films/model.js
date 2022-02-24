const filmFieldsParse = {
    "title": "titulo",
    "episode_id": "numero_episodio",
    "opening_crawl": "texto_apertura",
    "director": "director",
    "producer": "productp",
    "release_date": "fecha_estreno",
    "species": "especies",
    "starships": "naves_estelares",
    "vehicles": "vehiculos",
    "characters": "caracteres",
    "planets": "planetas",
    "url": "url",
    "created": "fecha_creacion",
    "edited": "fecha_edicion"

}

const filmParse = (film) => {

    return Object.keys(film).reduce((obj, field) => {

        const parse_field = filmFieldsParse[field];
        obj[parse_field] = film[field];
        return obj;
    }, {});
};

exports.filmParse = filmParse;