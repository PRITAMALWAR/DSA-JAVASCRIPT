

function ThreeSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === target) {
                    return [i, j, k];
                }
            }
        }
    }
    return null;
}

let arr = [2, 3, 4, 5, 2, 7];
let target = 9;
console.log(ThreeSum(arr, target)); // Output: e.g., [0, 1, 4]
