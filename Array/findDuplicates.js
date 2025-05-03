function findDuplicates(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }


    let duplicates = [];
    for (let key in obj) {
        if (obj[key] > 1) {
            duplicates.push(Number(key));
        }
    }

    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 2, 3, 5])); // Output: [2, 3]
