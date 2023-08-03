"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerTemplate = void 0;
var ContainerTemplate = /** @class */ (function () {
    function ContainerTemplate(list) {
        this.list = list;
    }
    ContainerTemplate.prototype.render = function (thing, heading, method) {
        var li = document.createElement("li");
        var h3 = document.createElement("h3");
        h3.innerText = heading;
        li.append(h3);
        var p = document.createElement("p");
        p.innerText = thing.format();
        li.append(p);
        if (method === "start") {
            this.list.prepend(li);
        }
        else {
            this.list.append(li);
        }
    };
    return ContainerTemplate;
}());
exports.ContainerTemplate = ContainerTemplate;
