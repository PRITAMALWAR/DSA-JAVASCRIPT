
// Brute Force Approach to Find the Maximum Sum Subarray



function maxSubArraySum(arr) {
    let maxSum = -Infinity;  // Start with a very small number

    // Brute Force: Check every possible subarray
    for (let i = 0; i < arr.length; i++) {  // Start of subarray
        for (let j = i; j < arr.length; j++) {  // End of subarray
            let currentSum = 0;

            // Calculate sum of elements from i to j
            for (let k = i; k <= j; k++) {
                currentSum += arr[k];
            }

            // Keep track of the maximum sum found
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }

    return maxSum;  // Return the maximum sum
}

console.log(maxSubArraySum([1, -2, 3, 4, -1, 2, 1, -5, 4]));  // Output: 8
