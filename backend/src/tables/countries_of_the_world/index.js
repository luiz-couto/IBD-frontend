const { convertCSVToSQL } = require("../../utils/csv-to-sql");

module.exports = convertCSVToSQL("countries_of_the_world", "./countries_of_the_world/countries_of_the_world.csv", ",", {
    "Country": {
        datatype: "TEXT",
    },
    "Region": {
        datatype: "TEXT",
    },
    "Population": {
        datatype: "NUMERIC",
    },
    "Area (sq. mi.)": {
        datatype: "NUMERIC",
    },
    "Pop. Density (per sq. mi.)": {
        datatype: "NUMERIC",
    },
    "Coastline (coast/area ratio)": {
        datatype: "NUMERIC",
    },
    "Net migration": {
        datatype: "NUMERIC",
    },
    "Infant mortality (per 1000 births)": {
        datatype: "NUMERIC",
    },
    "GDP ($ per capita)": {
        datatype: "NUMERIC",
    },
    "Literacy (%)": {
        datatype: "NUMERIC",
    },
    "Phones (per 1000)": {
        datatype: "NUMERIC",
    },
    "Arable (%)": {
        datatype: "NUMERIC",
    },
    "Crops (%)": {
        datatype: "NUMERIC",
    },
    "Other (%)": {
        datatype: "NUMERIC",
    },
    "Climate": {
        datatype: "NUMERIC",
    },
    "Birthrate": {
        datatype: "NUMERIC",
    },
    "Deathrate": {
        datatype: "NUMERIC",
    },
    "Agriculture": {
        datatype: "NUMERIC",
    },
    "Industry": {
        datatype: "NUMERIC",
    },
    "Service": {
        datatype: "NUMERIC",
    },
    constraints: ``,
});