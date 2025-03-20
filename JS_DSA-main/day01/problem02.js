
// Reverse words in a sentence: "Hello World" → "olleH dlroW"


function reverseWords(sentence) {
    let result = "";
    let currentWord = "";

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            currentWord = sentence[i] + currentWord; // Build reversed word
        } else {
            result += currentWord + " "; // Append reversed word and space
            currentWord = ""; // Reset current word
        }
    }

    result += currentWord; // Append the last reversed word
    return result;
}

console.log(reverseWords("Hello World")); 
// Output: "olleH dlroW"
