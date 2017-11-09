"use strict";
exports.__esModule = true;
var MainFile_1 = require("./MainFile");
var util_1 = require("./util");
exports.Generator = function (score) {
    var mainFile = new MainFile_1.MainFile(score);
    var instFiles = util_1.genInstFiles(score);
    return Array(mainFile).concat(instFiles);
};
//# sourceMappingURL=Generator.js.map