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

    //https://www.robinwieruch.de/postgres-sql-macos-setup
    try {
        await db.query(comunication_and_information.sqlCreateCommand);
        await db.query(comunication_and_information.sqlInsertCommand);
    } catch(e) {
        console.log(e.message);
    }


    // const response = await db.query("SELECT * FROM comunication_and_information");
    //console.log(response.rows)

}

module.exports = {
    db: client,
    setUpDatabase
}