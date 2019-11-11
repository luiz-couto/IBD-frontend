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

const south_africaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","south_africa.jpg"));
const south_africaImage = new Buffer(south_africaBuffer).toString("base64");

const portugalBuffer = fs.readFileSync(path.resolve(".","src","tables","images","portugal.jpg"));
const portugalImage = new Buffer(portugalBuffer).toString("base64");

const spainBuffer = fs.readFileSync(path.resolve(".","src","tables","images","spain.jpg"));
const spainImage = new Buffer(spainBuffer).toString("base64");

const greeceBuffer = fs.readFileSync(path.resolve(".","src","tables","images","greece.jpg"));
const greeceImage = new Buffer(greeceBuffer).toString("base64");

const mexicoBuffer = fs.readFileSync(path.resolve(".","src","tables","images","mexico.jpg"));
const mexicoImage = new Buffer(mexicoBuffer).toString("base64");

const finlandBuffer = fs.readFileSync(path.resolve(".","src","tables","images","finland.jpg"));
const finlandImage = new Buffer(finlandBuffer).toString("base64");

const netherlandsBuffer = fs.readFileSync(path.resolve(".","src","tables","images","netherlands.jpg"));
const netherlandsImage = new Buffer(netherlandsBuffer).toString("base64");

const irelandBuffer = fs.readFileSync(path.resolve(".","src","tables","images","ireland.jpg"));
const irelandImage = new Buffer(irelandBuffer).toString("base64");

const swedenBuffer = fs.readFileSync(path.resolve(".","src","tables","images","sweden.jpg"));
const swedenImage = new Buffer(swedenBuffer).toString("base64");

const denmarkBuffer = fs.readFileSync(path.resolve(".","src","tables","images","denmark.jpg"));
const denmarkImage = new Buffer(denmarkBuffer).toString("base64");

const switzerlandBuffer = fs.readFileSync(path.resolve(".","src","tables","images","switzerland.jpg"));
const switzerlandImage = new Buffer(switzerlandBuffer).toString("base64");

const norwayBuffer = fs.readFileSync(path.resolve(".","src","tables","images","norway.jpg"));
const norwayImage = new Buffer(norwayBuffer).toString("base64");

const bulgariaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","bulgaria.jpg"));
const bulgariaImage = new Buffer(bulgariaBuffer).toString("base64");

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
('Canada', '${canadaImage}'),
('South Africa', '${south_africaImage}'),
('Portugal', '${portugalImage}'),
('Spain', '${spainImage}'),
('Greece', '${greeceImage}'),
('Mexico', '${mexicoImage}'),
('Finland', '${finlandImage}'),
('Netherlands', '${netherlandsImage}'),
('Ireland', '${irelandImage}'),
('Sweden', '${swedenImage}'),
('Denmark', '${denmarkImage}'),
('Switzerland', '${switzerlandImage}'),
('Norway', '${norwayImage}'),
('Bulgaria', '${bulgariaImage}')
;`;

module.exports = {
    sqlCreateCommand,
    sqlInsertCommand,
};
