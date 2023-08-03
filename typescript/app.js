"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quote_1 = require("./Quote");
const Clearance_1 = require("./Clearance");
const ContainerTemplate_1 = require("./ContainerTemplate");
// console.log("w7 assignment")
const form = document.querySelector(".tracking-form");
const strans = document.querySelector("#fin");
const transn = document.querySelector("#trans-name");
const deti = document.querySelector("#det-info");
const iamount = document.querySelector("#idr-amount");
const ul = document.querySelector("ul");
const container = new ContainerTemplate_1.ContainerTemplate(ul);
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values = [transn === null || transn === void 0 ? void 0 : transn.ariaValueText, deti === null || deti === void 0 ? void 0 : deti.ariaValueText, iamount === null || iamount === void 0 ? void 0 : iamount.ariaValueNow].filter(Boolean);
    let doc;
    if ((transn === null || transn === void 0 ? void 0 : transn.ariaValueText) === "Quote") {
        const [customer, detiVal, iamountVal] = values;
        doc = new Quote_1.Quote(customer, detiVal, parseFloat(iamountVal));
    }
    else {
        const [beneficiary, detiVal, iamountVal] = values;
        doc = new Clearance_1.Clearance(beneficiary, detiVal, parseFloat(iamountVal));
    }
    container.render(doc, strans.value, "end");
});
