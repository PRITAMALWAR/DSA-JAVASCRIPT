// ✅ Recursive Binary Search with


function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Base case
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Example
let arr = [2, 4, 6, 8, 10, 12];
console.log(binarySearchRecursive(arr, 10)); // Output: 4
