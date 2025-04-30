

// reverse an array 

// Time Complexity: O(n) – Each element is swapped once.
// Space Complexity: O(1) – Swapping is in-place.


// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr); // [5, 4, 3, 2, 1]


// // ✅ 2. Using a for loop (Manual Reverse)

// let arr = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
// }

// console.log(reversed); // [5, 4, 3, 2, 1]



// ✅ 3. Using while loop (In-place Swap)


// let arr = [1, 2, 3, 4, 5];
// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap
//     start++;
//     end--;
// }

// console.log(arr); // [5, 4, 3, 2, 1]



// ✅ 7. Stack (using pop)


// let stack = [...arr];
// let reversed = [];
// while (stack.length) {
//     reversed.push(stack.pop());
// }
