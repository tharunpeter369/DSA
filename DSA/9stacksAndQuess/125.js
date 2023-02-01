class QueesUsingStack {
    constructor() {
        this.first = [];
        this.last = [];
    }

    // enqueue(value) {
    //     const length = this.first.length;
    //     for (let i = 0; i < length; i++) {
    //         this.last.push(this.first.pop());
    //     }
    //     this.last.push(value);
    //     return this;

    // }

    enQueue(x) {

        // Move all elements from s1 to s2 
        while (this.first.length != 0) {
            this.last.push(this.first.pop());
            //s1.pop(); 
        }

        // Push item into s1 
        this.first.push(x);

        // Push everything back to s1 
        while (this.last.length != 0) {
            this.first.push(this.last.pop());
            //s2.pop(); 
        }

        return this;
    }

    dequeue(value) {

    }

    peek() {
        if (this.last.length > 0) {
            return this.last[0]
        }
        return this.first[this.first.length - 1]
    }
}

const myQueue = new QueesUsingStack();

let peek1 = myQueue.peek();

console.log(peek1);


let enq = myQueue.enQueue('Joy');
console.log(enq);

let enq1 = myQueue.enQueue('Matt');
console.log(enq1);


// myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
// myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();



