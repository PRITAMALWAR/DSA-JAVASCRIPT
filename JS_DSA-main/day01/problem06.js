function countVowels(str) {
    let count = 0; // Initialize counter to keep track of vowels
    let vowels = "aeiou"; // String containing all vowels

    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
            count++; // Increment the counter if the character is a vowel
        }
    }

    return count; // Return the total count of vowels
}

console.log(countVowels("hello"));  // Output: 2
console.log(countVowels("world"));  // Output: 1
console.log(countVowels("aeiou"));  // Output: 5
