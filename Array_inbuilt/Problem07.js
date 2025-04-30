// ✅ Step 7: Map, Filter, Reduce


let nums = [1, 2, 3, 4];

// map → transform
let doubled = nums.map(n => n * 2); // [2, 4, 6, 8]

// filter → select some
let evens = nums.filter(n => n % 2 === 0); // [2, 4]

// reduce → single value
let sum = nums.reduce((acc, n) => acc + n, 0); // 10
