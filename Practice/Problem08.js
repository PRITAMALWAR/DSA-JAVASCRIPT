function isPrime(num) {
    if (num <= 0) {
        return num + " is not prime";
    }

    let factors = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors++;
        }
    }

    if (factors === 2) {
        return num + " is prime";
    } else {
        return num + " is not prime";
    }
}


let limit = 100;

for(let i =0; i<=limit; i++){
   console.log(isPrime(i))
}