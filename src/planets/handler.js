const cnx = require('../../db/database.js');
const { getPlanetQ, existsPlanetsQ, insertPlanetQ } = require('../../db/q.js');

module.exports.getAllPlanets = exports.handler = async (event, context) => {
    const response = await cnx.query(getPlanetQ);
    const responseData = response.map(row => (row.residents = JSON.parse(row.residents), row));
    return {
        statusCode: 200,
        body: JSON.stringify({ responseData })
    };
};

module.exports.createPlanet = exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const body = JSON.parse(event.body);
    const planetData = body;
    const { name, diameter, rotation_period, orbital_period, gravity, population, climate, terrain, surface_water, residents, films, url } = planetData;
    let statusCode, message;
    const data = await cnx.query(existsPlanetsQ(name));
    const { exists } = data[0];

    if (exists) {
        statusCode = 409;
        message = "already exists planet with this name";

    } else {
        const newPlanet = { name, diameter, rotation_period, orbital_period, gravity, population, climate, terrain, surface_water, residents: JSON.stringify(residents), films: JSON.stringify(films), url };
        const response = await cnx.query(insertPlanetQ, newPlanet);
        statusCode = 200;
        message = "Created new planet" + name;
    }

    return {
        statusCode,
        body: JSON.stringify({ message })

    };

};