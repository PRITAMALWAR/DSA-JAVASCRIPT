let arr1 = [1, 2, 4, 5, 6];
let arr2 = [2, 4, 6, 8];

let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] === arr2[j]) {
    console.log(arr1[i]);  // ✅ common element
    i++;
    j++;
  } else if (arr1[i] < arr2[j]) {
    i++;
  } else {
    j++;
  }
}
