const { convertCSVToSQL } = require("../../../utils/csv-to-sql");
const path = require("path");

module.exports = convertCSVToSQL("interstate_wars", path.resolve("src/db/tables/interstate_wars","./interstate_wars.csv"), ",", {
    "war_id": {
        datatype: "TEXT",
    },
    "war_name": {
        datatype: "TEXT",
    },
    "war_type": {
        datatype: "TEXT",
    },
    "state_code": {
        datatype: "TEXT",
    },
    "state_name": {
        datatype: "TEXT",
    },
    "side": {
        datatype: "TEXT",
    },
    "start_year1": {
        datatype: "TEXT",
    },
    "start_month1": {
        datatype: "TEXT",
    },
    "start_day1": {
        datatype: "TEXT",
    },
    "end_year1": {
        datatype: "TEXT",
    },
    "end_month1": {
        datatype: "TEXT",
    },
    "end_day1": {
        datatype: "TEXT",
    },
    "start_year2": {
        datatype: "TEXT",
    },
    "start_month2": {
        datatype: "TEXT",
    },
    "start_day2": {
        datatype: "TEXT",
    },
    "end_year2": {
        datatype: "TEXT",
    },
    "end_month2": {
        datatype: "TEXT",
    },
    "end_day2": {
        datatype: "TEXT",
    },
    "previous_war": {
        datatype: "TEXT",
    },
    "initiation": {
        datatype: "TEXT",
    },
    "combat_location": {
        datatype: "TEXT",
    },
    "combat_fatalities": {
        datatype: "TEXT",
    },
    "outcome": {
        datatype: "TEXT",
    },
    "next_war": {
        datatype: "TEXT",
    },
    

    
    
    constraints: ``,
});