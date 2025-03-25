


let lowerCase = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

let UpperCase = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

let char = "pritam"

for (let i = 0; i < char.length; i++) {
    for (let j = 0; j < lowerCase.length; j++) {
        if (char[i] === lowerCase[j]) {
            console.log(UpperCase[j]);
            break;
        }
    }
}
