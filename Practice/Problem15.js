


let arr = [2,2,2,3,4,5,8,4,5,6];

let obj = {}

for(let i = 0; i<arr.length; i++){

    if(obj[arr[i]] === undefined){
        obj[arr[i]] = 1
    }
    else{
        obj[arr[i]]++
    }
}
// console.log(obj[3]) how many time 3


// let sum = 0
// for(let key in obj){
//     if(obj[key] == 1){
//         sum += Number(key)
//     }
// }

// console.log(sum)