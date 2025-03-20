// rotateBy90Clockwise

function rotateBy90Clockwise(N, matrix) {
    for (let i = 0; i < N; i++) {
        let bag = ""; // Accumulates elements for the rotated row
        for (let j = 0; j < N; j++) {
            let a = matrix[N - j - 1][i]; // Access elements in reverse column order
            bag += a + " ";
        }
        console.log(bag.trim()); // Trim any trailing space for clean output
    }
}

// Input
let N = 3;
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Function call
rotateBy90Clockwise(N, matrix);
