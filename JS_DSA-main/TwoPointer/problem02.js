function removeDuplicates(arr) {
    if (arr.length === 0) return 0; 

    let left = 0; 
    for (let right = 1; right < arr.length; right++) {

        if (arr[right] !== arr[left]) {
            left++; 
            arr[left] = arr[right]; 
        }
    }
    return left + 1;  
}

let nums = [1, 1, 2, 2, 3, 3, 4];
let newLength = removeDuplicates(nums);
console.log(newLength); // 4 (Array becomes [1, 2, 3, 4])
