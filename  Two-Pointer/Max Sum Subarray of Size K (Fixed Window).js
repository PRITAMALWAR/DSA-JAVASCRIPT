// Tumhe ek array diya gaya hai aur ek number k.
// Tumhe woh continuous subarray dhoondhni hai jiska size k ho aur sum sabse zyada ho.



let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

let left = 0;
let right = 0;
let sum = 0;
let maxSum = 0;

while (right < arr.length) {
  sum += arr[right];

  if (right - left + 1 === k) {
    if (sum > maxSum) {
      maxSum = sum;
    }

    sum -= arr[left];
    left++;
  }

  right++;
}

console.log(maxSum);
