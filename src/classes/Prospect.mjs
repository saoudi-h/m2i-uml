import Person from "./Person.mjs";

export default class Prospect extends Person {
    constructor(firstName, lastName, birthDate, address, gender, accountNumber, email, phone, ip) {
        super(firstName, lastName, birthDate, address, gender, email, phone);
        this.ip = ip;
    }

    print() {
        console.log(`Prospect : ${this.firstName} ${this.lastName}, né(e) le ${this.birthDate}, adresse : ${this.address}, addresse ip : ${this.ip}`);
        if (this.account) console.log(`Numéro de compte : ${this.account.accountNumber}`);
    }
}