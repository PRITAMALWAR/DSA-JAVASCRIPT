function findSquareRoot(num) {
    if (num < 0) {
        return "Negative numbers don't have real square roots";  // Negative numbers ka square root real numbers mein nahi hota
    }
    
    let left = 0;
    let right = num;
    let result = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);  // Middle point calculate karo
        
        if (mid * mid === num) {
            return mid;  // Agar mid ka square num ke barabar hai, toh return karo
        }
        
        if (mid * mid < num) {
            left = mid + 1;  // Agar mid ka square less hai, toh left ko adjust karo
            result = mid;  // Update result
        } else {
            right = mid - 1;  // Agar mid ka square greater hai, toh right ko adjust karo
        }
    }
    
    // Agar perfect square nahi hai, toh result ko return karo (approximate square root)
    return result;
}

// Example Usage:
let number = 16;
let result = findSquareRoot(number);
console.log(result);  // Output: 4

let number2 = 20;
let result2 = findSquareRoot(number2);
console.log(result2);  // Output: 4 (approximate square root)
