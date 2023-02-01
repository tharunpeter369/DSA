class Node {
    constructor(value) {
        this.head = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    peek() {
        return this.first
    }
    enqueue(value) {
        const newNode = new Node(value)
        // console.log(value, "🥰🥰🥰🥰")
        if (this.length == 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
    dequeue() {
        if (!this.first) {
            return null
        } let holdingPointer = this.first
        if (holdingPointer == this.last) {
            this.first == null
            this.last = null
        } 
        // else {
            // console.log(holi);
            this.first = holdingPointer.next
        // }
        this.length--
        return this
    }
}

let quee = new Queue()

let peek = quee.peek()

let enqueue = quee.enqueue(2)
let enqueue2 = quee.enqueue(3)
let enqueue3 = quee.enqueue(4)
console.log(enqueue3)

let dequeue1 = quee.dequeue()
console.log(dequeue1)
let dequeue2 = quee.dequeue()
console.log(dequeue2)
let dequeue3 = quee.dequeue()
console.log(dequeue3)
let dequeue4 = quee.dequeue()
console.log(dequeue4)
