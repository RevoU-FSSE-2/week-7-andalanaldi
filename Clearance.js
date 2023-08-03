"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clearance = void 0;
var Clearance = /** @class */ (function () {
    function Clearance(beneficiary, deti, iamount) {
        this.beneficiary = beneficiary;
        this.deti = deti;
        this.iamount = iamount;
    }
    Clearance.prototype.format = function () {
        // return `${this.recipient} is have Rp${this.amount} for ${this.details}`;
        return "You have ".concat(this.beneficiary, " as much as ").concat(this.iamount, " IDR for month of ").concat(this.deti);
    };
    return Clearance;
}());
exports.Clearance = Clearance;
