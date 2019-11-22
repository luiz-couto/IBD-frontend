const { convertCSVToSQL } = require("../../utils/csv-to-sql");

module.exports = convertCSVToSQL("countries_of_the_world", "./countries_of_the_world/countries_of_the_world.csv", ",", {
    "Country": {
        datatype: "TEXT",
    },
    "Region": {
        datatype: "TEXT",
    },
    "Population": {
        datatype: "TEXT",
    },
    "Area_sq_mi": {
        datatype: "TEXT",
    },
    "Pop_Density_per_sq_mi": {
        datatype: "TEXT",
    },
    "Coastline_coast_per_area_ratio": {
        datatype: "TEXT",
    },
    "Net migration": {
        datatype: "TEXT",
    },
    "Infant mortality_per_1000_births": {
        datatype: "TEXT",
    },
    "GDP_per_capita": {
        datatype: "TEXT",
    },
    "Literacy_percentage": {
        datatype: "TEXT",
    },
    "Phones_per_1000": {
        datatype: "TEXT",
    },
    "Arable_percentage": {
        datatype: "TEXT",
    },
    "Crops_percentage": {
        datatype: "TEXT",
    },
    "Other_percentage": {
        datatype: "TEXT",
    },
    "Climate": {
        datatype: "TEXT",
    },
    "Birthrate": {
        datatype: "TEXT",
    },
    "Deathrate": {
        datatype: "TEXT",
    },
    "Agriculture": {
        datatype: "TEXT",
    },
    "Industry": {
        datatype: "TEXT",
    },
    "Service": {
        datatype: "TEXT",
    },
    constraints: ``,
});