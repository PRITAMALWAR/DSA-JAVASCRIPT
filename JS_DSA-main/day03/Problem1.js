
// array sorted or not


function checkArray(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            console.log("No");
            return; // Exit the function if the array is not sorted
        }
    }
    console.log("Yes");
}

// Example usage:
checkArray([1, 2, 3, 4, 5]); // Yes
checkArray([1, 3, 2, 4, 5]); // No
