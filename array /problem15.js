

function checkSmallorNot(char) {

    let lowerCase = "abcdefghijklmnopqrstuvwxyz";

    for(let i =0; i<lowerCase.length; i++){

        if(char == lowerCase[i]){
           return true
        }
    }
    return false  
}

console.log(checkSmallorNot("N"))