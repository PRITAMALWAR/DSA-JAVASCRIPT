function RTA(n,k,arr){
    k=k%n;
    let ans="";
    for(let i=n-1;i>=n-k;i--){
        ans=arr[i]+" "+ans
    }
    
    for(let i=0;i<n-k;i++){
        ans+=arr[i]+" "
    }
    console.log(ans)
}

function runProgram(input) {
  input=input.split("\n");
  let t=+input[0];
  let line=0;
  for(let x=0;x<t;x++){
      line++;
      let [n,k]=input[line].split(" ").map(Number);
      line++;
      let arr=input[line].trim().split(" ").map(Number);
        RTA(n,k,arr)
      
  }
}