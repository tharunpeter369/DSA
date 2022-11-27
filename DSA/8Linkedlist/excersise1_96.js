
//81 82 83

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }  // o(1)

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value]);
        console.log(this.data)
    }// o(1)

    get(key) {
        let address = this._hash(key);
        let check = this.data[address]
        if (!check) {
            return 'fuck off bitch no value found'
        } else {
            for (let i = 0; i < check.length; i++) {
                if (check[i][0] == key) return check[i][1]
            }
            return undefined
        }
    } // o(1) sometimes o(n)
    // key() {
    //     const keysArray = []
    //     for (let i = 0; i < this.data.length; i++) {
    //         if(this.data[i]) keysArray.push(this.data[i][0][0])
    //     }
    //     return keysArray
    // }

    keys() {
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
              // but also loop through all the potential collisions
              if (this.data.length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                  result.push(this.data[i][j][0])
                }
              } else {
                result.push(this.data[i][0])
              } 
            }
        }
        return result; 
      }


}

const myHashTable = new HashTable(50)
// myHashTable.set('grapes',10000)
// myHashTable.get('grapes')
// let val = myHashTable._hash('grapes')
myHashTable.set('grapess', 1000)
myHashTable.set('orange', 1000)
myHashTable.set('grapess', 2000)
console.log(myHashTable.get('grapess'));
console.log(myHashTable.get('grapess'));
console.log(myHashTable.keys());


