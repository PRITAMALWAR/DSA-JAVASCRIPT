function runProgram(input) {
    input = input.trim().split("\n")
    let tc = +input[0]
    let line = 1
    
    for(let i = 0; i < tc; i++){
      let n = +input[line++]
      let arr = input[line++].trim().split(" ").map(Number)
      solve(n, arr)
    }
  }
  
  function solve(n, arr) {
    let maxProd = arr[0]
    let currMax = arr[0]
    let currMin = arr[0]
    
    for (let i = 1; i < n; i++) {
      let num = arr[i]
      if (num < 0) {
        [currMax, currMin] = [currMin, currMax]
      }
      currMax = Math.max(num, num * currMax)
      currMin = Math.min(num, num * currMin)
      maxProd = Math.max(maxProd, currMax)
    }
    
    console.log(maxProd)
  }
  