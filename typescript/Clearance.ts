export class Clearance {
    private beneficiary: string;
    private deti: string;
    private iamount: number;

    constructor(beneficiary: string, deti: string, iamount: number) {
        this.beneficiary = beneficiary;
        this.deti = deti;
        this.iamount = iamount;
    }
    format() {
        // return `${this.recipient} is have Rp${this.amount} for ${this.details}`;
        return `You have ${this.beneficiary} as much as ${this.iamount} IDR for month of ${this.deti}`;
    }
}