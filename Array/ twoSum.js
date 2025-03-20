// function twoSum(nums, target) {
//     let obj = {}; 
  
//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i]; 
  
//       if (obj[complement] !== undefined) {
//         return [obj[complement], i];
//       }
  
//       obj[nums[i]] = i;
//     }
    
//     return null; 
//   }

  
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); 





// =============================================================


function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return null; 
  }
  


const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); 
