"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quote = void 0;
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
exports.Quote = Quote;
