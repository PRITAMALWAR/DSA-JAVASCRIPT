function goInZigZag(N, M, matrix){
    //write code here
  
    let result = [];
    
    for (let i = 0; i < N; i++) {
        if (i % 2 === 0) {
           
            for (let j = M - 1; j >= 0; j--) {
                result.push(matrix[i][j]);
            }
        } else {
          
            for (let j = 0; j < M; j++) {
                result.push(matrix[i][j]);
            }
        }
    }
    
    console.log(result.join(' '));


}

// input
// 5 5
// 4 7 1 1 7
// 8 9 9 6 1
// 6 4 9 5 1
// 7 7 4 7 7
// 8 6 2 5 5


// output
// 7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8
