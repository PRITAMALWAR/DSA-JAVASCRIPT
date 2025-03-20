function palindromeCheck(N, str) {
    let reversedStr = "";
    for (let i = N - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    if (str === reversedStr) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
