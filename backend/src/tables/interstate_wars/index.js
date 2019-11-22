const { convertCSVToSQL } = require("../../utils/csv-to-sql");

module.exports = convertCSVToSQL("interstate_wars", "./interstate_wars/interstate_wars.csv", ",", {
    "war_id": {
        datatype: "NUMERIC",
    },
    "war_name": {
        datatype: "TEXT",
    },
    "war_type": {
        datatype: "NUMERIC",
    },
    "state_code": {
        datatype: "NUMERIC",
    },
    "state_name": {
        datatype: "TEXT",
    },
    "side": {
        datatype: "NUMERIC",
    },
    "start_year1": {
        datatype: "NUMERIC",
    },
    "start_month1": {
        datatype: "NUMERIC",
    },
    "start_day1": {
        datatype: "NUMERIC",
    },
    "end_year1": {
        datatype: "NUMERIC",
    },
    "end_month1": {
        datatype: "NUMERIC",
    },
    "end_day1": {
        datatype: "NUMERIC",
    },
    "start_year2": {
        datatype: "NUMERIC",
    },
    "start_month2": {
        datatype: "NUMERIC",
    },
    "start_day2": {
        datatype: "NUMERIC",
    },
    "end_year2": {
        datatype: "NUMERIC",
    },
    "end_month2": {
        datatype: "NUMERIC",
    },
    "end_day2": {
        datatype: "NUMERIC",
    },
    "previous_war": {
        datatype: "NUMERIC",
    },
    "initiation": {
        datatype: "NUMERIC",
    },
    "combat_location": {
        datatype: "NUMERIC",
    },
    "combat_fatalities": {
        datatype: "NUMERIC",
    },
    "outcome": {
        datatype: "NUMERIC",
    },
    "next_war": {
        datatype: "NUMERIC",
    },
    

    
    
    constraints: ``,
});