export class Quote {
    private customer: string;
    private deti: string;
    private iamount: number;

    constructor(customer: string, deti: string, iamount: number) {
        this.customer = customer;
        this.deti = deti;
        this.iamount = iamount;
    }
    format() {
        // return `${this.client} owned Rp${this.amount} for ${this.details}`;
        return `You have ${this.customer} as much as ${this.iamount} IDR for month of ${this.deti}`;
    }
}