

function maxSubarraySum(arr) {
    let maxSum = arr[0], currSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (currSum + arr[i] > arr[i]) {
            currSum += arr[i];
        } else {
            currSum = arr[i];
        }

        if (currSum > maxSum) {
            maxSum = currSum;
        }
    }

    return maxSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
