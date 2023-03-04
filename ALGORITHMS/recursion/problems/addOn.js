function reverseString(str) {
    let arrayStr = str.split("");
    let reversedArray = [];
    //We are using closure here so that we don't add the above variables to the global scope.
    function addToArray(array) {

        if (array.length > 0) {
            reversedArray.push(array.pop());
            addToArray(array);
        }
        return;
    }
    addToArray(arrayStr);
    return reversedArray.join("");
}

let sub = "tharun"

console.log(sub.substr(1), "pppppppppppppppppppppppppppp", sub.charAt(0));

console.log(reverseString('yoyo master'));

function reverseStringRecursive(str) {
    console.log(str, "😍s");
    if (str === "") {
        return "";
    } else {
        console.log(str.substr(1) + str.charAt(0),"😗")
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseStringRecursive('yoyo master'));