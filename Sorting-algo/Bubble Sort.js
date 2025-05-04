// **Bubble Sort** 

// ---

// # 📘 **Bubble Sort Notes (DSA - JavaScript)**

// ---

// ## 🔷 1. What is Bubble Sort?

// **Bubble Sort** is a simple sorting method where:

// * We compare two numbers at a time.
// * If they are in the wrong order, we **swap** them.
// * This process is repeated until the array is **fully sorted**.

// It is called **“Bubble” Sort** because large numbers **bubble up to the end** step by step.

// ---

// ## 🔷 2. How it Works – Step-by-Step

// Let’s take an example array:

// ```
// Input: [5, 2, 4, 1]
// Goal: Sort it in ascending order → [1, 2, 4, 5]
// ```

// ---

// ### ✅ **Step 1 (First Pass)**

// * Compare 5 and 2 → swap → `[2, 5, 4, 1]`
// * Compare 5 and 4 → swap → `[2, 4, 5, 1]`
// * Compare 5 and 1 → swap → `[2, 4, 1, 5]`
//   🔹 Largest number `5` is now at the end.

// ---

// ### ✅ **Step 2 (Second Pass)**

// * Compare 2 and 4 → OK → `[2, 4, 1, 5]`
// * Compare 4 and 1 → swap → `[2, 1, 4, 5]`
// * Compare 4 and 5 → OK
//   🔹 Second largest `4` is now at its place.

// ---

// ### ✅ **Step 3 (Third Pass)**

// * Compare 2 and 1 → swap → `[1, 2, 4, 5]`
// * Compare 2 and 4 → OK
// * Compare 4 and 5 → OK
//   🔹 Now all are nearly sorted.

// ---

// ### ✅ **Step 4 (Final Check)**

// * Compare 1 and 2 → OK
// * Compare 2 and 4 → OK
// * Compare 4 and 5 → OK
//   🔹 No swaps happened → Sorting Done ✅

// ---

// ### 🔚 Final Output: `[1, 2, 4, 5]`

// ---

// ## 🔷 3. Bubble Sort Code (JavaScript with console.log)


function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.log(arr)
}

bubbleSort([5, 2, 4, 1])


// ---

// ## 🔷 4. When to Use Bubble Sort

// ✅ **Use when**:

// * List is **small** (less than 20 items)
// * You are **learning sorting** (for practice)
// * You want a **very simple algorithm**

// ❌ **Don’t use when**:

// * List is **large** (100+ items)
// * You need **fast sorting**

// ---

// ## 🔷 5. Time Complexity

// | Case          | Time  |
// | ------------- | ----- |
// | Best (Sorted) | O(n)  |
// | Average       | O(n²) |
// | Worst         | O(n²) |

// 👎 It is **slow** for big lists.

// ---

// ## 🔷 6. Summary Table

// | Feature          | Info                       |
// | ---------------- | -------------------------- |
// | Name             | Bubble Sort                |
// | Type             | Comparison-based sorting   |
// | Works on         | Arrays/lists               |
// | Swaps            | Yes (if out of order)      |
// | Use Case         | Small lists, learning DSA  |
// | Time Complexity  | O(n²)                      |
// | Space Complexity | O(1) (no extra space used) |

// ---

// ## ✅ Simple Words Summary

// * **Compare + Swap** again and again.
// * Bade number **right side jaate hain**.
// * Chhote number **left side aa jaate hain**.
// * Process repeat hota hai jab tak pura array sorted na ho jaaye.

// ---





