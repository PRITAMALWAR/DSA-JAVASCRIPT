// Binary Search (Basic Idea)
// Binary Search ek algorithm hai jo sorted array pe kaam karta hai.
// Iska basic idea hai:

// Array ke middle element ko check kar.

// Agar wo target hai, toh mil gaya.

// Agar target chhota hai, toh left half me ja.

// Agar target bada hai, toh right half me ja.

// Repeat jab tak mil na jaye ya array khatam na ho jaye.



function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // target not found
}

// Example
let arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7)); // Output: 3





