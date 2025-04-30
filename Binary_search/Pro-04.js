// Last Occurrence Using Binary Search



function findLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;      
            left = mid + 1;   
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
console.log(findLastOccurrence(arr, 4)); // Output: 3
