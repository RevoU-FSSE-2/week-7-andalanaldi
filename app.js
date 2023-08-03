import { Quote } from "./Quote.js";
import { Clearance } from "./Clearance.js";
import { ContainerTemplate } from "./ContainerTemplate.js";

const form = document.querySelector(".tracking-form");
const strans = document.querySelector("#fin");
const transn = document.querySelector("#trans-name");
const deti = document.querySelector("#det-info");
const iamount = document.querySelector("#idr-amount");
const ul = document.querySelector("ul");
const container = new ContainerTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [transn.value, deti.value, iamount.valueAsNumber];
    let doc;
    if (strans.value === "Quote") {
        doc = new Quote(...values);
    }
    else {
        doc = new Clearance(...values);
    }
    container.render(doc, strans.value, "end");
});
