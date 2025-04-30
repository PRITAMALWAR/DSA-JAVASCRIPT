// Find Peak Using Binary Search


function findPeakElement(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[mid + 1]) {
            // You're on the decreasing slope → move left
            right = mid;
        } else {
            // You're on the increasing slope → move right
            left = mid + 1;
        }
    }

    return left; // or right — both point to peak
}

// Example
let arr = [1, 3, 20, 4, 1, 0];
console.log(findPeakElement(arr)); // Output: 2 (index of 20)
