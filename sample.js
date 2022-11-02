// const nemo = ['nemo']
// // console.log("🚀 ~ file: sample.js ~ line 2 ~ nemo", nemo)

// const everyone = ['hello', "hiii", "shibin", "tharun", 'nemo', "fighter fish"]

// const large = new Array(1000000).fill("tharun")
// const t1 = performance.now()
// function findNemo(nemo) {
//     for (i = 0; i < nemo.length; i++) {
//         if (nemo[i] == 'nemo') {
//             console.log("🚀 ~ file: sample.js ~ line 6 ~ findNemo ~ nemo", nemo[i])
//         }
//     }
//     const t2 = performance.now()
//     console.log('difference', t2 - t1);
// }

// findNemo(large)

function x() {
    var a = 4;
    function y() {
        var i = 2
        function q() {
            console.log(a, i);
        }
        q()
    }
    a = 20
    // return y
    y()
}

x()


// console.log(x()());
