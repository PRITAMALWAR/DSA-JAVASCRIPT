
// Anagram Check



function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false; // If lengths are different, they cannot be anagrams
    }

    let charCount = {}; // Object to store the frequency of characters

    // Count the characters in the first string
    for (let i = 0; i < str1.length; i++) {
        charCount[str1[i]] = (charCount[str1[i]] || 0) + 1;
    }

    // Check the characters in the second string
    for (let i = 0; i < str2.length; i++) {
        if (!charCount[str2[i]]) {
            return false; // If a character in str2 is not in str1, return false
        }
        charCount[str2[i]] -= 1; // Decrease the frequency count for the character
    }

    return true; // If all characters match, the strings are anagrams
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false
console.log(areAnagrams("race", "care"));     // Output: true
