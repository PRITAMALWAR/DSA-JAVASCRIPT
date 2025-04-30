// ✅ Step 6: Slice vs Splice


let a = [1, 2, 3, 4, 5];

// slice (copy, no change)
let part = a.slice(1, 4);   // [2, 3, 4]

// splice (change original)
a.splice(2, 1);             // Remove 1 item at index 2
a.splice(1, 0, 99);         // Insert 99 at index 1
