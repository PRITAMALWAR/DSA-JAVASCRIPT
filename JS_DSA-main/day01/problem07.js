



// Find the First Non-Repeating Character

function firstNonRepeatingCharacter(str) {
    let charCount = {}; // Object to store the frequency of each character

    // Loop through the string to count the frequency of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = (charCount[char] || 0) + 1; // Increase the count for the character
    }

    // Loop again to find the first character that appears only once
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i]; // Return the first non-repeating character
        }
    }

    return null; // Return null if there are no non-repeating characters
}

console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
console.log(firstNonRepeatingCharacter("aabbcc")); // Output: null
console.log(firstNonRepeatingCharacter("hello"));  // Output: "h"
