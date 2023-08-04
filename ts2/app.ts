const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
  });
class Quote {
    private customer: string;
    private deti: string;
    private iamount: number;

    constructor(customer: string, deti: string, iamount: number) {
        this.customer = customer;
        this.deti = deti;
        this.iamount = iamount;
    }
    format() {
        // Format the iamount as currency
        const formattedAmount = formatter.format(this.iamount);
        // return `${this.client} owned Rp${this.amount} for ${this.details}`;
        return `You have ${this.customer} as much as ${formattedAmount} for month of ${this.deti}`;
    }
}

class Clearance {
    private beneficiary: string;
    private deti: string;
    private iamount: number;

    constructor(beneficiary: string, deti: string, iamount: number) {
        this.beneficiary = beneficiary;
        this.deti = deti;
        this.iamount = iamount;
    }
    format() {
        // Format the iamount as currency
        const formattedAmount = formatter.format(this.iamount);
        // return `${this.recipient} is have Rp${this.amount} for ${this.details}`;
        return `You have ${this.beneficiary} as much as ${formattedAmount} for month of ${this.deti}`;
    }
}

class ContainerTemplate {
    private list: HTMLElement; // Assuming `list` is an HTMLElement

    constructor(list: HTMLElement) {
        this.list = list;
    }
    render(thing: { format: () => string }, heading: string, method: string) {
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

const isHTMLFormElement = (element: Element | null): element is HTMLFormElement => {
    return element instanceof HTMLFormElement;
};

if (isHTMLFormElement(form)) {
    form.addEventListener("submit", (e: Event) => {
        e.preventDefault();

        const strans = document.querySelector("#fin") as HTMLInputElement;
        const transn = document.querySelector("#trans-name") as HTMLInputElement;
        const deti = document.querySelector("#det-info") as HTMLInputElement;
        const iamount = document.querySelector("#idr-amount") as HTMLInputElement;

        const ul = document.querySelector("ul")!;
        const container = new ContainerTemplate(ul);

        let values: string[] = [transn?.value, deti?.value, iamount?.valueAsNumber].filter(Boolean) as string[];
        let doc: Quote | Clearance;
        if (transn?.value === "Quote") {
            const [customer, detiVal, iamountVal] = values;
            doc = new Quote(customer, detiVal, parseFloat(iamountVal));
        } else {
            const [beneficiary, detiVal, iamountVal] = values;
            doc = new Clearance(beneficiary, detiVal, parseFloat(iamountVal));
        }

        container.render(doc, strans!.value, "end")
    });
}