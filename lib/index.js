"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var csvParse = require("csv-parse");
var util_1 = require("./util");
var validator_1 = require("./validator");
var Generator_1 = require("./Generator");
var util_2 = require("./util");
exports.start = function (config) {
    if (validator_1.isValidConfig(config)) {
        console.log("Received Valid Configuration");
        var csvPath_1 = config.csvPath, outDir_1 = config.outDir;
        fs.createReadStream(csvPath_1).pipe(csvParse({ delimiter: ',' }, function (err, data) {
            if (err)
                throw err;
            if (validator_1.notUndefined(data)) {
                var json = util_1.convert(csvPath_1, data);
                var opmoFiles = Generator_1.Generator(json);
                var exportPath = path.dirname(require.main.filename) + outDir_1;
                util_2.exportAll(opmoFiles).to(exportPath);
            }
        }));
    }
};
//# sourceMappingURL=index.js.map