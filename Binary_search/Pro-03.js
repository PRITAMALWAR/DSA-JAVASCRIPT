// First Occurrence Using Binary Search



function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;        // Possible answer
            right = mid - 1;     // Left side me aur dekh
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// Example
let arr = [2, 4, 4, 4, 6, 8];
console.log(findFirstOccurrence(arr, 4)); // Output: 1
