// Count Occurrences of Element



function findFirstOccurrence(arr, target) {
    let left = 0, right = arr.length - 1, result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // Go left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

function findLastOccurrence(arr, target) {
    let left = 0, right = arr.length - 1, result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            result = mid;
            left = mid + 1; // Go right
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

function countOccurrences(arr, target) {
    const first = findFirstOccurrence(arr, target);
    if (first === -1) return 0;

    const last = findLastOccurrence(arr, target);
    return last - first + 1;
}

// Example
let arr = [2, 4, 4, 4, 6, 8];
console.log(countOccurrences(arr, 4)); // Output: 3
