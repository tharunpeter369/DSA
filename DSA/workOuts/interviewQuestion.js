
console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 2));

function hasPairWithSum2(ar, sum) {
    if (ar.length == 0) return false
    console.log("🚀 ~ file: interviewQuestion.js ~ line 8 ~ hasPairWithSum2 ~ ar.length", ar.length)
    if (ar.length > 0) {
        for (i = 0; i < ar.length; i++) {
            console.log("🚀 ~ file: interviewQuestion.js ~ line 11 ~ hasPairWithSum2 ~ i", ar[i])
            for (j = i + 1; j < ar.length; j++) {
                if (ar[i] + ar[j] == sum) {
                    return [ar[i], ar[j]]
                }
            }
        }
    }
    return false
}

// better solution
function hasPairBetter(ar,sum) {
    const myset = new Set()
    for (let i = 0; i <ar.length; i++){
        if(myset.has(ar[i])){
            return true
        }
        myset.add(sum - ar[i])
    }
    return false
}

console.log(hasPairBetter([6, 4, 3, 2, 1, 7], 3));

