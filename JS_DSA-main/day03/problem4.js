function spiralTraversal(N, M, arr) {
    let top = 0;
    let bottom = N - 1;
    let left = 0;
    let right = M - 1;
    let result = [];

    while (top <= bottom && left <= right) {
      
        for (let i = top; i <= bottom; i++) {
            result.push(arr[i][left]);
        }
        left++;

        
        for (let i = left; i <= right; i++) {
            result.push(arr[bottom][i]);
        }
        bottom--;

        
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(arr[i][right]);
            }
            right--;
        }

       
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(arr[top][i]);
            }
            top++;
        }
    }

    
    console.log(result.join(" "));
}



// input =
// 2
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12

// output=
// 1 5 9 10 11 12 8 4 3 2 6 7 
// 1 4 7 10 11 12 9 6 3 2 5 8 










// ===========================================

// N


function nTraversal(matrix) {
    let n = matrix.length-1;
    let result = [];

    
    for (let i = n ; i >= 0; i--) {
        result.push(matrix[i][0]);
    }

    
    for (let i = 1; i <= n; i++) {
        result.push(matrix[i][i]);
    }

    
    for (let i = n-1; i >= 0; i--) {
        result.push(matrix[i][n]);
    }

    console.log(result.join(" "));
}























