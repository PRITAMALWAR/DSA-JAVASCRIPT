

// Count Pairs with Given Sum


function countPairs(arr, K) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === K) {
                count++;
            }
        }
    }
    return count;
}

let arr = [1, 5, 7, 1];
let K = 6;
console.log(countPairs(arr, K)); // 2











function countPairs(arr, K) {
    let count = 0;
    let freqMap = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        let complement = K - arr[i];
        if (freqMap.has(complement)) {
            count += freqMap.get(complement);
        }
        
        // Update frequency map
        freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
    }
    
    return count;
}

// let arr = [1, 5, 7, 1];
// let K = 6;
// console.log(countPairs(arr, K)); // 2
