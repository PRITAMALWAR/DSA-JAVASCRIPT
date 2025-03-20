

function evenSumColumns(N,M,arr){
    //write code here
       let sums = {};
    
    for (let j = 0; j < M; j++) {
        sums[j] = 0;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] % 2 === 0) {
                sums[j] += arr[i][j];
            }
        }
    }

    for (let j = 0; j < M; j++) {
        console.log(sums[j]);
    }
}


// input

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9


// output

// 4
// 10
// 6