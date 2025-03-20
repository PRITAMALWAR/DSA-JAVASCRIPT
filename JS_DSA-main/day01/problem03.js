function isRotation(s1, s2) {
    if (s1.length !== s2.length) {
        return false; // If lengths are different, not a rotation
    }

    let bigString = s1 + s1; // Join s1 with itself

    for (let start = 0; start <= bigString.length - s2.length; start++) {
        let same = true;

        for (let k = 0; k < s2.length; k++) {
            if (bigString[start + k] !== s2[k]) {
                same = false;
                break;
            }
        }

        if (same) {
            return true; // Found s2 in bigString
        }
    }

    return false; // No match found
}

console.log(isRotation("ABCD", "CDAB")); // Output: true
console.log(isRotation("ABCD", "ACBD")); // Output: false
