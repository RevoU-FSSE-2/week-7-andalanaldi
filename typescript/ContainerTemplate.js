"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerTemplate = void 0;
class ContainerTemplate {
    constructor(list) {
        this.list = list;
    }
    render(thing, heading, method) {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        h3.innerText = heading;
        li.append(h3);
        const p = document.createElement("p");
        p.innerText = thing.format();
        li.append(p);
        if (method === "start") {
            this.list.prepend(li);
        }
        else {
            this.list.append(li);
        }
    }
}
exports.ContainerTemplate = ContainerTemplate;
