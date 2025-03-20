

// Longest Substring Without Repeating Characters 

function lengthOfLongestSubstring(s) {
    let map = {};  // Object to store the last index of characters
    let left = 0;
    let maxLength = 0;

    // Step 1: Expand the window with the right pointer
    for (let right = 0; right < s.length; right++) {
        // If the character is already in the window, move the left pointer
        if (map[s[right]] !== undefined && map[s[right]] >= left) {
            left = map[s[right]] + 1;
        }

        // Update the last seen index of the character
        map[s[right]] = right;

        // Step 2: Track the maximum length
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
        }
    }

    return maxLength;
}

// Test case
console.log(lengthOfLongestSubstring("abcabcbb"));  // Output: 3 (Substring "abc")
