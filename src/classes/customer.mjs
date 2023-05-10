import Person from "./Person.mjs";
export default class Customer extends Person {
    constructor(firstName, lastName, birthDate, address, gender, accountNumber, email, phone, account = null) {
        super(firstName, lastName, birthDate, address, gender, email, phone);
        this.account = account;
    }

    print() {
        console.log(`Client : ${this.firstName} ${this.lastName}, né(e) le ${this.birthDate}, adresse : ${this.address}`);
        if (this.account) console.log(`Numéro de compte : ${this.account.accountNumber}`);
    }
}