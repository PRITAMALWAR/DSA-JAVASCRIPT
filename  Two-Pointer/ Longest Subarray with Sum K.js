
// Tumhe ek array diya gaya hai aur ek number k.
//  Tumhe wo longest subarray find karni hai jiska sum k ho.



let arr = [1, 2, 3, 4, 5];
let k = 9;

let left = 0;
let sum = 0;
let maxLen = 0;

for (let right = 0; right < arr.length; right++) {
  sum += arr[right];  // Expand window

  while (sum > k) {    // Shrink window if sum > k
    sum -= arr[left];
    left++;
  }

  if (sum === k) {     // Update maxLen if sum is exactly k
    maxLen = Math.max(maxLen, right - left + 1);
  }
}

console.log(maxLen);
