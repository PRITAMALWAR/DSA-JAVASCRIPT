


// 1. Subarray Sum Equals K


function hasSubarraySum(arr, K) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === K) {
                return true; // Subarray found
            }
        }
    }
    return false; // No subarray with sum K
}

let arr = [1, 2, 3, 7, 5];
let K = 12;
console.log(hasSubarraySum(arr, K)); // true





// 2nd method


function hasSubarraySum(arr, K) {
    let sumMap = new Map();
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        if (sum === K) {
            return true; // Found subarray with sum K
        }
        
        if (sumMap.has(sum - K)) {
            return true;
        }
        
        sumMap.set(sum, i); // Store sum and index
    }
    
    return false;
}

// let arr = [1, 2, 3, 7, 5];
// let K = 12;
// console.log(hasSubarraySum(arr, K)); // true
