const {
    db,
    setUpDatabase
} = require("./index");

setUpDatabase(db).then(() => process.kill());