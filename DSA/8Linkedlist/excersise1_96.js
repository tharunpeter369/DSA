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
    this.tail.next = newNode,
      this.tail = newNode,
      this.length = this.length + 1;
      return this
  }
}
const myLinkedList = new LinkedList(10);
console.log(myLinkedList, "🥰");
let ap1 = myLinkedList.append(5)
myLinkedList.append(16)
console.log(ap1,"ap1🙂");
