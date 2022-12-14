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
    // console.log(this.tail.next,"π₯°sss");
    // console.log(this.tail, "π₯°sss");
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
    console.log(array, "π");
  }

  insert(index, value) {
    // console.log(index, value, "πππππππππππππππ");
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
    // console.log(leader, "leaderleaderπ€£");
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
    this.length--;
    return this.printList()
  }

  // reverseLinkedList() {

  // }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    console.log("-->", first);

    while (second) {                      // 3
      // console.log(first,"---->");
      const temp = second.next;   //3
      second.next = first;        //1
      first = second;             //2
      second = temp;              //3

      // console.dir("-->",first,{ depth: null });
      console.log("-->", first);
      console.log(first?.next?.value, first?.next?.next);

    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }

}
const myLinkedList = new LinkedList(1);
// console.log(myLinkedList, "π₯°");
let ap1 = myLinkedList.append(2)
let ap2 = myLinkedList.append(3)
let ap3 = myLinkedList.append(4)


// console.log(ap3, "π₯°");
// console.dir(ap3, { depth: null })
// myLinkedList.printList()


// let pre1 = myLinkedList.prepend(22)
// let pre2 = myLinkedList.prepend(23)
// console.log(pre1, "ππππ");
// let insert = myLinkedList.insert(200, 99)
// // myLinkedList.printList()
// let insert1 = myLinkedList.insert(2, 89)
// let insert2 = myLinkedList.insert(2, 88)
// let rm = myLinkedList.removeLinkedList(2)
// console.log( "πππππππππππππππ");
myLinkedList.printList()
myLinkedList.reverse()
