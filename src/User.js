export default class User {
    constructor({email, name, password}) {
        this.balance = 0
        this.email = email
        this.name = name
        this.password = password
    }
}