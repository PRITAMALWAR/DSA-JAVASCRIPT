// Function to find the first occurrence of a target using binary search
function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let firstOccurrence = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            firstOccurrence = mid;  // Update the first occurrence
            right = mid - 1;        // Continue searching in the left half
        } else if (arr[mid] < target) {
            left = mid + 1;         // Search in the right half
        } else {
            right = mid - 1;        // Search in the left half
        }
    }

    return firstOccurrence;
}

// Function to find the last occurrence of a target using binary search
function findLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let lastOccurrence = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            lastOccurrence = mid;  // Update the last occurrence
            left = mid + 1;        // Continue searching in the right half
        } else if (arr[mid] < target) {
            left = mid + 1;         // Search in the right half
        } else {
            right = mid - 1;        // Search in the left half
        }
    }

    return lastOccurrence;
}

// Function to find frequency of all elements in a sorted array
function findFrequency(arr) {
    let frequencyMap = {};

    // Loop through the array and find frequency of each element
    for (let i = 0; i < arr.length; i++) {
        let target = arr[i];

        // If the element is already processed, skip it
        if (frequencyMap[target] !== undefined) continue;

        // Find first and last occurrence of the target element
        let firstIndex = findFirstOccurrence(arr, target);
        let lastIndex = findLastOccurrence(arr, target);

        // Frequency is the difference between lastIndex and firstIndex + 1
        if (firstIndex !== -1 && lastIndex !== -1) {
            frequencyMap[target] = lastIndex - firstIndex + 1;
        }
    }

    return frequencyMap;
}

// Test the function with the given array
let arr = [1, 2, 4, 4, 15, 15, 15, 15, 15, 15, 15, 23, 27, 32];
let result = findFrequency(arr);

console.log(result);
