var fs = require("fs");
var path = require("path");

function getKey(properties, column){
    const keys = Object.keys(properties);
    let _key;
    keys.forEach(key => {
        let regex = RegExp(key);
        if(regex.test(column)){
            //console.log(column);
            _key = key;
        }
    });
    return _key;
}

function makeCreateOperation(tableName, _columns, properties){
    
    columns = _columns.map((column) => {
        column = column.replace(/"/g, '');
        column = column.replace(/\r/g, '');
        return column;
    });

    //console.log(columns);

    let sqlCreate = columns.map((column) => {
        const key = getKey(properties, column);
            
        if(!properties[key]){
            return;
        }
 
        const options = properties[key];

        let _key = key.replace(/ /g, '').replace(/_/g, '').toLowerCase();
        return `${_key} ${options.datatype}`;

    });

    console.log(sqlCreate)

    sqlCreate = sqlCreate.filter(function (el) {
        return el != undefined;
    });
    return `CREATE TABLE ${tableName} (\n${sqlCreate.join(",\n")}${properties.constraints? ",\n" + properties.constraints: ''});\n`;
}

function makeInsertCommand(tableName, textByLine, separator, properties){
    let columns = textByLine[0].split(separator);
    
    columns = columns.map((column) => {
        column = column.replace(/"/g, '');
        column = column.replace(/\r/g, '');
        return column;
    });

    let sqlColumns = columns.map((column) => {
        const key = getKey(properties, column);
            
        if(!properties[key]){
            return;
        }
 
        let _key = key.replace(/ /g, '').replace(/_/g, '').toLowerCase();
        return `${_key}`;
    });

    sqlColumns = sqlColumns.filter(function (el) {
        return el != undefined;
    });

    sqlColumns = sqlColumns.join(",");
    
    let sqlInsertCommand = `INSERT INTO ${tableName} (${sqlColumns})\nVALUES `;
// textByLine.length-1
    for(let i=1; i<textByLine.length-1; i++){
        if(separator == ","){
            let newLine = textByLine[i].replace(/"[^"]+"/g, function(v) { 
                return v.replace(/,/g, '.');
            });
            textByLine[i] = newLine;
        }
        let values = textByLine[i].split(separator);
        values = values.map((value) => {
            value = value.replace(/'/g,'');
            value = value.replace(/"/g, "'");
            value = value.replace(/\r/, '');
            
            if(value === "" || !value){
                value = "NULL";
            }
            return value;
        });
        values = values.join(",");
        sqlInsertCommand += `(${values}),\n`;

    }

    sqlInsertCommand = sqlInsertCommand.substring(0, sqlInsertCommand.length - 2);
    sqlInsertCommand+=";"
    return sqlInsertCommand;
}

function convertCSVToSQL (tableName, file, separator, properties) {
    let separatorCharacter = separator;

    let text = fs.readFileSync(path.resolve("src","tables",file)).toString();

    let textByLine = text.split("\n");

    let _columns = textByLine[0].split(separatorCharacter);
    for(let i=0; i<_columns.length; i++){
        for(let j=0; j<_columns.length; j++){
            let t0 = _columns[i].replace(/ /g, '').replace(/_/g, '').toLowerCase();
            let t1 = _columns[j].replace(/ /g, '').replace(/_/g, '').toLowerCase();

            if(i!=j && t0 === t1){
                _columns[j] = _columns[j]+ "1";
            }
        }        
    }

    textByLine[0] = _columns.join(separatorCharacter);
    let columns = textByLine[0].split(separatorCharacter);

    let sqlCreateCommand = makeCreateOperation(tableName, columns, properties);
    let sqlInsertCommand = makeInsertCommand(tableName, textByLine, separatorCharacter, properties);
    return {sqlCreateCommand, sqlInsertCommand};
}


module.exports = {convertCSVToSQL};