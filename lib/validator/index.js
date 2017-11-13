"use strict";
exports.__esModule = true;
var PrimitiveType;
(function (PrimitiveType) {
    PrimitiveType["String"] = "string";
    PrimitiveType["Number"] = "number";
    PrimitiveType["Boolean"] = "boolean";
})(PrimitiveType || (PrimitiveType = {}));
function isValidConfig(obj) {
    var hasValidCSVPath = typeof obj.csvPath === PrimitiveType.String;
    if (!hasValidCSVPath) {
        throw new Error("Config must have a path of type STRING to the CSV file");
    }
    var hasValidOutDir = typeof obj.outDir === PrimitiveType.String;
    if (!hasValidOutDir) {
        throw new Error("Config must have a path of type STRING to the output directory");
    }
    var validated = hasValidCSVPath && hasValidOutDir;
    return validated;
}
exports.isValidConfig = isValidConfig;
function isValidInst(inst, time) {
    var name = inst.name, actions = inst.actions;
    if (!name) {
        throw new Error("Instrument name is invalid in " + name);
    }
    if (!actions || actions.length === 0) {
        throw new Error("Content of " + name + " does not have anything. " + actions);
    }
    if (actions.length !== time.length) {
        throw new RangeError("Length of " + name + "(" + actions.length + ") does not match the length of music(" + time.length + ")");
    }
    return true;
}
exports.isValidInst = isValidInst;
function notUndefined(data) {
    if (data === undefined) {
        console.log("could not read csv");
        return false;
    }
    return true;
}
exports.notUndefined = notUndefined;
//# sourceMappingURL=index.js.map