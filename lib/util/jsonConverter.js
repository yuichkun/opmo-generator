"use strict";
exports.__esModule = true;
var Logger_1 = require("./Logger");
exports.convert = function (csvPath, csv) {
    Logger_1.Logger.readCSV(csvPath, csv);
    var score = {};
    score.time = extractData(csv[0]);
    var rowInsts = csv.slice(1, csv.length);
    score.insts = rowInsts.map(function (rowInst) {
        var name = rowInst[0];
        var actions = rowInst.slice(1, rowInst.length);
        return {
            name: name,
            actions: actions
        };
    });
    Logger_1.Logger.convertToJSON(score);
    return score;
};
function extractData(arr) {
    return arr.slice(1, arr.length);
}
//# sourceMappingURL=jsonConverter.js.map