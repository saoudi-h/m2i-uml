export default class Person {
    constructor(firstName, lastName, birthDate, address, gender, email, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
    }
    print() {
        throw new Error('La méthode print doit être implémentée dans la classe dérivée.');
    }
}