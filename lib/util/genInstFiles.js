"use strict";
exports.__esModule = true;
var validator_1 = require("../validator");
var InstFile_1 = require("../InstFile");
function genInstFiles(score) {
    var instFiles = [];
    var time = score.time;
    score.insts.forEach(function (inst) {
        if (validator_1.isValidInst(inst, time)) {
            instFiles.push(new InstFile_1.InstFile(inst, time));
        }
    });
    return instFiles;
}
exports.genInstFiles = genInstFiles;
//# sourceMappingURL=genInstFiles.js.map