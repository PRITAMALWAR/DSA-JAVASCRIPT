function solve(n,arr){
    let p=1
    let nrr=[]
    nrr[n-1]=1
    for(let i=n-2;i>=0;i--){
        nrr[i]=arr[i+1]*nrr[i+1]
    }
    for(let i=1;i<n;i++){
        p=p*arr[i-1]
        nrr[i]=nrr[i]*p
    }
    console.log(nrr.join(" "))
}


function runProgram(input) {
  // Write code here
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  for(let i=0;i<tc;i++){
      let n=+input[line++]
      let arr=input[line++].trim().split(" ").map(Number)
      solve(n,arr)
  }

}