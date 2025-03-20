

function rotate(nums, k) {
    k = k % nums.length;  
    let left = 0;
    let right = nums.length - 1;

    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];  
            start++;
            end--;
        }
    }

    reverse(left, right);

    reverse(left, k - 1);

    reverse(k, right);

    return nums;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(arr, 3));  // Output: [5, 6, 7, 1, 2, 3, 4]
