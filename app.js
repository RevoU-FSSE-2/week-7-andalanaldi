"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quote_js_1 = require("./Quote.js");
var Clearance_js_1 = require("./Clearance.js");
var ContainerTemplate_js_1 = require("./ContainerTemplate.js");
// console.log("w7 assignment")
var form = document.querySelector(".tracking-form");
var strans = document.querySelector("#fin");
var transn = document.querySelector("#trans-name");
var deti = document.querySelector("#det-info");
var iamount = document.querySelector("#idr-amount");
var ul = document.querySelector("ul");
var container = new ContainerTemplate_js_1.ContainerTemplate(ul);
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var values = [transn === null || transn === void 0 ? void 0 : transn.ariaValueText, deti === null || deti === void 0 ? void 0 : deti.ariaValueText, iamount === null || iamount === void 0 ? void 0 : iamount.ariaValueNow].filter(Boolean);
    var doc;
    if ((transn === null || transn === void 0 ? void 0 : transn.ariaValueText) === "Quote") {
        var customer = values[0], detiVal = values[1], iamountVal = values[2];
        doc = new Quote_js_1.Quote(customer, detiVal, parseFloat(iamountVal));
    }
    else {
        var beneficiary = values[0], detiVal = values[1], iamountVal = values[2];
        doc = new Clearance_js_1.Clearance(beneficiary, detiVal, parseFloat(iamountVal));
    }
    container.render(doc, strans.value, "end");
});
