function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    let tc = +input[0]
    let line = 1
    for(let i = 0; i<tc; i++){
      let n = +input[line++]
      let arr = input[line++].trim().split(" ").map(Number);
      // console.log(n,arr)
      solve(n,arr)
    }
  }
  
  function solve(n,arr){
    
    let maxSum = arr[0];
    let currSum = arr[0];
    
    for(let i = 1; i < arr.length; i++){
      
      if(currSum < 0){
        currSum = arr[i]
      }
      else{
        currSum = currSum + arr[i]
      }
      maxSum = Math.max(maxSum,currSum)
    }
    console.log(maxSum)
  }