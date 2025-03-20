function maxSubArrayLen(nums, target) {
    let left = 0;
    let sum = 0;  
    let maxLength = 0;  

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; 

        while (sum > target) {
            sum -= nums[left];
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(maxSubArrayLen([1, 2, 3, 4, 5], 11));  // Output: 3 ([3, 4, 5])
