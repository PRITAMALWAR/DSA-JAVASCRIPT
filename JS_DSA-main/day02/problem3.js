function reverseOdds(N, A) {
    let bag = "";
    let count = 0;

    for (let i = N - 1; i >= 0; i--) {
        if (A[i] % 2 != 0) { // Check if the number is odd
            bag += A[i] + " "; // Append to the bag with a space
            count++; // Increment the count of odd numbers
        }
    }

    console.log(count); // Print the count of odd numbers
    console.log(bag.trim()); // Print the odd numbers in reverse order
}

// Example Input
let N = 5;
let A = [38, 1, 67, 23, 31];
reverseOdds(N, A);


