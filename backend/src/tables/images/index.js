const fs = require("fs");
const path = require("path");

let sqlCreateCommand = `CREATE TABLE IMAGES(
    country TEXT NOT NULL,
    data TEXT,
    PRIMARY KEY (country)
)`;

const brazilBuffer = fs.readFileSync(path.resolve(".","src","tables","images","brazil.jpg"));
const brazilImage = new Buffer(brazilBuffer).toString("base64");

const italyBuffer = fs.readFileSync(path.resolve(".","src","tables","images","italy.jpg"));
const italyImage = new Buffer(italyBuffer).toString("base64");

const japanBuffer = fs.readFileSync(path.resolve(".","src","tables","images","japan.jpg"));
const japanImage = new Buffer(japanBuffer).toString("base64");

const germanyBuffer = fs.readFileSync(path.resolve(".","src","tables","images","germany.jpg"));
const germanyImage = new Buffer(germanyBuffer).toString("base64");

const franceBuffer = fs.readFileSync(path.resolve(".","src","tables","images","france.jpg"));
const franceImage = new Buffer(franceBuffer).toString("base64");

const usaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","usa.jpg"));
const usaImage = new Buffer(usaBuffer).toString("base64");

const chinaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","china.jpg"));
const chinaImage = new Buffer(chinaBuffer).toString("base64");

const indiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","india.jpg"));
const indiaImage = new Buffer(indiaBuffer).toString("base64");

const belgiumBuffer = fs.readFileSync(path.resolve(".","src","tables","images","belgium.jpg"));
const belgiumImage = new Buffer(belgiumBuffer).toString("base64");

const canadaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","canada.jpg"));
const canadaImage = new Buffer(canadaBuffer).toString("base64");


let sqlInsertCommand = 
`INSERT INTO IMAGES
VALUES 
('Brazil', '${brazilImage}'),
('Italy', '${italyImage}'),
('Japan', '${japanImage}'),
('Germany', '${germanyImage}'),
('France', '${franceImage}'),
('USA', '${usaImage}'),
('China', '${chinaImage}'),
('India', '${indiaImage}'),
('Belgium', '${belgiumImage}'),
('Canada', '${canadaImage}')
;`;

module.exports = {
    sqlCreateCommand,
    sqlInsertCommand,
};
