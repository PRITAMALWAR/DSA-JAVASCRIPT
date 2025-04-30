
// Maximum Sum Subarray (Kadane’s Algorithm)

// Ek array diya gaya hai (positive + negative numbers ka mix).
// Tujhe continuous subarray dhoondhna hai jiska sum maximum ho.


// ✅ Approach (Kadane’s Algorithm)
// Kadane’s Algorithm ek greedy algorithm hai jo:

// Har step pe current sum maintain karta hai

// Jab bhi current sum negative hota hai, use 0 kar deta hai

// Maximum sum ko track karta rehta hai


function maxSubArray(arr) {
    let maxSum = arr[0];        // max sum so far
    let currSum = arr[0];       // current sum

    for (let i = 1; i < arr.length; i++) {
        // Either add current element or start new from current
        currSum = Math.max(arr[i], currSum + arr[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

// Example
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr));  // Output: 6











// Brute Force 



// function maxSubArrayBruteForce(arr) {
//     let maxSum = -Infinity;
//     let start = 0, end = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             let currSum = 0;
//             for (let k = i; k <= j; k++) {
//                 currSum += arr[k];
//             }
//             if (currSum > maxSum) {
//                 maxSum = currSum;
//                 start = i;
//                 end = j;
//             }
//         }
//     }

//     let subarray = arr.slice(start, end + 1);
//     return {
//         maxSum,
//         subarray
//     };
// }

// // Example
// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let result = maxSubArrayBruteForce(arr);
// console.log("Max Sum:", result.maxSum);        // Output: 6
// console.log("Subarray:", result.subarray);     // Output: [4, -1, 2, 1]




























