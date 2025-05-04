
// 1st  method

let arr = [1,2,3,4,5,6,7]

let sm = Math.min(...arr)
let lg = Math.max(...arr)

let sec_sm = Infinity;
let sec_lg = -Infinity;

for(let i = 0; i<arr.length;i++){

    if(arr[i] < sec_sm && arr[i] !== sm){
        sec_sm = arr[i]
    }

    if(arr[i] > sec_lg && arr[i] !== lg){
        sec_lg = arr[i]
    }
}

console.log(sec_sm,sec_lg)





// 2nd method 


// let arr = [3,4,5,6,3,6,9]

// let res = arr.sort((a,b) => a-b)
// console.log(res)

// console.log(arr[1])
// console.log(arr[arr.length-2])