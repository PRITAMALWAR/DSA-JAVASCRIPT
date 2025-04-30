// Find Minimum in Rotated Sorted Array


function findMinInRotatedArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[right]) {
            // Min element is in right half
            left = mid + 1;
        } else {
            // Min is in left half (including mid)
            right = mid;
        }
    }

    return arr[left]; // or arr[right], both are same here
}

// Example
let arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findMinInRotatedArray(arr)); // Output: 0
