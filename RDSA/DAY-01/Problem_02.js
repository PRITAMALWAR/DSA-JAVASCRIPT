
// rotated array 



// function reverse(arr, start, end) {
//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// function rotateLeft(arr, k) {
//     let n = arr.length;
//     k = k % n;

//     // Step 1: Reverse first k elements
//     reverse(arr, 0, k - 1);

//     // Step 2: Reverse remaining n-k elements
//     reverse(arr, k, n - 1);

//     // Step 3: Reverse entire array
//     reverse(arr, 0, n - 1);

//     return arr;
// }

// // Test
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;
// console.log(rotateLeft(arr, k)); // Output: [4, 5, 6, 7, 1, 2, 3]









// function reverse(arr, start, end) {
//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// function rotateRight(arr, k) {
//     let n = arr.length;
//     k = k % n; // if k > n

//     // Step 1: Reverse entire array
//     reverse(arr, 0, n - 1);

//     // Step 2: Reverse first k elements
//     reverse(arr, 0, k - 1);

//     // Step 3: Reverse remaining n-k elements
//     reverse(arr, k, n - 1);

//     return arr;
// }

// // Example
// let array = [7, 6, 5, 4, 3, 2, 1];
// let k = 3;
// console.log(rotateRight(array, k)); // Output: [3, 2, 1, 7, 6, 5, 4]






// Time: O(n)
// Space: O(n) (because of new array)













// function reverseArray(arr)
// {
//     let i=0;
//     let j=arr.length-1;
//     while(i<j)
//     {
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         i++;
//         j--;
//     }
//     return arr;
// }

// function reverseArraywithParameter(arr,start,end)
// {
//     let i=start;
//     let j=end;
//     while(i<j)
//     {
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         i++;
//         j--;
//     }
//     return arr;
// }

// function rotateArray(arr,k)
// {
//     // to handle the case when k is greater than the length of the array
//     k=k%arr.length; 
//     // s1 reverse the whole array
//     reverseArraywithParameter(arr,0,arr.length-1);
//     // s2 reverse the first k elements
//     reverseArraywithParameter(arr,0,k-1);
//     // s3 reverse the last n-k elements
//     reverseArraywithParameter(arr,k,arr.length-1);
//     return arr;
// }   

// let arr=[1,2,3,4,5,6,7];
// let k=3;
// console.log(rotateArray(arr,k).toString()); 


