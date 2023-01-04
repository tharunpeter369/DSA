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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    // this.length = 1
  }
}


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
    // const newNode = {
    //   value: value,
    //   next: null
    // }

    const newNode = new Node(value);
    // console.log(this.tail.next,"🥰sss");
    // console.log(this.tail, "🥰sss");
    this.tail.next = newNode,
      this.tail = newNode,
      this.length = this.length + 1;
    return this
  }

  prepend(value) {
    // const prependNode = {
    //   value: value,
    //   next: this.head
    // }
    const prependNode = new Node(value)
    prependNode.next = this.head
    this.head = prependNode
    this.length = this.length + 1;
    return this
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode?.value);
      currentNode = currentNode.next
    }
    console.log(array, "🥰🥰🥰");
  }

  insert(index, value) {
    console.log(index, value, "🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂");
    if (this.length <= index) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToinedex(index - 1)
    const holdingPointer = leader.next
    newNode.next = holdingPointer
    leader.next = newNode
    return this.printList()
    // return this
    // console.log(leader, "leaderleader🤣");
    // console.log(this.length, "this.length");
  }

  traverseToinedex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode
  }

  removeLinkedList(index) {
    const leader = this.traverseToinedex(index - 1)
    const holdingPointer = leader.next.next
    leader.next = holdingPointer
    return this.printList()
  }

}
const myLinkedList = new LinkedList(10);
// console.log(myLinkedList, "🥰");
let ap1 = myLinkedList.append(5)
let ap2 = myLinkedList.append(16)
let pre1 = myLinkedList.prepend(22)
let pre2 = myLinkedList.prepend(23)

console.log(pre1, "😁😁😁😁");

let insert = myLinkedList.insert(200, 99)
// myLinkedList.printList()

let insert1 = myLinkedList.insert(2, 89)
let insert2 = myLinkedList.insert(2, 88)

let rm = myLinkedList.removeLinkedList(2)


console.log(rm, "🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂");


// myLinkedList.printList()

// console.log(ap2, "ap2🙂");
// console.log(pre1, "🤑🤑🤑🤑");
