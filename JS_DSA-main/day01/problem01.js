
// Find the longest word in a sentence.

function findLongestWord(sentence) {
    let longestWord = "";
    let currentWord = "";

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            currentWord += sentence[i];
        } else {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = ""; // Reset for next word
        }
    }

    // Check the last word in the sentence
    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }

    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); 
// Output: "jumps"
