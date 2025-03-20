function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false; // If characters at start and end don't match, it's not a palindrome
        }
        start++; // Move start pointer forward
        end--;   // Move end pointer backward
    }

    return true; // If all characters matched, it is a palindrome
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));  // Output: false
