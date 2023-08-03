export class Clearance {
    constructor(beneficiary, deti, iamount) {
        this.beneficiary = beneficiary;
        this.deti = deti;
        this.iamount = iamount;
    }
    format() {
        return "You have ".concat(this.beneficiary, " as much as ").concat(this.iamount, " IDR for month of ").concat(this.deti);
   }
}
