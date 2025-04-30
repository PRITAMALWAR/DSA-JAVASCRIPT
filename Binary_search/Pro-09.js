// Find the Square Root Using Binary Search


function sqrt(num) {
    if (num === 0 || num === 1) return num;  // Base case

    let left = 0;
    let right = num;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midSquared = mid * mid;

        if (midSquared === num) {
            return mid;  // Exact square root
        } else if (midSquared < num) {
            left = mid + 1;
            result = mid;  // Store the last valid mid
        } else {
            right = mid - 1;
        }
    }

    return result;  // Return the floor of the square root
}

// Example
console.log(sqrt(10));  // Output: 3
console.log(sqrt(16));  // Output: 4
