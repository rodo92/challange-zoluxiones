const existsPlanetsQ = (name) => {
    return `SELECT EXISTS(SELECT id_planets FROM t_planets WHERE name = '${name}') as \`exists\` ;`
};
const insertPlanetQ = "INSERT INTO t_planets SET ?"
const getPlanetsQ = "SELECT * FROM t_planets;"

exports.existsPlanetsQ = existsPlanetsQ;
exports.insertPlanetQ = insertPlanetQ;
exports.getPlanetsQ = getPlanetsQ;