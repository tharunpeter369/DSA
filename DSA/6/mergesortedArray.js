let a1 = [1, 2, 6, 8]

let a2 = [3, 4]

// const a3 = [...a1, ...a2]

// console.log(a3);


//solutiion 2 

function mergedArray(a1, a2) {
    const mergedArray = [];
    let i = 0;
    console.log(i,"iiiiiiiiiiiii");
    let j = 0;
    console.log(j,"jjjjjjjjji");
    array1 = a1[i]
    console.log(array1,"array1array1array1");
    array2 = a2[j]
    console.log(array2,"array2array2array2");
    if (a1.length <= 0) {
        return a2
    }
    if (a1.length <= 0) {
        return a1
    }
    while (array1 || array2) {
        // console.log(array1,"mergedArray");
        if (array1 == undefined || array1 > array2) {
            mergedArray.push(array2)
            ++i
            console.log(i);
            array1 = a1[i]
        } else {
            mergedArray.push(array1)
            j++
            array2 = a2[j]
        }
    }
}

console.log(mergedArray(a1, a2))


