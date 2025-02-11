

let arr = ["right","left","wrong","fast"];

let sum = 0;

for(let i = 0; i<arr.length; i++){
   
    sum += arr[i].length
    console.log(arr[i] ,arr[i].length)
    console.log(sum)
}

console.log("Total" , sum)