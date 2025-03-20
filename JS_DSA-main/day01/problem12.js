


// Count the Frequency of Each Character in a String



function countCharacterFrequency(str) {
    let frequency = {}; // Object to store character frequencies

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        // If the character is already in the object, increment its count
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1; // If it's not in the object, add it with count 1
        }
    }

    return frequency; // Return the object containing character frequencies
}

console.log(countCharacterFrequency("programming")); // Output: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }
console.log(countCharacterFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
