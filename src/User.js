import { v4 as uuidv4 } from 'uuid';

export default class User {
    constructor({email, name, password}) {
        this._balance = 0
        this._email = email
        this._name = name
        this._password = password
        this._id = uuidv4()
    }

    get balance() {
        return this._balance;
    }

    // set balance(newBalance) {
    //     this._balance = newBalance
    // }

    get name() {
        return this._name
    }

    get email() {
        return this._email
    }

    get password() {
        return this._password
    }

    get id() {
        return this._id
    }

    addFunds(amount) {
        this._balance += amount
    }

    removeFunds(amount) {
        this._balance -= amount
    }

    // toString() {
    //     return `${this.name} ${this.email} ${this.password} ${this.balance}`
    // }
}