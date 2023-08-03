"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quote = void 0;
var Quote = /** @class */ (function () {
    function Quote(customer, deti, iamount) {
        this.customer = customer;
        this.deti = deti;
        this.iamount = iamount;
    }
    Quote.prototype.format = function () {
        // return `${this.client} owned Rp${this.amount} for ${this.details}`;
        return "You have ".concat(this.customer, " as much as ").concat(this.iamount, " IDR for month of ").concat(this.deti);
    };
    return Quote;
}());
exports.Quote = Quote;
