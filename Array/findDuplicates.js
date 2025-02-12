function findDuplicates(arr) {
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }

    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 2, 3, 5])); // Output: [2, 3]
