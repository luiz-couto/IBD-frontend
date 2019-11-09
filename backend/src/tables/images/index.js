const fs = require("fs");
const path = require("path");

let sqlCreateCommand = `CREATE TABLE IMAGES(
    country TEXT NOT NULL,
    data TEXT,
    PRIMARY KEY (country)
)`;

const brazilBuffer = fs.readFileSync(path.resolve(".","src","tables","images","brazil.jpg"));
const brazilImage = new Buffer(brazilBuffer).toString("base64");
let sqlInsertCommand = 
`INSERT INTO IMAGES
VALUES ('Brazil', '${brazilImage}');`;


module.exports = {
    sqlCreateCommand,
    sqlInsertCommand,
};
