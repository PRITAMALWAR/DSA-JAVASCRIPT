
// Tumhe ek array me unique pairs find karne 
// hain jinka sum given number ke equal ho.


function findPairs(arr, target) {
    let pairs = []; 
    for (let i = 0; i < arr.length; i++) { 
        for (let j = i + 1; j < arr.length; j++) { 
            if (arr[i] + arr[j] === target) { 
                pairs.push([arr[i], arr[j]]); 
            }
        }
    }
    return pairs;
}

let arr = [1, 2, 3, 4, 5];
let target = 5;
console.log(findPairs(arr, target)); 
// Output: [[1, 4], [2, 3]]



/////  second Method  ////

function findPairsOptimized(arr, target) {
    arr.sort((a, b) => a - b); // Array ko sort karo
    let pairs = [];
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            pairs.push([arr[left], arr[right]]);
            left++;
            right--;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return pairs;
}
