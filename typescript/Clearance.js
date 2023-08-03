"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clearance = void 0;
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
exports.Clearance = Clearance;
