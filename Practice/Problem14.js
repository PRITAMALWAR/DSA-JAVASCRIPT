





function sortArray(arr){

    let n = arr.length;

    for(let i = 0; i<n-1; i++){
         for(let j = 0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
         }
    }
    return arr
}

let nums = [3,1,6,7,3,8,9]
// let nums = [3,1,6,7,8,9]
console.log(sortArray(nums).join(" "))