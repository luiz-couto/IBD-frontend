const { convertCSVToSQL } = require("../../../utils/csv-to-sql");
const path = require("path");

module.exports = convertCSVToSQL("demographic_and_socio_economic", path.resolve("src/db/tables/demographic_and_socio_economic","./DEMO_DS_09112019142936632.csv"), "|", {
    "DEMO_IND": {
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