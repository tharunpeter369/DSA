// example of linked list

// 10 -- > 5 -- > 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       }
//     }
//   }
// }

//now lets create linked list
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    // console.log(this.tail.next,"🥰sss");
    console.log(this.tail, "🥰sss");
    this.tail.next = newNode,
      this.tail = newNode,
      this.length = this.length + 1;
    return this
  }

  prepend(value) {
    const prependNode = {
      value: value,
      next: this.head
    }
    this.head = prependNode
    this.length = this.length + 1;
    return this
  }
}
const myLinkedList = new LinkedList(10);
// console.log(myLinkedList, "🥰");
let ap1 = myLinkedList.append(5)
let ap2 = myLinkedList.append(16)
let pre1 = myLinkedList.prepend(22)
// console.log(ap2, "ap2🙂");
console.log(pre1,"🤑🤑🤑🤑");
