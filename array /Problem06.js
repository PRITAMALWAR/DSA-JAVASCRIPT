

// print the first half


let alpha = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

// for(let i = 0; i<alpha.length/2; i++){
//     console.log(alpha[i])
// }



// Even Array 

for(let i = 0; i<alpha.length/2; i++){
    if(i%2 == 0){
        console.log("Even" +"-"+ alpha[i])
    }
}


// Odd Array 

for(let i = 0; i<alpha.length/2; i++){
    if(i%2 !== 0){
        console.log("Odd" +"-"+ alpha[i])
    }
}
