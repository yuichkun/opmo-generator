"use strict";
exports.__esModule = true;
var exportAll_1 = require("./exportAll");
exports.exportAll = exportAll_1.exportAll;
var jsonConverter_1 = require("./jsonConverter");
exports.convert = jsonConverter_1.convert;
var Logger_1 = require("./Logger");
exports.Logger = Logger_1.Logger;
var genInstFiles_1 = require("./genInstFiles");
exports.genInstFiles = genInstFiles_1.genInstFiles;
var math = require("mathjs");
function addTimeSigs(timeSigA, timeSigB) {
    var sum = math.add(math.fraction(timeSigA), math.fraction(timeSigB));
    return sum.toString();
}
exports.addTimeSigs = addTimeSigs;
//# sourceMappingURL=index.js.map