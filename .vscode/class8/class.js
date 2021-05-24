// function User(name, age, position){
//     this.name = name;
//     this.age = age;
//     this.position = position;
// }

// let myUser = new User(`Abdulvoris`, 20, `Backend developer`)

//console.log(myUser)

// class

class User {
    constructor(name, age, position){
        this.name = name;
        this.age = age;
        this.position = position;
    }
    greeeting() {
        console.log(`Username is ${this.name}`)
    }
}
let yourUser = new User(`Abdulvoris`, 20, `BackEnd developer`)

console.log(yourUser.greeeting())