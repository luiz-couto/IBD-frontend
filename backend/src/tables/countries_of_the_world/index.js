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
    "Area_sq_mi": {
        datatype: "NUMERIC",
    },
    "Pop_Density_per_sq_mi": {
        datatype: "NUMERIC",
    },
    "Coastline_coast_per_area_ratio": {
        datatype: "NUMERIC",
    },
    "Net migration": {
        datatype: "NUMERIC",
    },
    "Infant mortality_per_1000_births": {
        datatype: "NUMERIC",
    },
    "GDP_per_capita": {
        datatype: "NUMERIC",
    },
    "Literacy_percentage": {
        datatype: "NUMERIC",
    },
    "Phones_per_1000": {
        datatype: "NUMERIC",
    },
    "Arable_percentage": {
        datatype: "NUMERIC",
    },
    "Crops_percentage": {
        datatype: "NUMERIC",
    },
    "Other_percentage": {
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