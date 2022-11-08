//reference type **

// let object1 = {value:10}
// let object2 = object1

// let object3 = {value:10}

// console.log(object1 == object2);
// console.log(object1 == object3);
// object1.value = 15

// console.log(object2.value);


//context vs scope**

const object4 = {
    a: function () {
        console.log(this)
    }
}
console.log(this)
console.log(object4.a())

//instantation **
class Player {
    constructor(name, type) {
        this.name = name
        this.type = type
    }

    introduce() {
        console.log(`hi iam ${this.name}, ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`weee iam  ${this.type}`);
    }
}

