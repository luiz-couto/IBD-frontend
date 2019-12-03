const { Client } = require('pg')
const path = require("path");

const client = new Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "postgres"
});

async function setUpDatabase(db){
    await db.connect();

    const comunication_and_information = require("./tables/comunication_and_information");
    const demographic_and_socio_economic = require("./tables/demographic_and_socio_economic");
    const innovation = require("./tables/innovation");
    const countries_of_the_world = require("./tables/countries_of_the_world");
    const interstate_wars = require("./tables/interstate_wars");
    const soocer_matches = require("./tables/soocer_matches");

    //https://www.robinwieruch.de/postgres-sql-macos-setup

    await db.query(comunication_and_information.sqlCreateCommand);
    await db.query(comunication_and_information.sqlInsertCommand);

    await db.query(demographic_and_socio_economic.sqlCreateCommand);
    await db.query(demographic_and_socio_economic.sqlInsertCommand);

    await db.query(innovation.sqlCreateCommand);
    await db.query(innovation.sqlInsertCommand);

    await db.query(countries_of_the_world.sqlCreateCommand);
    await db.query(countries_of_the_world.sqlInsertCommand);

    await db.query(interstate_wars.sqlCreateCommand);
    await db.query(interstate_wars.sqlInsertCommand);


    await db.query(soocer_matches.sqlCreateCommand);
    await db.query(soocer_matches.sqlInsertCommand);


    await db.query(
        `SELECT * INTO fight_war FROM interstate_wars;`
    );
    await db.query(
        `SELECT * INTO war_state_code FROM interstate_wars;`
    );

    await db.query(
        `ALTER TABLE fight_war
        DROP COLUMN warname,
        DROP COLUMN wartype,
        DROP COLUMN statename,
        DROP COLUMN startyear1,
        DROP COLUMN startmonth1,
        DROP COLUMN startday1,
        DROP COLUMN endmonth1,
        DROP COLUMN endday1,
        DROP COLUMN endyear1,
        DROP COLUMN startyear2,
        DROP COLUMN startmonth2,
        DROP COLUMN startday2,
        DROP COLUMN endyear2,
        DROP COLUMN endmonth2,
        DROP COLUMN endday2,
        DROP COLUMN previouswar,
        DROP COLUMN initiation,
        DROP COLUMN combatlocation,
        DROP COLUMN outcome,
        DROP COLUMN nextwar;`
        );
    await db.query(
        `ALTER TABLE war_state_code
        DROP COLUMN warname,
        DROP COLUMN side,
        DROP COLUMN warid,
        DROP COLUMN wartype,
        DROP COLUMN startyear1,
        DROP COLUMN startmonth1,
        DROP COLUMN startday1,
        DROP COLUMN endmonth1,
        DROP COLUMN endday1,
        DROP COLUMN endyear1,
        DROP COLUMN startyear2,
        DROP COLUMN startmonth2,
        DROP COLUMN startday2,
        DROP COLUMN endyear2,
        DROP COLUMN endmonth2,
        DROP COLUMN endday2,
        DROP COLUMN previouswar,
        DROP COLUMN initiation,
        DROP COLUMN combatlocation,
        DROP COLUMN outcome,
        DROP COLUMN combatfatalities,
        DROP COLUMN nextwar;`
        );


    await db.query(
        `ALTER TABLE interstate_wars
        DROP COLUMN statecode,
        DROP COLUMN statename,
        DROP COLUMN nextwar,
        DROP COLUMN previouswar,
        DROP COLUMN wartype,
        DROP COLUMN side,
        DROP COLUMN startyear2,
        DROP COLUMN startmonth2,
        DROP COLUMN startday2,
        DROP COLUMN endyear2,
        DROP COLUMN endmonth2,
        DROP COLUMN combatfatalities,
        DROP COLUMN endday2;` 
    );
    await db.query(
        `ALTER TABLE interstate_wars
        RENAME COLUMN startyear1 TO startyear;`
    );
    await db.query(
        `ALTER TABLE interstate_wars
        RENAME COLUMN startday1 TO startday;`
    );
    await db.query(
        `ALTER TABLE interstate_wars
        RENAME COLUMN startmonth1 TO startmonth;` 
    );
    await db.query(
        `ALTER TABLE interstate_wars
        RENAME COLUMN endyear1 TO endyear;`
    );
    await db.query(
        `ALTER TABLE interstate_wars
        RENAME COLUMN endmonth1 TO endmonth;`
    );
    await db.query(
        `ALTER TABLE interstate_wars
        RENAME COLUMN endday1 TO endday;` 
    );

    await db.query(
        `DELETE FROM interstate_wars a USING (
            SELECT MIN(ctid) as ctid, warid
                FROM interstate_wars 
                GROUP BY warid HAVING COUNT(*) > 1
            ) b
            WHERE a.warid = b.warid 
            AND a.ctid <> b.ctid`);
    await db.query(
        `DELETE FROM war_state_code a USING (
            SELECT MIN(ctid) as ctid, statecode
                FROM war_state_code 
                GROUP BY statecode HAVING COUNT(*) > 1
            ) b
            WHERE a.statecode = b.statecode 
            AND a.ctid <> b.ctid`);



    await db.query(
        `ALTER TABLE countries_of_the_world
        DROP COLUMN countryid,
        DROP COLUMN blank1,
        DROP COLUMN blank2,
        DROP COLUMN blank3,
        DROP COLUMN blank4,
        DROP COLUMN blank5,
        DROP COLUMN blank6,
        DROP COLUMN blank7;`
        );
    await db.query(
        `ALTER TABLE countries_of_the_world
        RENAME COLUMN countryname TO country;`
        );
    await db.query(
        `ALTER TABLE comunication_and_information
        DROP COLUMN flags,
        DROP COLUMN flagcodes,
        DROP COLUMN time1;`
        );
    await db.query(
        `ALTER TABLE demographic_and_socio_economic
        DROP COLUMN flags,
        DROP COLUMN flagcodes,
        DROP COLUMN time1;`
        );
    await db.query(
        `ALTER TABLE innovation
        DROP COLUMN flags,
        DROP COLUMN flagcodes,
        DROP COLUMN time1;`
        );
    await db.query(
        `ALTER TABLE war_state_code
        RENAME COLUMN statename TO country;`
    );
    await db.query(
        `ALTER TABLE war_state_code
        RENAME COLUMN statecode TO code;`
    );


    await db.query(`COPY countries_of_the_world TO '${path.resolve("./csv/countries.csv")}' DELIMITER ',' CSV HEADER;`);
    await db.query(`COPY interstate_wars TO '${path.resolve("./csv/wars.csv")}' DELIMITER ',' CSV HEADER;`);
    await db.query(`COPY fight_war TO '${path.resolve("./csv/fight_war.csv")}' DELIMITER ',' CSV HEADER;`);
    await db.query(`COPY war_state_code TO '${path.resolve("./csv/wars_country_code.csv")}' DELIMITER ',' CSV HEADER;`);
    await db.query(`COPY comunication_and_information TO '${path.resolve("./csv/comunication_and_information.csv")}' DELIMITER '|' CSV HEADER;`);
    await db.query(`COPY demographic_and_socio_economic TO '${path.resolve("./csv/demographic_and_socio_economic.csv")}' DELIMITER '|' CSV HEADER;`);
    await db.query(`COPY innovation TO '${path.resolve("./csv/innovation.csv")}' DELIMITER '|' CSV HEADER;`);
    await db.query(`COPY soocer_matches TO '${path.resolve("./csv/soocer_matches.csv")}' DELIMITER ',' CSV HEADER;`);
}

setUpDatabase(client).then(() => {
    process.exit();
});