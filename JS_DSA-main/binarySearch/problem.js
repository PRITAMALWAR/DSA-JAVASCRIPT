// Sure! Let me explain Binary Search in a simple way using Hinglish
//  (a mix of Hindi and English) along with a JavaScript example.

// ### Binary Search Concept:

// **Binary Search** ek algorithm hai jo ek sorted (arranged) array mein quickly 
// element ko search karta hai. Yeh kaise kaam karta hai? **Binary Search** "divide and conquer"
//  principle par kaam karta hai, matlab hum array ko half divide karte hain aur fir half-half 
//  karte jaate hain jab tak element mil na jaye.

// Iska main idea yeh hai ki agar humare pass ek sorted array hai, toh hum array ke middle element ko check karte hain, aur decide karte hain ki jo element hum search kar rahe hain, woh middle element se chhota hai ya bada. Uske baad, hum apni search ko left ya right half tak limit kar dete hain, aur yeh process repeat karte hain jab tak element mil na jaye.

// ### Key Steps:

// 1. **Start with the middle element** of the array.
// 2. Agar middle element **search element se equal** hai, toh humne element find kar liya.
// 3. Agar middle element **search element se chhota** hai, toh hum search ko right half mein continue karte hain.
// 4. Agar middle element **search element se bada** hai, toh hum search ko left half mein continue karte hain.
// 5. Agar humara array end tak reach ho jaye (yaani search element nahi milta), toh return karte hain **"Element not found"**.

// ### Example:

// Maan lo humare paas ek sorted array hai:

// ```js
// let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// ```

// Aur hume search karna hai element `7`.

// ### Binary Search Algorithm in JavaScript:

// ```js
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2); // middle index calculate karna

//         // Agar middle element humare target ke equal hai, toh element mil gaya
//         if (arr[mid] === target) {
//             return mid; // return the index of the target element
//         }
//         // Agar target element middle se bada hai, toh search right half mein continue karenge
//         else if (arr[mid] < target) {
//             left = mid + 1; // move left pointer to right side
//         }
//         // Agar target element middle se chhota hai, toh search left half mein continue karenge
//         else {
//             right = mid - 1; // move right pointer to left side
//         }
//     }
//     return -1; // Agar element nahi mila, toh -1 return karenge
// }

// // Test the function
// let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// let target = 7;
// let result = binarySearch(arr, target);

// if (result !== -1) {
//     console.log("Element found at index: " + result);
// } else {
//     console.log("Element not found");
// }
// ```

// ### Explanation:

// - **Step 1:** `left` pointer ko 0 pe set kiya aur `right` pointer ko array ke last element tak.
// - **Step 2:** Hum middle element ko calculate karte hain by using `Math.floor((left + right) / 2)`.
// - **Step 3:** Fir hum check karte hain ki middle element target se barabar hai ya nahi.
//     - Agar **barabar** hai, toh hum uska index return kar dete hain.
//     - Agar **target bada hai**, toh hum `left` pointer ko middle+1 pe move karte hain.
//     - Agar **target chhota hai**, toh hum `right` pointer ko middle-1 pe move karte hain.
// - **Step 4:** Yeh process repeat hoti hai jab tak `left` pointer `right` pointer se bada nahi ho jaata.

// ### Example Walkthrough:

// - **Array:** `[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]`
// - **Target:** `7`

// 1. First, the middle element is `7` (because `arr[4] = 7`).
// 2. Humne directly target `7` ko find kar liya, toh index 3 (0-based index) return ho gaya.

// ### Complexity:
// - **Time Complexity:** O(log n), kyunki har step mein hum array ko half divide karte hain.
// - **Space Complexity:** O(1), kyunki hum extra space ka use nahi karte (hum in-place search kar rahe hain).

// ---

// Yeh tha Binary Search ka simple explanation aur JavaScript example! Agar kuch clear na ho, toh zaroor pucho.