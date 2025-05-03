

function moveZeroes(arr) {
    let left = 0;
    
    for (let right = 0; right < arr.length; right++) {
      if (arr[right] !== 0) {
        // swap
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
      }
    }
  
    return arr;
  }
  
  console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
  