const { convertCSVToSQL } = require("../../utils/csv-to-sql");

module.exports = convertCSVToSQL("comunication_and_information", "./comunication_and_information/CAI_DS_27102019203343442.csv", "|", {
    "CAI_IND": {
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