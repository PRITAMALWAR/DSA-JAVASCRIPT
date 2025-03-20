// . Find All Triplets with Zero Sum






function findTriplets(arr) {
    let triplets = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return triplets;
}

let arr = [-1, 0, 1, 2, -1, -4];
console.log(findTriplets(arr)); // [[-1, -1, 2], [-1, 0, 1]]











function findTriplets(arr) {
    arr.sort((a, b) => a - b);
    let triplets = [];
    
    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // Skip duplicates
        
        let left = i + 1, right = arr.length - 1;
        
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            
            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
                
                // Skip duplicates
                while (arr[left] === arr[left - 1]) left++;
                while (arr[right] === arr[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return triplets;
}

// let arr = [-1, 0, 1, 2, -1, -4];
console.log(findTriplets(arr)); // [[-1, -1, 2], [-1, 0, 1]]
