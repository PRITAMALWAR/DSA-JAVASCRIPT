function reverseString(str) {
    let reversed = ""; // Initialize an empty string for the result
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Add each character from the end to the result
    }
    return reversed; // Return the reversed string
}

console.log(reverseString("hello")); // Output: "olleh"
