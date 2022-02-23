const cnx = require('../../db/database.js');
const {getPlanetQ} = require('../../db/q.js');

module.exports.getAllPlanets = exports.handler = async (event, context) => { 
    const response = await cnx.query(getPlanetQ);
    return {
        statusCode: 200,
        body: JSON.stringify({response})    
    };
};