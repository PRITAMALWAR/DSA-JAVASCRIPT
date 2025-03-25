let num = 10;
let count = 0;

for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
        count++;
    }
}

if (count == 1) {
    console.log("number is prime");
} else {
    console.log("number is not prime");
}
