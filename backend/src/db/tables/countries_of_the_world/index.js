const { convertCSVToSQL } = require("../../../utils/csv-to-sql");
const path = require("path");

module.exports = convertCSVToSQL("countries_of_the_world", path.resolve("tables/countries_of_the_world","./countries_of_the_world.csv"), ",", {
    "country_id": {
        datatype: "TEXT",
    },
    "country_name": {
        datatype: "TEXT",
    },
    "HDI": {
        datatype: "TEXT",
    },
    "blank1": {
        datatype: "TEXT",
    },
    "life_expectancy": {
        datatype: "TEXT",
    },
    "blank2": {
        datatype: "TEXT",
    },
    "expected_years_schooling": {
        datatype: "TEXT",
    },
    "blank3": {
        datatype: "TEXT",
    },
    "mean_years_schooling": {
        datatype: "TEXT",
    },
    "blank4": {
        datatype: "TEXT",
    },
    "GNI_per_capita": {
        datatype: "TEXT",
    },
    "blank5": {
        datatype: "TEXT",
    },
    "gni_per_capita_rank": {
        datatype: "TEXT",
    },
    "blank6": {
        datatype: "TEXT",
    },
    "hdi_rank": {
        datatype: "TEXT",
    },
    "blank7": {
        datatype: "TEXT",
    },
    constraints: ``,
});