

// Find the Longest Substring Without Repeating Characters





function longestUniqueSubstring(str) {
    let seen = {}; // Object to store characters and their indices
    let maxLength = 0; // Variable to store the length of the longest unique substring
    let start = 0; // Pointer for the start of the current substring

    for (let end = 0; end < str.length; end++) {
        if (seen[str[end]] >= start) {
            start = seen[str[end]] + 1; // Move the start to the right of the last occurrence of str[end]
        }
        seen[str[end]] = end; // Update the last occurrence index of the current character
        maxLength = Math.max(maxLength, end - start + 1); // Update maxLength if a longer unique substring is found
    }

    return maxLength; // Return the length of the longest unique substring
}

console.log(longestUniqueSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(longestUniqueSubstring("bbbbb"));    // Output: 1 ("b")
console.log(longestUniqueSubstring("pwwkew"));   // Output: 3 ("wke")
