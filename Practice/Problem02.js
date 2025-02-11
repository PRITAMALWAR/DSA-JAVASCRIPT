let arr = [2, 3, 4, 3, 4, 6, 8, 9, 20, 3, 91];

let max = arr[0];  // Set max to the first element of the array
let min = arr[0];  // Set min to the first element of the array

for (let i = 1; i < arr.length; i++) {  // Start from index 1, as max and min are already initialized
    if (arr[i] > max) {
        max = arr[i];  // Update max if current element is greater
    }
    if (arr[i] < min) {
        min = arr[i];  // Update min if current element is smaller
    }
}

console.log("MAX : " + max);
console.log("MIN : " + min);
