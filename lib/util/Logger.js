"use strict";
exports.__esModule = true;
var util = require("util");
var black = '\u001b[30m';
var red = '\u001b[31m';
var green = '\u001b[32m';
var yellow = '\u001b[33m';
var blue = '\u001b[34m';
var magenta = '\u001b[35m';
var cyan = '\u001b[36m';
var white = '\u001b[37m';
var reset = '\u001b[0m';
var startEndCl = magenta;
var lineCl = green;
var fileNameCl = blue;
exports.Logger = {
    line: function () {
        console.log(lineCl + "-------------------------------------------------------------" + reset);
    },
    start: function () {
        console.log(startEndCl + "STARTED: musicXMLConverter" + reset);
        console.time("TIME");
        this.line();
    },
    readCSV: function (csvPath, csv) {
        log('READING', "CSV file from " + csvPath);
        console.log(util.inspect(csv, { colors: true, maxArrayLength: 4, showHidden: true, depth: 1 }));
        this.line();
    },
    convertToJSON: function (obj) {
        log('CONVERTING', "CSV file into JSON");
        console.log(util.inspect(obj, { colors: true, maxArrayLength: 4, showHidden: true, depth: 2 }));
        this.line();
    },
    genSnippet: function (fileName) {
        console.log('GENERATING: an opmo file for ' + fileNameCl + fileName + reset);
        this.line();
    },
    showOpmo: function (content, name) {
        log('GENERATED: ', "" + fileNameCl + name + reset);
        console.log(cyan + content + reset);
        this.line();
    },
    "export": function (name, path) {
        log("EXPORTED", fileNameCl + name + reset + " file to " + path);
        this.line();
    },
    exit: function () {
        console.log(startEndCl + "EXIT: musicXMLConverter" + reset);
        console.timeEnd("TIME");
        this.line();
    }
};
function log(systemType, content) {
    console.log("" + magenta + systemType + " " + reset + content);
}
//# sourceMappingURL=Logger.js.map