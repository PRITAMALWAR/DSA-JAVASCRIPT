let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

let i = 0;
let j = 0;
let merged = [];

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merged.push(arr1[i]);
    i++;
  } else {
    merged.push(arr2[j]);
    j++;
  }
}

// agar koi bacha hua ho
while (i < arr1.length) {
  merged.push(arr1[i]);
  i++;
}

while (j < arr2.length) {
  merged.push(arr2[j]);
  j++;
}

console.log(merged);
