const { convertCSVToSQL } = require("../../../utils/csv-to-sql");
const path = require("path");

module.exports = convertCSVToSQL("innovation", path.resolve("src/db/tables/innovation","./INNOV_DS_09112019143241120.csv"),"|", {
    "INNOV_IND": {
        datatype: "TEXT",
    },
    "Indicator": {
        datatype: "TEXT",
    },
    "LOCATION": {
        datatype: "TEXT",
    },
    "Country": {
        datatype: "TEXT",
    },
    "TIME": {
        datatype: "TEXT",
    },
    "Time1": {
        datatype: "TEXT",
    },
    "Value": {
        datatype: "NUMERIC",
    },
    "Flag Codes": {
        datatype: "TEXT",
    },
    "Flags": {
        datatype: "TEXT",
    },
    constraints: ``,
});