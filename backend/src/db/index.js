const { Client } = require('pg')
const { convertCSVToSQL } = require("../utils/csv-to-sql");
const path = require("path");
const client = new Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "postgres"
});

async function setUpDatabase(db){
    const communication_and_information = convertCSVToSQL("comunication_and_information",path.resolve("src/db","./csv/comunication_and_information.csv").toString(), "|", {
        "caiind": {
            datatype: "TEXT",
        },
        "indicator": {
            datatype: "TEXT",
        },
        "location": {
            datatype: "TEXT",
        },
        "country": {
            datatype: "TEXT",
        },
        "time": {
            datatype: "INTEGER",
        },
        "value": {
            datatype: "NUMERIC",
        },
        constraints: ``,
    });
    const demographic_and_socioeconomics = convertCSVToSQL("demographic_and_socio_economic", path.resolve("src/db","./csv/demographic_and_socio_economic.csv").toString(), "|", {
        "demoind": {
            datatype: "TEXT",
        },
        "indicator": {
            datatype: "TEXT",
        },
        "location": {
            datatype: "TEXT",
        },
        "country": {
            datatype: "TEXT",
        },
        "time": {
            datatype: "INTEGER",
        },
        "value": {
            datatype: "NUMERIC",
        },
        constraints: ``,
    });
    const countries = convertCSVToSQL("countries", path.resolve("src/db","./csv/countries.csv").toString(), ",", {
        "country": {
            datatype: "TEXT",
        },
        "hdi": {
            datatype: "FLOAT",
        },
        "lifeexpectancy": {
            datatype: "FLOAT",
        },
        "expectedyearsschooling": {
            datatype: "FLOAT",
        },
        "meanyearsschooling": {
            datatype: "FLOAT",
        },
        "gnipercapita": {
            datatype: "INTEGER",
        },
        "gnipercapitarank": {
            datatype: "INTEGER",
        },
        "hdirank": {
            datatype: "TEXT",
        },
    });
    const innovation = convertCSVToSQL("innovation", path.resolve("src/db","./csv/innovation.csv").toString(), "|", {
        "innovind": {
            datatype: "TEXT",
        },
        "indicator": {
            datatype: "TEXT",
        },
        "location": {
            datatype: "TEXT",
        },
        "country": {
            datatype: "TEXT",
        },
        "time": {
            datatype: "integer",
        },
        "value": {
            datatype: "NUMERIC",
        },
        constraints: ``,
    });
    const wars = convertCSVToSQL("wars", path.resolve("src/db","./csv/wars.csv").toString(), ",", {
        "warid": {
            datatype: "INTEGER",
        },
        "warname": {
            datatype: "TEXT",
        },
        "startyear": {
            datatype: "INTEGER",
        },
        "startmonth": {
            datatype: "INTEGER",
        },
        "startday": {
            datatype: "INTEGER",
        },
        "endyear": {
            datatype: "INTEGER",
        },
        "endmonth": {
            datatype: "INTEGER",
        },
        "endday": {
            datatype: "INTEGER",
        },
        "initiation": {
            datatype: "INTEGER",
        },
        "combatlocation": {
            datatype: "INTEGER",
        },
        "outcome": {
            datatype: "INTEGER",
        },
        constraints: ``,
    });
    const wars_country_code = convertCSVToSQL("wars_country_code", path.resolve("src/db","./csv/wars_country_code.csv").toString(), ",", {
        "code": {
            datatype: "INTEGER",
        },
        "country": {
            datatype: "TEXT",
        },
    });
    const fight_war = convertCSVToSQL("fight_war", path.resolve("src/db","./csv/fight_war.csv").toString(), ",", {
        "warid": {
            datatype: "INTEGER",
        },
        "code": {
            datatype: "INTEGER",
        },
        "side": {
            datatype: "INTEGER",
        },
        "combatfatalities": {
            datatype: "INTEGER",
        },
    });
    const soocer_matches = convertCSVToSQL("soocer_matches", path.resolve("src/db","./csv/soocer_matches.csv").toString(), ",", {
        "date": {
            datatype: "DATE",
        },
        "hometeam": {
            datatype: "TEXT",
        },
        "awayteam": {
            datatype: "TEXT",
        },
        "homescore": {
            datatype: "INTEGER",
        },
        "awayscore": {
            datatype: "INTEGER",
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

    const images = require("./images");

    await db.connect();
    try {
        await Promise.all([
            db.query(images.sqlCreateCommand),
            db.query(images.sqlInsertCommand),
            db.query(communication_and_information.sqlCreateCommand),
            db.query(communication_and_information.sqlInsertCommand),
            db.query(demographic_and_socioeconomics.sqlCreateCommand),
            db.query(demographic_and_socioeconomics.sqlInsertCommand),
            db.query(countries.sqlCreateCommand),
            db.query(countries.sqlInsertCommand),
            db.query(innovation.sqlCreateCommand),
            db.query(innovation.sqlInsertCommand),
            db.query(wars.sqlCreateCommand),
            db.query(wars.sqlInsertCommand),
            db.query(wars_country_code.sqlCreateCommand),
            db.query(wars_country_code.sqlInsertCommand),
            db.query(fight_war.sqlCreateCommand),
            db.query(fight_war.sqlInsertCommand),
            db.query(soocer_matches.sqlCreateCommand),
            db.query(soocer_matches.sqlInsertCommand),
        ]);
    } catch(e) {
        console.log(e);
    }
}

module.exports = {
    db: client,
    setUpDatabase
}