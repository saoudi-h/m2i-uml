import Person from "./Person.mjs";

class Agent extends Person {
    constructor(firstName, lastName, birthDate, address, gender, employeeId = null) {
        super(firstName, lastName, birthDate, address, gender);
        this.employeeId = employeeId;
    }
    print() {
        console.log(`Agent : ${this.firstName} ${this.lastName}, né(e) le ${this.birthDate}, adresse : ${this.address}, identifiant de l'agent : ${this.employeeId}`);
    }
}