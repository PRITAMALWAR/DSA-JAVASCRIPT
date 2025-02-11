let arr = []

let item1 = [1, 2, 3]
let item2 = [4, 5, 6]
let item3 = [7, 8, 9]

arr.push(item1)
arr.push(item2)
arr.push(item3)

let row = arr.length;
let column = arr[0].length;

let output = []

for (let i = 0; i < row; i++) {
    if (i % 2 == 0) {
        for (let j = 0; j < column; j++) {
            output.push(arr[i][j]);
        }
    }
    else {
        for (let j = column - 1; j >= 0; j--) {
            output.push(arr[i][j]);
        }
    }
}

console.log(output.join(" "));
