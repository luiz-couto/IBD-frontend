const { convertCSVToSQL } = require("../../utils/csv-to-sql");

module.exports = convertCSVToSQL("soocer_matches", "./soocer_matches/results.csv", ",", {
    "date": {
        datatype: "TEXT",
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