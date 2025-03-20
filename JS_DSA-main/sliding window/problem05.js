




// Find All Anagrams in a String





function findAnagrams(s, p) {
    let result = [];
    let map = {};  // Frequency map of characters in string p
    let windowMap = {};  // Frequency map of characters in current window
    let left = 0;

    // Step 1: Populate the map with frequency of characters in p
    for (let char of p) {
        map[char] = (map[char] || 0) + 1;
    }

    // Step 2: Expand the window with the right pointer
    for (let right = 0; right < s.length; right++) {
        let charRight = s[right];
        windowMap[charRight] = (windowMap[charRight] || 0) + 1;

        // Step 3: If the window size exceeds the length of p, move the left pointer
        if (right - left + 1 > p.length) {
            let charLeft = s[left];
            windowMap[charLeft] -= 1;
            if (windowMap[charLeft] === 0) {
                delete windowMap[charLeft];
            }
            left++;
        }

        // Step 4: Check if the frequency map matches
        if (right - left + 1 === p.length) {
            let isAnagram = true;
            for (let char in map) {
                if (map[char] !== windowMap[char]) {
                    isAnagram = false;
                    break;
                }
            }

            if (isAnagram) {
                result.push(left);
            }
        }
    }

    return result;
}

// Test case
console.log(findAnagrams("cbaebabacd", "abc"));  // Output: [0, 6]
