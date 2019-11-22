const { Client } = require('pg')

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
    const images = require("./tables/images");
    const countries_of_the_world = require("./tables/countries_of_the_world");
    const interstate_wars = require("./tables/interstate_wars");

    //https://www.robinwieruch.de/postgres-sql-macos-setup

    try {
        await db.query(comunication_and_information.sqlCreateCommand);
        await db.query(comunication_and_information.sqlInsertCommand);
    } catch(e) {
        console.log(e.message);
    }

    try {
        await db.query(demographic_and_socio_economic.sqlCreateCommand);
        await db.query(demographic_and_socio_economic.sqlInsertCommand);
    } catch(e) {
        console.log(e.message);
    }

    try {
        await db.query(innovation.sqlCreateCommand);
        await db.query(innovation.sqlInsertCommand);
    } catch(e) {
        console.log(e.message);
    }

    try {
        await db.query(images.sqlCreateCommand);
        await db.query(images.sqlInsertCommand);
    } catch(e) {
        console.log(e.message);
    }
    
    try {
        await db.query(countries_of_the_world.sqlCreateCommand);
        await db.query(countries_of_the_world.sqlInsertCommand);
    } catch(e) {
        console.log(e.message);
    }

    try {
        await db.query(interstate_wars.sqlCreateCommand);
        await db.query(interstate_wars.sqlInsertCommand);
    } catch(e) {
        console.log(e.message);
    }
}

module.exports = {
    db: client,
    setUpDatabase
}