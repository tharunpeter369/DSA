let a1 = [1, 2, 6, 8]

let a2 = [3, 4]

// const a3 = [...a1, ...a2]

// console.log(a3);


//solutiion 2 

function mergedArrayy(a1, a2) {
    // console.log(a1, "fffffffffffffffffffff");
    const mergedArray = [];
    let i = 0;
    let j = 0;
    let array1 = a1[i]
    let array2 = a2[j]
    if (a1.length <= 0) {
        return a2
    }
    if (a1.length <= 0) {
        return a1
    }
    while (array1 != undefined || array2 != undefined) {
        array1 = a1[i]
        array2 = a2[j]
        console.log(array1, "mergedArray",array2);
        // break
        if (array1 == undefined || array1 > array2) {
            if (array2 == undefined) break
            mergedArray.push(array2)
            j = j + 1
        } else {
            console.log("🥰🥰🥰🥰🥰🥰🥰");
            mergedArray.push(array1)
            i =  i + 1
        }
    }

    return mergedArray
}

console.log(mergedArrayy(a1, a2),"---------->")


