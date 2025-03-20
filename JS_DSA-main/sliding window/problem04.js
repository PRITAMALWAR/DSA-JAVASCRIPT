




// Longest Substring with At Most K Distinct Characters



function longestSubstringKDistinct(s, k) {
    let map = {};  // Object to store the count of each character
    let left = 0;
    let maxLength = 0;

    // Step 1: Expand the window with the right pointer
    for (let right = 0; right < s.length; right++) {
        // Add the current character to the map and increase its count
        map[s[right]] = (map[s[right]] || 0) + 1;

        // Step 2: Shrink the window if the number of distinct characters exceeds k
        while (Object.keys(map).length > k) {
            map[s[left]] -= 1;  // Decrease the count of the leftmost character
            if (map[s[left]] === 0) {
                delete map[s[left]];  // Remove the character if its count is 0
            }
            left++;  // Move the left pointer to the right
        }

        // Step 3: Track the maximum length
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
        }
    }

    return maxLength;
}

// Test case
console.log(longestSubstringKDistinct("eceba", 2));  // Output: 3 (Substring "ece")
