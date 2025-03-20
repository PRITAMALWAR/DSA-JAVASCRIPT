

function reverseVowels(str) {
    let vowels = "aeiouAEIOU";
    let arr = str.split(""); // Convert string to array for easy swapping
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // Move left pointer until we find a vowel
      while (left < right && !vowels.includes(arr[left])) {
        left++;
      }
      // Move right pointer until we find a vowel
      while (left < right && !vowels.includes(arr[right])) {
        right--;
      }
      // Swap vowels at left and right pointers
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
  
      // Move both pointers inwards
      left++;
      right--;
    }
  
    console.log(arr.join("")); // Convert array back to string
  }
  

// input = 
//   2
// abc
// abe

// output = 
// abc
// eba