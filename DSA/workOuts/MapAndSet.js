
//Set
const set2 = new Set(["oii","hiii"])
set2.add("damn","oii")
console.log(set2.has("fuck"));
console.log("🚀 ~ file: roughbook.js ~ line 2 ~ set1", set2)
set2.forEach((e)=>{
    console.log(e);
})


//Map
const map1 =  new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
    ["apples", 900],  
  ]);
console.log("🚀 ~ file: roughbook.js ~ line 13 ~ map", map1)

console.log("🚀 ~ file: roughbook.js ~ line 13 ~ map", map1.has('apples'))
map1.forEach((p)=>{
    console.log(p);
})


