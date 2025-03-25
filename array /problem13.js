

let str = "masai"

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let bag = ""

for(let i = 0; i<str.length;i++){

    for(let j = 0; j<lowerCase.length; j++){
        
        if(str[i] == lowerCase[j]){
            bag += upperCase[j]
        }else if(str[i] == upperCase[j]){
            bag += lowerCase[j]
        }
    }
}
console.log(bag)