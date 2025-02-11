

// let arr = [7,2,7,7,3,4,2];
// let obj = {}

// for(let i = 0; i<arr.length; i++){
    
//     if(obj[arr[i]] == undefined){
//         obj[arr[i]] = 1
//     }
//     else{
//         obj[arr[i]]++
//     }

// }


// let sum = 0
// for(let key in obj){

//     if(obj[key] >= 3){
//         sum += Number(key)
//     }
// }
// console.log(sum)




let arr = [7,2,7,7,3,4,2];
let obj = {}

for(let i = 0; i<arr.length; i++){
    
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1
    }
    else{
        obj[arr[i]]++
    }

}


for(let key in obj){
    if(obj[key]== 1){
        console.log(key)
    }
}