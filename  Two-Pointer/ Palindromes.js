function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    let isPalindrome = true;

    while (left < right) {
        if (s[left] !== s[right]) {
            isPalindrome = false;
            break;
        }
        left++;
        right--;
    }

    return isPalindrome;
}

// Example 1: Check if the string "level" is a palindrome
let input1 = "level";
console.log(isPalindrome(input1));  // Output: true

// Example 2: Check if the string "hello" is a palindrome
let input2 = "hello";
console.log(isPalindrome(input2));  // Output: false

// Example 3: Check if the string "racecar" is a palindrome
let input3 = "racecar";
console.log(isPalindrome(input3));  // Output: true

// Example 4: Check if the string "madam" is a palindrome
let input4 = "madam";
console.log(isPalindrome(input4));  // Output: true

// Example 5: Check if the string "world" is a palindrome
let input5 = "world";
console.log(isPalindrome(input5));  // Output: false
