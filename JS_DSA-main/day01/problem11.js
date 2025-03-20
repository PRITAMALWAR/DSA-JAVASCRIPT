




function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false; // If characters don't match, return false
        }
        start++;
        end--;
    }

    return true; // If all characters match, return true
}

console.log(isPalindrome("racecar"));   // Output: true
console.log(isPalindrome("hello"));     // Output: false
console.log(isPalindrome("madam"));     // Output: true
