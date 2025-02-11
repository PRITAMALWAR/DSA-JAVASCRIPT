

let arr = ["ramsingh","rakesh","sanjay","pritam"]
let count = 0;
for(let i = 0; i<arr.length; i++){

    if(arr[i][0] == "r"){
        count++
        console.log(arr[i])
    }
    
}
console.log(count)