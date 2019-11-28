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

const estoniaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","estonia.jpg"));
const estoniaImage = new Buffer(estoniaBuffer).toString("base64");

const united_kingdomBuffer = fs.readFileSync(path.resolve(".","src","tables","images","united_kingdom.jpg"));
const united_kingdomImage = new Buffer(united_kingdomBuffer).toString("base64");

const luxembourgBuffer = fs.readFileSync(path.resolve(".","src","tables","images","luxembourg.jpg"));
const luxembourgImage = new Buffer(luxembourgBuffer).toString("base64");

const new_zealandBuffer = fs.readFileSync(path.resolve(".","src","tables","images","new_zealand.jpg"));
const new_zealandImage = new Buffer(new_zealandBuffer).toString("base64");

const austriaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","austria.jpg"));
const austriaImage = new Buffer(austriaBuffer).toString("base64");

const australiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","australia.jpg"));
const australiaImage = new Buffer(australiaBuffer).toString("base64");

const singaporeBuffer = fs.readFileSync(path.resolve(".","src","tables","images","singapore.jpg"));
const singaporeImage = new Buffer(singaporeBuffer).toString("base64");

const south_koreaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","south_korea.jpg"));
const south_koreaImage = new Buffer(south_koreaBuffer).toString("base64");

const moldovaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","moldova.jpg"));
const moldovaImage = new Buffer(moldovaBuffer).toString("base64");

const slovakiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","slovakia.jpg"));
const slovakiaImage = new Buffer(slovakiaBuffer).toString("base64");

const chileBuffer = fs.readFileSync(path.resolve(".","src","tables","images","chile.jpg"));
const chileImage = new Buffer(chileBuffer).toString("base64");

const argentinaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","argentina.jpg"));
const argentinaImage = new Buffer(argentinaBuffer).toString("base64");

const colombiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","colombia.jpg"));
const colombiaImage = new Buffer(colombiaBuffer).toString("base64");

const peruBuffer = fs.readFileSync(path.resolve(".","src","tables","images","peru.jpg"));
const peruImage = new Buffer(peruBuffer).toString("base64");

const polandBuffer = fs.readFileSync(path.resolve(".","src","tables","images","poland.jpg"));
const polandImage = new Buffer(polandBuffer).toString("base64");

const icelandBuffer = fs.readFileSync(path.resolve(".","src","tables","images","iceland.jpg"));
const icelandImage = new Buffer(icelandBuffer).toString("base64");

const russiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","russia.jpg"));
const russiaImage = new Buffer(russiaBuffer).toString("base64");

const israelBuffer = fs.readFileSync(path.resolve(".","src","tables","images","israel.jpg"));
const israelImage = new Buffer(israelBuffer).toString("base64");

const ugandaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","uganda.jpg"));
const ugandaImage = new Buffer(ugandaBuffer).toString("base64");

const egyptBuffer = fs.readFileSync(path.resolve(".","src","tables","images","egypt.jpg"));
const egyptImage = new Buffer(egyptBuffer).toString("base64");

const saudi_arabiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","saudi_arabia.jpg"));
const saudi_arabiaImage = new Buffer(saudi_arabiaBuffer).toString("base64");

const qatarBuffer = fs.readFileSync(path.resolve(".","src","tables","images","qatar.jpg"));
const qatarImage = new Buffer(qatarBuffer).toString("base64");

const ukraineBuffer = fs.readFileSync(path.resolve(".","src","tables","images","ukraine.jpg"));
const ukraineImage = new Buffer(ukraineBuffer).toString("base64");

const uruguayBuffer = fs.readFileSync(path.resolve(".","src","tables","images","uruguay.jpg"));
const uruguayImage = new Buffer(uruguayBuffer).toString("base64");

const ecuadorBuffer = fs.readFileSync(path.resolve(".","src","tables","images","ecuador.jpg"));
const ecuadorImage = new Buffer(ecuadorBuffer).toString("base64");

const guatemalaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","guatemala.jpg"));
const guatemalaImage = new Buffer(guatemalaBuffer).toString("base64");

const croatiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","croatia.jpg"));
const croatiaImage = new Buffer(croatiaBuffer).toString("base64");

const liechtensteinBuffer = fs.readFileSync(path.resolve(".","src","tables","images","liechtenstein.jpg"));
const liechtensteinImage = new Buffer(liechtensteinBuffer).toString("base64");

const sloveniaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","slovenia.jpg"));
const sloveniaImage = new Buffer(sloveniaBuffer).toString("base64");

const czechiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","czechia.jpg"));
const czechiaImage = new Buffer(czechiaBuffer).toString("base64");

const maltaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","malta.jpg"));
const maltaImage = new Buffer(maltaBuffer).toString("base64");

const cyprusBuffer = fs.readFileSync(path.resolve(".","src","tables","images","cyprus.jpg"));
const cyprusImage = new Buffer(cyprusBuffer).toString("base64");

const arab_emiratesBuffer = fs.readFileSync(path.resolve(".","src","tables","images","arab_emirates.jpg"));
const arab_emiratesImage = new Buffer(arab_emiratesBuffer).toString("base64");

const andorraBuffer = fs.readFileSync(path.resolve(".","src","tables","images","andorra.jpg"));
const andorraImage = new Buffer(andorraBuffer).toString("base64");

const lithuaniaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","lithuania.jpg"));
const lithuaniaImage = new Buffer(lithuaniaBuffer).toString("base64");

const hungaryBuffer = fs.readFileSync(path.resolve(".","src","tables","images","hungary.jpg"));
const hungaryImage = new Buffer(hungaryBuffer).toString("base64");

const omanBuffer = fs.readFileSync(path.resolve(".","src","tables","images","oman.jpg"));
const omanImage = new Buffer(omanBuffer).toString("base64");

const montenegroBuffer = fs.readFileSync(path.resolve(".","src","tables","images","montenegro.jpg"));
const montenegroImage = new Buffer(montenegroBuffer).toString("base64");

const romaniaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","romania.jpg"));
const romaniaImage = new Buffer(romaniaBuffer).toString("base64");

const kuwaitBuffer = fs.readFileSync(path.resolve(".","src","tables","images","kuwait.jpg"));
const kuwaitImage = new Buffer(kuwaitBuffer).toString("base64");

const malaysiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","malaysia.jpg"));
const malaysiaImage = new Buffer(malaysiaBuffer).toString("base64");

const kazakhstanBuffer = fs.readFileSync(path.resolve(".","src","tables","images","kazakhstan.jpg"));
const kazakhstanImage = new Buffer(kazakhstanBuffer).toString("base64");

const iranBuffer = fs.readFileSync(path.resolve(".","src","tables","images","iran.jpg"));
const iranImage = new Buffer(iranBuffer).toString("base64");

const costa_ricaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","costa_rica.jpg"));
const costa_ricaImage = new Buffer(costa_ricaBuffer).toString("base64");

const turkeyBuffer = fs.readFileSync(path.resolve(".","src","tables","images","turkey.jpg"));
const turkeyImage = new Buffer(turkeyBuffer).toString("base64");

const panamaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","panama.jpg"));
const panamaImage = new Buffer(panamaBuffer).toString("base64");

const serbiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","serbia.jpg"));
const serbiaImage = new Buffer(serbiaBuffer).toString("base64");

const albaniaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","albania.jpg"));
const albaniaImage = new Buffer(albaniaBuffer).toString("base64");

const georgiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","georgia.jpg"));
const georgiaImage = new Buffer(georgiaBuffer).toString("base64");

const cubaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","cuba.jpg"));
const cubaImage = new Buffer(cubaBuffer).toString("base64");

const grenadaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","grenada.jpg"));
const grenadaImage = new Buffer(grenadaBuffer).toString("base64");

const sri_lankaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","sri_lanka.jpg"));
const sri_lankaImage = new Buffer(sri_lankaBuffer).toString("base64");

const venezuelaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","venezuela.jpg"));
const venezuelaImage = new Buffer(venezuelaBuffer).toString("base64");

const azerbaijanBuffer = fs.readFileSync(path.resolve(".","src","tables","images","azerbaijan.jpg"));
const azerbaijanImage = new Buffer(azerbaijanBuffer).toString("base64");

const lebanonBuffer = fs.readFileSync(path.resolve(".","src","tables","images","lebanon.jpg"));
const lebanonImage = new Buffer(lebanonBuffer).toString("base64");

const armeniaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","armenia.jpg"));
const armeniaImage = new Buffer(armeniaBuffer).toString("base64");

const thailandBuffer = fs.readFileSync(path.resolve(".","src","tables","images","thailand.jpg"));
const thailandImage = new Buffer(thailandBuffer).toString("base64");

const algeriaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","algeria.jpg"));
const algeriaImage = new Buffer(algeriaBuffer).toString("base64");

const saint_luciaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","saint_lucia.jpg"));
const saint_luciaImage = new Buffer(saint_luciaBuffer).toString("base64");

const fijiBuffer = fs.readFileSync(path.resolve(".","src","tables","images","fiji.jpg"));
const fijiImage = new Buffer(fijiBuffer).toString("base64");

const mongoliaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","mongolia.jpg"));
const mongoliaImage = new Buffer(mongoliaBuffer).toString("base64");

const jordanBuffer = fs.readFileSync(path.resolve(".","src","tables","images","jordan.jpg"));
const jordanImage = new Buffer(jordanBuffer).toString("base64");

const tunisiaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","tunisia.jpg"));
const tunisiaImage = new Buffer(tunisiaBuffer).toString("base64");

const jamaicaBuffer = fs.readFileSync(path.resolve(".","src","tables","images","jamaica.jpg"));
const jamaicaImage = new Buffer(jamaicaBuffer).toString("base64");

let sqlInsertCommand = 
`INSERT INTO IMAGES
VALUES 
('Brazil', '${brazilImage}'),
('Italy', '${italyImage}'),
('Japan', '${japanImage}'),
('Germany', '${germanyImage}'),
('France', '${franceImage}'),
('United States', '${usaImage}'),
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
('Bulgaria', '${bulgariaImage}'),
('Estonia', '${estoniaImage}'),
('Un. Kingdom', '${united_kingdomImage}'),
('Luxembourg', '${luxembourgImage}'),
('New Zealand', '${new_zealandImage}'),
('Austria', '${austriaImage}'),
('Australia', '${australiaImage}'),
('Singapore', '${singaporeImage}'),
('South Korea', '${south_koreaImage}'),
('Moldova', '${moldovaImage}'),
('Slovakia', '${slovakiaImage}'),
('Chile', '${chileImage}'),
('Argentina', '${argentinaImage}'),
('Colombia', '${colombiaImage}'),
('Peru', '${peruImage}'),
('Poland', '${polandImage}'),
('Iceland', '${icelandImage}'),
('Russia', '${russiaImage}'),
('Israel', '${israelImage}'),
('Uganda', '${ugandaImage}'),
('Egypt', '${egyptImage}'),
('Saudi Arabia', '${saudi_arabiaImage}'),
('Qatar', '${qatarImage}'),
('Ukraine', '${ukraineImage}'),
('Uruguay', '${uruguayImage}'),
('Ecuador', '${ecuadorImage}'),
('Guatemala', '${guatemalaImage}'),
('Croatia', '${croatiaImage}'),
('Liechtenstein', '${liechtensteinImage}'),
('Slovenia', '${sloveniaImage}'),
('Czechia', '${czechiaImage}'),
('Malta', '${maltaImage}'),
('Cyprus', '${cyprusImage}'),
('Arab Emirates', '${arab_emiratesImage}'),
('Andorra', '${andorraImage}'),
('Lithuania', '${lithuaniaImage}'),
('Hungary', '${hungaryImage}'),
('Oman', '${omanImage}'),
('Montenegro', '${montenegroImage}'),
('Romania', '${romaniaImage}'),
('Kuwait', '${kuwaitImage}'),
('Malaysia', '${malaysiaImage}'),
('Kazakhstan', '${kazakhstanImage}'),
('Iran', '${iranImage}'),
('Costa Rica', '${costa_ricaImage}'),
('Turkey', '${turkeyImage}'),
('Panama', '${panamaImage}'),
('Serbia', '${serbiaImage}'),
('Albania', '${albaniaImage}'),
('Georgia', '${georgiaImage}'),
('Cuba', '${cubaImage}'),
('Grenada', '${grenadaImage}'),
('Sri Lanka', '${sri_lankaImage}'),
('Venezuela', '${venezuelaImage}'),
('Azerbaijan', '${azerbaijanImage}'),
('Lebanon', '${lebanonImage}'),
('Armenia', '${armeniaImage}'),
('Thailand', '${thailandImage}'),
('Algeria', '${algeriaImage}'),
('Saint Lucia', '${saint_luciaImage}'),
('Fiji', '${fijiImage}'),
('Mongolia', '${mongoliaImage}'),
('Jordan', '${jordanImage}'),
('Tunisia', '${tunisiaImage}'),
('Jamaica', '${jamaicaImage}')
;`;

module.exports = {
    sqlCreateCommand,
    sqlInsertCommand,
};
