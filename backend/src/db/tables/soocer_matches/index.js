const { convertCSVToSQL } = require("../../../utils/csv-to-sql");
const path = require("path");

module.exports = convertCSVToSQL("soocer_matches", path.resolve("src/db/tables/soocer_matches","./results.csv"), ",", {
    "date": {
        datatype: "DATE",
    },
    "home_team": {
        datatype: "TEXT",
    },
    "away_team": {
        datatype: "TEXT",
    },
    "home_score": {
        datatype: "TEXT",
    },
    "away_score": {
        datatype: "TEXT",
    },
    "tournament": {
        datatype: "TEXT",
    },
    "city": {
        datatype: "TEXT",
    },
    "country": {
        datatype: "TEXT",
    },
    "neutral": {
        datatype: "TEXT",
    },
});