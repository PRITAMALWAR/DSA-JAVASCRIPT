

// ✅ Step 3: Loop Through Array

let nums = [1, 2, 3, 4];

// for loop
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// for...of
for (let n of nums) {
  console.log(n);
}

// forEach
nums.forEach((n) => console.log(n));
