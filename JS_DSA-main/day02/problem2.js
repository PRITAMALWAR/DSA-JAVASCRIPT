


// ===================================================================





function reverseEven(N, A) {
    let bag = "";
    let count = 0;

    for (let i = N - 1; i >= 0; i--) {
        if (A[i] % 2 == 0) { // Check if the number is even
            bag += A[i] + " "; // Append to the bag with a space
            count++; // Increment the count of even numbers
        }
    }

    console.log(count); // Print the count of even numbers
    console.log(bag.trim()); // Print the even numbers in reverse order
}

// Example Input
let N = 5;
let A = [38, 1, 67, 23, 31];
reverseEven(N, A);
