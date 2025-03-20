


// without sorting method





function arrangeDescending(arr) {
    let n = arr.length;

    // Loop through the array to arrange elements in descending order
    for (let i = 0; i < n; i++) {
        // Find the largest element in the remaining unsorted part
        let maxIdx = i; // Start with the current index as the max index
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[maxIdx]) {
                maxIdx = j;  // Update maxIdx if we find a larger element
            }
        }
        
        // Swap the largest element with the element at index i
        if (maxIdx !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIdx];
            arr[maxIdx] = temp;
        }
    }

    return arr;
}

// Test the function with an example array
let arr = [3, 1, 4, 15, 9, 2, 6, 8, 7, 10];
let result = arrangeDescending(arr);

console.log(result);  // Output will be the array in descending order
