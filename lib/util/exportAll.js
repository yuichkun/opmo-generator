"use strict";
exports.__esModule = true;
var fs = require("fs");
var Logger_1 = require("./Logger");
exports.exportAll = function (files) {
    return {
        to: function (exportPath) {
            files.forEach(function (file) {
                var content = file.content, name = file.name;
                var path = exportPath + "/" + name + ".opmo";
                fs.writeFile(path, content, function () { });
                Logger_1.Logger.showOpmo(content, name);
            });
        }
    };
};
//# sourceMappingURL=exportAll.js.map