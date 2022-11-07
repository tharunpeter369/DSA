const array1 = new Array('a', 'b', 'c', 'x', 'z')
const array2 = new Array('4', 'y', 'p')

//solution one
function containCommon(array11 = array1, array22 = array2) {   // this is o(n2)
    const p1 = performance.now()
    for (let i = 0; i < array11.length; i++) {
        for (let j = 0; j < array22.length; j++) {
            if (array11[i] === array22[j]) {
                console.log('we found you bitch');
            }
        }
    }
    const p2 = performance.now()
    console.log(p2 - p1, "-----");


}
//solution two
function containCommon1(array11 = array1, array22 = array2) {  // o(a+b)
    const p1 = performance.now()
    let data = {}
    for (let i = 0; i < array11.length; i++) {
        if (!data[i]) {
            data[array1[i]] = true
        }
    }
    for (let i = 0; i < array22.length; i++) {
        if (data[array2[i]]) {
            console.log(data[array2[i]], "data[array2[i]]", array2[i]);
            console.log('we found you bitch');
        }
        break
    }
    const p2 = performance.now()
    console.log(data, "its my data-----");
    console.log(p2 - p1, "-----");
}

// containCommon()
// containCommon1()

// solution three
function containCommon3(array11 = array1, array22 = array2) {  // o(a+b)
    return array11.some(item=> array22.includes(item))
}

console.log(containCommon3())




