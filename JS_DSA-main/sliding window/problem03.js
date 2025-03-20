

// Minimum Subarray Length with Sum Greater Than or Equal to S


function minSubArrayLen(S, nums) {
    let left = 0;
    let minLength = Infinity;
    let windowSum = 0;

    // Step 1: Expand the window with the right pointer
    for (let right = 0; right < nums.length; right++) {
        windowSum += nums[right];

        // Step 2: Contract the window if the sum >= S
        while (windowSum >= S) {
            let currentLength = right - left + 1;
            if (currentLength < minLength) {
                minLength = currentLength;
            }
            windowSum -= nums[left];  // Shrink the window from the left
            left++;  // Move the left pointer to the right
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Test case
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));  // Output: 2 (Subarray [4, 3])
