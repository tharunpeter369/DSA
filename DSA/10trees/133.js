//arboreal

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root
            while (currentNode != null) {
                if (value > currentNode.value) {
                    //left
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    } else {
                        currentNode = currentNode.left
                    }
                } else if (value < currentNode.value) {
                    //right
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    } else {
                        currentNode = currentNode.right
                    }
                }
            }

        }
        return this
    }
    lookup(value) {
    }
}

const tree = new BinarySearchTree();

let t1 = tree.insert(9)

console.log(t1);
let t2 = tree.insert(4)
let t3 = tree.insert(6)
let t4 = tree.insert(20)
console.log(t4);
let t5 = tree.insert(170)
let t6 = tree.insert(15)
let t7 = tree.insert(1)

console.log(t7);


//        9
//     4    20
//  1   6 15   170