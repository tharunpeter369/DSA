class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index) {
        return this.data[index];
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;
        return this.data
    }
    pop() {
        console.log(this.length - 1, "dddddddddddddddddddd");
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return this.data
    }

    deleteAtIndex(index) {
        const item = this.data[index];
       return this.shiftItems(index)
    }

    shiftItems(index) {
        const item = this.data[index]
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length-1];
        this.length--;
        return this.data
    }
}

const array1 = new MyArray
console.log(array1);

console.log(array1.push(1));
console.log(array1.push(2));
console.log(array1.push(7));
console.log(array1.push(8));
// console.log(array1.get(0));
// console.log(array1.pop());
console.log(array1.deleteAtIndex(2));

