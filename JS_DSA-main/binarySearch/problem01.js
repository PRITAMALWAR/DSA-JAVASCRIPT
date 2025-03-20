function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // middle index calculate karna

        // Agar middle element humare target ke equal hai, toh element mil gaya
        if (arr[mid] === target) {
            return mid; // return the index of the target element
        }
        // Agar target element middle se bada hai, toh search right half mein continue karenge
        else if (arr[mid] < target) {
            left = mid + 1; // move left pointer to right side
        }
        // Agar target element middle se chhota hai, toh search left half mein continue karenge
        else {
            right = mid - 1; // move right pointer to left side
        }
    }
    return -1; // Agar element nahi mila, toh -1 return karenge
}

// Test the function
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 7;
let result = binarySearch(arr, target);

if (result !== -1) {
    console.log("Element found at index: " + result);
} else {
    console.log("Element not found");
}
