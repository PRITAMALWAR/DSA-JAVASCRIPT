// unique letters

let arr = ["a","a","g","d","d","e","c","o"];
let uni = [];

for(let i = 0; i<arr.length; i++){
    let count = 0;

    for(let j = 0; j<uni.length;j++){
        if(arr[i] == uni[j]){
            count++
        }

    }

    if(count == 0){
        uni.push(arr[i])
    }
}
console.log(uni.join())