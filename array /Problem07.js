


let num = [1,2,2,33,444,555,66,778]

// let max = num[0] 
let max = -Infinity

for(let i = 0; i<num.length;i++){

    if(num[i] > max){
        max = num[i]
    }
}

console.log(max)