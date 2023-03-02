// recursion example   // image:8 ,9
let counter = 0
function inception(){
    debugger
    console.log(counter);
     if(counter > 0){
          return 'done'
     }
     counter += 1
     inception()
}

inception()