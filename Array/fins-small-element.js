




let arr = [3,2,4,6,3,4,1]


let temp = arr[0]

for(let i = 0; i<arr.length; i++){

    if(arr[i] < temp){

        temp = arr[i]
    }
}

console.log(temp)