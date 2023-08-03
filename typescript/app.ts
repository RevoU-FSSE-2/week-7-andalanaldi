import { Quote } from "./Quote";
import { Clearance } from "./Clearance";
import { ContainerTemplate } from "./ContainerTemplate";
// console.log("w7 assignment")

const form = document.querySelector(".tracking-form");

const strans = document.querySelector("#fin") as HTMLInputElement;
const transn = document.querySelector("#trans-name");
const deti = document.querySelector("#det-info");
const iamount = document.querySelector("#idr-amount");

const ul = document.querySelector("ul")!;
const container = new ContainerTemplate(ul);
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    let values: string[] = [transn?.ariaValueText, deti?.ariaValueText, iamount?.ariaValueNow].filter(Boolean) as string[];
    let doc: Quote | Clearance;
    if (transn?.ariaValueText === "Quote") {
        const [customer, detiVal, iamountVal] = values;
        doc = new Quote(customer, detiVal, parseFloat(iamountVal));
    } else {
        const [beneficiary, detiVal, iamountVal] = values;
        doc = new Clearance(beneficiary, detiVal, parseFloat(iamountVal));
    }
    container.render(doc, strans!.value, "end")
});
 