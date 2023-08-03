export class Quote {
    constructor(customer, deti, iamount) {
        this.customer = customer;
        this.deti = deti;
        this.iamount = iamount;
    }
    format() {
        return "You have ".concat(this.customer, " as much as ").concat(this.iamount, " IDR for month of ").concat(this.deti);
    }
}


