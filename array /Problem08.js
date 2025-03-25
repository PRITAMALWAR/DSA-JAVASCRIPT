

// let str = "masai"

// let obj ={}

// for(let i = 0; i<str.length; i++){

//     obj[str[i]] = 1
// }

// console.log(obj)




let str = "masai";
let obj = {};

for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
        obj[str[i]] += 1;
    } else {
        obj[str[i]] = 1;
    }
}

console.log(obj);
