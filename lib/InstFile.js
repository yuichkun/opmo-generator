"use strict";
exports.__esModule = true;
var util_1 = require("./util");
var constants_1 = require("./constants");
var actionTypes;
(function (actionTypes) {
    actionTypes["BLANK"] = "";
    actionTypes["CONCAT"] = "=>";
})(actionTypes || (actionTypes = {}));
var InstFile = /** @class */ (function () {
    function InstFile(inst, timeSigs) {
        this.measures = [];
        this.name = inst.name;
        this.content = "";
        for (var i = 0; i < inst.actions.length; i++) {
            this.measures.push({
                action: inst.actions[i],
                timeSig: timeSigs[i]
            });
        }
        var orderList = this.createOrderList([], this.measures);
        this.content += this.genMeasures(orderList);
        this.content += this.genScore();
    }
    InstFile.prototype.genScore = function () {
        return constants_1.genScore(this.name);
    };
    InstFile.prototype.genMeasures = function (orderList) {
        var content = "";
        orderList.forEach(function (order, i) {
            var omn;
            if (order.action === actionTypes.BLANK) {
                omn = constants_1.genBlank(order.timeSig);
            }
            else {
                omn = constants_1.genCustom(order.timeSig, order.action);
            }
            content += constants_1.genMeasure(i, omn);
        });
        content += constants_1.assembleOMN(orderList.length);
        return content;
    };
    InstFile.prototype.createOrderList = function (orderList, measures) {
        if (measures.length === 0) {
            return orderList;
        }
        var measure = measures[0];
        var action = measure.action, timeSig = measure.timeSig;
        if (action === actionTypes.BLANK) {
            orderList.push(measure);
        }
        else if (action !== actionTypes.CONCAT) {
            var order = {};
            order.action = measure.action;
            order.timeSig = measure.timeSig;
            while (true) {
                measures.shift();
                if (measures[0].action === actionTypes.CONCAT) {
                    order.timeSig = util_1.addTimeSigs(order.timeSig, measures[0].timeSig);
                }
                break;
            }
            orderList.push(order);
        }
        return this.createOrderList(orderList, measures.slice(1, measures.length));
    };
    return InstFile;
}());
exports.InstFile = InstFile;
//# sourceMappingURL=InstFile.js.map