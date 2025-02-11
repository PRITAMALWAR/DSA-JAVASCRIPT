let arr = [];

let item1 = [1, 2, 3, 4, 5];
let item2 = [4, 5, 6, 7, 8];
let item3 = [9, 10, 11, 12,13];

arr.push(item1);
arr.push(item2);
arr.push(item3);

// for (let i = 0; i < arr.length; i++) {
//     let bag = [];

//     for (let j = 0; j < arr[i].length; j++) {
//         bag.push(arr[i][j]);
//     }
//     console.log(bag.join(" "));    
// }





// row convet to column

for (let j = 0; j<arr[0].length;j++) {
    let bag = [];

    for (let i = 0; i < arr.length; i++) {
        bag.push(arr[i][j]);
    }
    console.log(bag.join(" "));    
}

// column convet to row


// for (let i = 0; i < arr.length; i++) {
//     let bag = [];

//     for (let j = 0; j < arr[i].length; j++) {
//         bag.push(arr[i][j]);
//     }
//     console.log(bag.join(" "));    
// }
