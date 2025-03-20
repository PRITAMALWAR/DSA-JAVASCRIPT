



// Agar tumhe Merge Sort ka ek simple approach chahiye, to hum concept 
// ko step-by-step dekhenge bina extra complications ke. Samajhne ke liye bas 2 cheezon par dhyan do:

// Array ko baar-baar todna (Divide karna).
// Todte-todte chhote sorted parts ko wapas merge karna.




// Simple Approach:
// Idea:
// Array todte jao jab tak har part ka size 1 na ho jaye (size 1 ka array hamesha sorted hota hai).
// Phir chhote sorted arrays ko combine karke ek bada sorted array banao.
// Example ke saath:
// Array: [6, 3, 8, 5]

// Tod do:
// [6, 3] aur [8, 5]
// Aur todte raho:
// [6], [3] aur [8], [5]
// Ab combine karke sort karo:
// [6] aur [3] → [3, 6]
// [8] aur [5] → [5, 8]
// Finally, merge karo:
// [3, 6] aur [5, 8] → [3, 5, 6, 8]
// Bas, sorted array mil gaya!



function mergeSort(arr) {
    // Agar array ka size 1 ya chhota hai, to wahi return kar do
    if (arr.length <= 1) {
        return arr;
    }

    // Array ko do parts me tod do
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));  // Left part sort karo
    let right = mergeSort(arr.slice(mid));   // Right part sort karo

    // Dono sorted parts ko merge karke ek sorted array banao
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Left aur Right array ko compare karke sorted result banao
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Bache hue elements ko add kar do
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Test karo
let array = [6, 3, 8, 5, 2, 7, 4, 1];
console.log(mergeSort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// Steps Summary (For Easy Memorization):
// Divide: Array ko chhote parts me todte raho (recursion use karke).
// Merge: Chhote arrays ko compare karke merge karo.
// Repeat until poora array sorted ho jaye.
// Isme recursion apne aap kaam kar leta hai, sirf merge ka logic tumhe likhna hota hai.


