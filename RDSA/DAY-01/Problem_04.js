function isPalindrome(str) {
    // Convert string to lowercase and remove non-alphanumeric characters for comparison
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let start = 0;
    let end = str.length - 1;

    // Two-pointer comparison
    while (start < end) {
        if (str[start] !== str[end]) {
            return false; // not a palindrome
        }
        start++;
        end--;
    }
    
    return true; // palindrome
}

// Example
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
