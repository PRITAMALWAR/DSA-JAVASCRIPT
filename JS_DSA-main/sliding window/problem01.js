

// Maximum Sum of a Subarray of Size k


function maxSumSubarray(arr, k) {
    let maxSum = -Infinity;  
    let windowSum = 0;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right];  

        // Step 2: If the window size exceeds 'k', shrink it by moving the left pointer
        if (right - left + 1 > k) {
            windowSum -= arr[left];  // Subtract the element at the left pointer
            left++;  // Move the left pointer to the right to maintain the window size
        }

        // Step 3: Track the maximum sum encountered
        if (right - left + 1 === k) {
            if (windowSum > maxSum) {
                maxSum = windowSum;
            }
        }
    }

    return maxSum;
}

// Test case
let arr = [2, 1, 5, 1, 3, 2];
let k = 3;
console.log(maxSumSubarray(arr, k));  // Output: 9 (Subarray [5, 1, 3])
