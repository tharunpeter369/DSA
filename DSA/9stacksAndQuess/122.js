class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this
    }

    pop() {
        this.array.pop();
        return this
    }
}
// const node = new Node(4);
// console.log(node);
const myStack = new Stack();
const push = myStack.push(8)
const push1 = myStack.push("tharun")
const push2 = myStack.push("nibi")

console.log(push)
let peek = myStack.peek()
console.log(peek)
const pop = myStack.pop()
console.log(pop)


//discord
//udemy
//googlk 