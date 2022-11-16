//reference type **

// let object1 = {value:10}
// let object2 = object1

// let object3 = {value:10}

// console.log(object1 == object2);
// console.log(object1 == object3);
// object1.value = 15

// console.log(object2.value);


//context vs scope**

// const object4 = {
//     a: function () {
//         console.log(this)
//     }
// }
// console.log(this)
// console.log(object4.a())

//instantation **
class Player {
    constructor(name, type) {
        // console.log(this, "this this this txxxxxxxxxxxxxxhis");
        this.name = name
        this.type = type
        console.log(this, "this this this txxxxxxxxxxxxxxhis");
    }
    introduce() {
        console.log(`hi iam ${this.name}, ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type,language) {
        super(name, type)
        this.language = language
        this.name = "messi"
        console.log(this, "this this this this");
    }
    play() {
        console.log(`weee iam  ${this.type} and ${this.name}`);
    }
}

const wizard1 = new Wizard('tharun', 'yooooooo','malayalam')
// const player1 = new Player('tharun','peters')

// player1.introduce()

// console.log(wizard1.play(),'---------->');
console.log(wizard1.introduce(), '--------sssss');
wizard1.play()
