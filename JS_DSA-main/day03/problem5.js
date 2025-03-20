
// CornerSum


function sumOfCornerColumns(N, M, arr) {
    let sum = 0;
    
    let firstCol = 0;
    let lastCol = M - 1;
    
    
    for (let row = 0; row < N; row++) {
        sum += arr[row][firstCol];
    }
    
    
    for (let row = 0; row < N; row++) {
        sum += arr[row][lastCol];
    }

    console.log(sum);
}

// input = 
// 3 3
// 1 2 7
// 3 4 6
// 5 6 10

// output=
// 32
