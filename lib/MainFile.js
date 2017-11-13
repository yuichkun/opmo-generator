"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
var MainFile = /** @class */ (function () {
    function MainFile(score) {
        this.name = "main";
        var instNames = this.extractNames(score);
        var fileNames = instNames.string;
        var symbolNames = instNames.symbol;
        this.content = this.genContent([
            constants_1.genLoader(fileNames),
            constants_1.genCompiler(symbolNames),
            constants_1.SHOWMIDI,
            constants_1.SHOWMUSICXML
        ]);
    }
    MainFile.prototype.genContent = function (snippets) {
        return snippets.reduce(function (accum, snippet) {
            return accum.concat(snippet);
        }, "");
    };
    MainFile.prototype.extractNames = function (score) {
        var insts = score.insts;
        return {
            string: (function () {
                return insts.reduce(function (accum, inst) {
                    return accum + " \"" + inst.name + "\"";
                }, "");
            })(),
            symbol: (function () {
                return insts.reduce(function (accum, inst) {
                    return accum + " " + inst.name;
                }, "");
            })()
        };
    };
    return MainFile;
}());
exports.MainFile = MainFile;
//# sourceMappingURL=MainFile.js.map