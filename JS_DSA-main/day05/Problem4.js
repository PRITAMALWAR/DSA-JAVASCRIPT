// . Merge Two Sorted Arrays Without Extra Space


function mergeArrays(arr1, arr2) {
    let merged = arr1.concat(arr2); // Merge arrays
    return merged.sort((a, b) => a - b); // Sort merged array
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(mergeArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]







// 2nd method

function mergeArrays(arr1, arr2) {
    let i = arr1.length - 1;
    let j = 0;
    
    // Merge in place
    while (i >= 0 && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            [arr1[i], arr2[j]] = [arr2[j], arr1[i]]; // Swap
        }
        
        if (i === 0) break;
        i--;
        j++;
    }
    
    // Sort both arrays
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    
    return [...arr1, ...arr2];
}

// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
console.log(mergeArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
