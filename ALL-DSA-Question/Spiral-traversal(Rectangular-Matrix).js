function spiralTraversal(N, M, arr){
    
    let top=0
    let bottom=N-1
    let left=0
    let right=M-1
    let bag=""
    let count=0
    
    while(count<N*M){
        
    
    for(let i=top;i<=bottom && count<N*M;i++){
        bag+=arr[i][left]+" "
        count++
    }
    
    left++
    
    for(let j=left;j<=right && count<N*M;j++){
        bag+=arr[bottom][j]+" "
        count++
    }
    bottom--
    
    for(let k=bottom;k>=top && count<N*M;k--){
        bag+=arr[k][right]+" "
        count++
    }
    right--
    
    for(let l=right;l>=left && count<N*M;l--){
        bag+=arr[top][l]+" "
        count++
    }
    
    top++
    }
  console.log(bag)
}