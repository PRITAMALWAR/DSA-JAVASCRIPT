

// Merging Two Sorted Arrays



function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0;  // Pointer for arr1
    let j = 0;  // Pointer for arr2

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Append remaining elements
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// Test case
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));  // Output: [1, 2, 3, 4, 5, 6]
