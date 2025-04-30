// Find Kth Smallest Element


function findKthSmallest(arr, k) {
    return arr[k - 1];  // Sorted array mein kth smallest element directly
}

// Example
let arr = [2, 4, 5, 8, 10, 12, 14];
let k = 3;
console.log(findKthSmallest(arr, k));  // Output: 5

let arr2 = [1, 3, 7, 10, 15];
let k2 = 2;
console.log(findKthSmallest(arr2, k2)); // Output: 3
