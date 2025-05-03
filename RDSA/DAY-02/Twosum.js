



function TwoSum(arr,target) {

    for(let i = 0; i< arr.length; i++){

        for(let j = i+1; j<arr.length;j++){
            if(arr[i] + arr[j] === target){
                return [i,j]
            }
        }
    }
    return null
    
}

let arr = [2,3,4,5,2,7]
let target = 9
console.log(TwoSum(arr,target))