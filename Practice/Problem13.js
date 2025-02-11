// give me last column

// let arr = []

// let item1 = [1, 2, 3]
// let item2 = [4, 5, 6]
// let item3 = [7, 8, 9]

// arr.push(item1)
// arr.push(item2)
// arr.push(item3)

// let bag = []
// let last = arr[0].length-1

// for(let i = 0; i<arr.length; i++){
//     bag.push(arr[i][last])
// }
// console.log(bag.join(" "))




// give me first column

let arr = []

let item1 = [1, 2, 3]
let item2 = [4, 5, 6]
let item3 = [7, 8, 9]

arr.push(item1)
arr.push(item2)
arr.push(item3)

let bag = []

for (let i = 0; i < arr.length; i++) {
    bag.push(arr[i][0]);  // Access the first element (index 0) of each row
}

console.log(bag.join(" "));
