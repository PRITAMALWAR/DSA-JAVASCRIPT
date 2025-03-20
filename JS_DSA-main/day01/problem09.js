





// Remove Duplicate Characters from a String



function removeDuplicates(str) {
    let result = ""; // String to store the result without duplicates
    let seen = {}; // Object to keep track of characters we've already added

    for (let i = 0; i < str.length; i++) {
        if (!seen[str[i]]) {
            result += str[i]; // Add the character to result if it's not seen yet
            seen[str[i]] = true; // Mark the character as seen
        }
    }

    return result; // Return the string with no duplicates
}

console.log(removeDuplicates("programming")); // Output: "progamin"
console.log(removeDuplicates("hello"));       // Output: "helo"
console.log(removeDuplicates("aaaaa"));       // Output: "a"
