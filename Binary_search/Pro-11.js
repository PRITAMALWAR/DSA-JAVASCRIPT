// Find Element in Sorted Grid (Matrix Search)


function matrixSearch(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] > target) col--;
        else row++;
    }

    return false;
}

// Example: 2D matrix (sorted row-wise and column-wise)
let matrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]
];
let target = 5;
console.log(matrixSearch(matrix, target));  // Output: true
