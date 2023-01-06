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


class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // const newNode = {
    //   value: value,
    //   next: null
    // }
    const newNode = new Node(value)
    // newNode.prev = this.tail

    this.tail.next = newNode
    this.tail = newNode
    newNode.prev = this.tail
    this.length = this.length + 1
    return this
  }

  prepend(value) {
    // const prependNode = {
    //   value: value,
    //   next: this.head
    // }
    const prependNode = new Node(value)    
    prependNode.next = this.head
    this.head.prev = prependNode
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
    if (this.length <= index) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    const leader = this.traverseToinedex(index - 1)
    const follower = leader.next
    leader.next = newNode
    newNode.prev = leader
    newNode.next = follower
    follower.prev = newNode
    this.length++;
    // return this.printList()
    return this
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
    leader.next.prev = holdingPointer
    this.length--;
    return this
    return this.printList()
  }

}
const myLinkedList = new DoublyLinkedList(10);
// console.log(myLinkedList, "🥰");
let ap1 = myLinkedList.append(5)
let ap2 = myLinkedList.append(16)
let ap3 = myLinkedList.append(17)

// console.dir(ap3, { depth: null })
// console.log(ap3);
let pre1 = myLinkedList.prepend(22)
let pre2 = myLinkedList.prepend(23)
// console.log(pre2, "😁😁😁😁");
// console.dir(pre2, { depth: null })

// let insert = myLinkedList.insert(200, 99)
let insert1 = myLinkedList.insert(2, 89)
// console.dir(insert1, { depth: null })
myLinkedList.printList()

// let insert2 = myLinkedList.insert(2, 88)
let rm = myLinkedList.removeLinkedList(2)
console.dir(rm, { depth: null })

// console.log(rm, "🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂🙂");
// myLinkedList.printList()
// console.log(ap2, "ap2🙂");
// console.log(pre1, "🤑🤑🤑🤑");
