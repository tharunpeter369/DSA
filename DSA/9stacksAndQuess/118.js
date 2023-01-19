class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top
    }

    push(value) {
        const newNode = new Node(value)
        // console.log(this.Node, "ppppppppppppppppppppp")
        if(this.length == 0 ){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this
    }

    pop() {

    }

}

const node = new Node(4);

console.log(node);

const myStack = new Stack();

const push = myStack.push(8)

let peek = myStack.peek()

console.log(peek)


//discord
//udemy
//googlk 