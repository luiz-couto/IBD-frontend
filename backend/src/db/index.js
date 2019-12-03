const { Client } = require('pg')
const { convertCSVToSQL } = require("../utils/csv-to-sql");
const path = require("path");
const client = new Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "postgres",
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
        constraints: `PRIMARY KEY (indicator, country, time)`,
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
        constraints: `PRIMARY KEY (indicator, country, time)`,
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
        constraints: `PRIMARY KEY (country, hdirank)`,
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
            datatype: "INTEGER",
        },
        "value": {
            datatype: "NUMERIC",
        },
        constraints: `PRIMARY KEY (indicator, country, time)`,

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
        "outcome": {
            datatype: "INTEGER",
        },
        constraints: `PRIMARY KEY (warid)`,
    });
    const wars_country_code = convertCSVToSQL("wars_country_code", path.resolve("src/db","./csv/wars_country_code.csv").toString(), ",", {
        "code": {
            datatype: "INTEGER",
        },
        "country": {
            datatype: "TEXT",
        },
        constraints: `PRIMARY KEY (country)`,
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
        "combatlocation": {
            datatype: "INTEGER",
        },
        constraints: `PRIMARY KEY (warid,code, side)`,
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
        constraints: `PRIMARY KEY (date, hometeam, awayteam, homescore, awayscore)`,
    });

    const images = require("./images");

    await db.connect();
    try {
        await db.query(countries.sqlCreateCommand);
        await db.query(countries.sqlInsertCommand);
        await db.query(images.sqlCreateCommand);
        await db.query(images.sqlInsertCommand);
        await db.query(communication_and_information.sqlCreateCommand);
        await db.query(communication_and_information.sqlInsertCommand);
        await db.query(demographic_and_socioeconomics.sqlCreateCommand);
        await db.query(demographic_and_socioeconomics.sqlInsertCommand);
        await db.query(innovation.sqlCreateCommand);
        await db.query(innovation.sqlInsertCommand);
        await db.query(wars.sqlCreateCommand);
        await db.query(wars.sqlInsertCommand);
        await db.query(wars_country_code.sqlCreateCommand);
        await db.query(wars_country_code.sqlInsertCommand);
        await db.query(fight_war.sqlCreateCommand);
        await db.query(fight_war.sqlInsertCommand);
        await db.query(soocer_matches.sqlCreateCommand);
        await db.query(soocer_matches.sqlInsertCommand);
    } catch(e) {
        console.log(e);
    }
}

module.exports = {
    db: client,
    setUpDatabase
}