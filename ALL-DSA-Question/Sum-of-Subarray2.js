function runProgram(input) {
    input=input.trim().split("\n")
    let tc=+input[0];
    let line=1
    for(let i=0;i<tc;i++){
        let [n,k]=input[line++].trim().split(" ").map(Number);
        let arr=input[line++].trim().split(" ").map(Number);
        console.log(subArray(n,k,arr))
    }
    
    function subArray(n,k,arr){
      //   console.log(n,k,arr)
      let sum=arr[0];
      let i=0;
      let j=1;
      while(i<n && j<n){
          if(sum<k){
              sum+=arr[j];
              j++
          }
          else if(sum>k){
              sum-=arr[i]
              i++
          }
          if(sum==k){
              return 'Yes'
          }
      }
      return 'No'
    }
  }