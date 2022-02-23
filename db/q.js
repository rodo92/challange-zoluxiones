const existsPlanetsQ = (name) => {
    return `SELECT EXISTS(SELECT id_species FROM t_planets WHERE name = '${name}') as \`exists\` ;`
};
const insertPlanetQ = "INSERT INTO t_planets SET ?"
const getPlanetQ = "SELECT * FROM t_planets;"

exports.existsPlanetsQ = existsPlanetsQ;
exports.insertPlanetQ = insertPlanetQ;
exports.getPlanetQ = getPlanetQ;