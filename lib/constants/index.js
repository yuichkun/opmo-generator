"use strict";
exports.__esModule = true;
exports.SHOWMUSICXML = "(display-musicxml *last-score*)\n";
exports.SHOWMIDI = "(display-midi *last-score* :display :quick-view)\n";
exports.genLoader = function (files) {
    var loader = "(let ((files '( \"util\" " + files + ")))\n  (loop for file in files do\n    (load (merge-pathnames file *load-truename*))\n  )\n)\n";
    return loader;
};
exports.genCompiler = function (files) {
    var compiler = "\n(setf path (merge-pathnames \"../XML/bundle.xml\" *load-truename*))\n(compile-score '(" + files + ") :output :musicxml :file path)\n";
    return compiler;
};
exports.genMeasure = function (index, omn) {
    var measure = "\n(setf measure" + index + " " + omn + ")\n";
    return measure;
};
exports.genBlank = function (timeSig) {
    var blank = "\n'(-" + timeSig + ")\n";
    return blank;
};
exports.genCustom = function (timeSig, _args) {
    var args = _args.split("~")[0].split("-").join(" ");
    var custom = "\n(" + args + ")\n";
    return custom;
};
exports.assembleOMN = function (length) {
    var measureList = "";
    for (var i = 0; i < length; i++) {
        measureList += "measure" + i + " ";
    }
    var omn = "\n(setf omn (assemble-seq '(" + measureList + ")))\n";
    return omn;
};
exports.genScore = function (name) {
    var score = "\n(def-score " + name + "\n           (:key-signature 'atonal\n            :time-signature '(4 4)\n            :tempo 120)\n(" + name + " :omn omn)\n)\n";
    return score;
};
//# sourceMappingURL=index.js.map