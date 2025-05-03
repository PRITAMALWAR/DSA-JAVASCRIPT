// Do sorted arrays hain. Tumhe wo elements dhoondhne hain jo dono me aate ho, 
// aur agar duplicate baar-baar aata hai,
//  toh jitni baar common ho utni baar print karo.



let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 2, 3, 5];

let i = 0;
let j = 0;
let result = [];

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] === arr2[j]) {
    result.push(arr1[i]);
    i++;
    j++;
  } else if (arr1[i] < arr2[j]) {
    i++;
  } else {
    j++;
  }
}

console.log(result);
