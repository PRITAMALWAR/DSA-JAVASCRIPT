

let arr = []

let item1 = [1,2,3]
let item2 = [4,5,6]
let item3 = [7,8,9]

arr.push(item1)
arr.push(item2)
arr.push(item3)

let column = arr[0].length;
let row = arr.length;

let d1 = []
let d2 = []

for(let i = 0; i<arr.length; i++){
    d1.push(arr[i][i])
}
console.log(d1)

for(let i = 0; i<row;i++){
    // d1.push(arr[i][i])
    d2.push(arr[i][column-1-i])
}
console.log(d2)
