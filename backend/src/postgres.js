const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    port: 5432,
    database: "teste",
});

async function setUpDatabase(db){
    await db.connect();
    const sql = require("./tables/comunication_and_information");

    //https://www.robinwieruch.de/postgres-sql-macos-setup
    //await db.query(sql.sqlCreateCommand);

    await db.query(sql.sqlInsertCommand);
    const response = await db.query("SELECT * FROM comunication_and_information");
    console.log(response.rows)

}

module.exports = {
    db: client,
    setUpDatabase
}