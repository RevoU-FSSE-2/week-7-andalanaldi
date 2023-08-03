"use strict";
class Quote {
    constructor(customer, deti, iamount) {
        this.customer = customer;
        this.deti = deti;
        this.iamount = iamount;
    }
    format() {
        // return `${this.client} owned Rp${this.amount} for ${this.details}`;
        return `You have ${this.customer} as much as ${this.iamount} IDR for month of ${this.deti}`;
    }
}
class Clearance {
    constructor(beneficiary, deti, iamount) {
        this.beneficiary = beneficiary;
        this.deti = deti;
        this.iamount = iamount;
    }
    format() {
        // return `${this.recipient} is have Rp${this.amount} for ${this.details}`;
        return `You have ${this.beneficiary} as much as ${this.iamount} IDR for month of ${this.deti}`;
    }
}
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
const form = document.querySelector(".tracking-form");
const isHTMLFormElement = (element) => {
    return element instanceof HTMLFormElement;
};
if (isHTMLFormElement(form)) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const strans = document.querySelector("#fin");
        const transn = document.querySelector("#trans-name");
        const deti = document.querySelector("#det-info");
        const iamount = document.querySelector("#idr-amount");
        const ul = document.querySelector("ul");
        const container = new ContainerTemplate(ul);
        let values = [transn === null || transn === void 0 ? void 0 : transn.ariaValueText, deti === null || deti === void 0 ? void 0 : deti.ariaValueText, iamount === null || iamount === void 0 ? void 0 : iamount.ariaValueNow].filter(Boolean);
        let doc;
        if ((transn === null || transn === void 0 ? void 0 : transn.ariaValueText) === "Quote") {
            const [customer, detiVal, iamountVal] = values;
            doc = new Quote(customer, detiVal, parseFloat(iamountVal));
        }
        else {
            const [beneficiary, detiVal, iamountVal] = values;
            doc = new Clearance(beneficiary, detiVal, parseFloat(iamountVal));
        }
        container.render(doc, strans.value, "end");
    });
}
