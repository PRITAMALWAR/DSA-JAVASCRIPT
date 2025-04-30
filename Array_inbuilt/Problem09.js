// ✅ Step 9: Join, Split, Fill, Flat


let words = ['hello', 'world'];

let str = words.join(' ');    // 'hello world'

let filled = new Array(5).fill(0); // [0, 0, 0, 0, 0]

let nested = [1, [2, [3]]];
let flat = nested.flat(2);    // [1, 2, 3]
