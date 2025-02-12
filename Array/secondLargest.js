

let arr = [10,20,30,40,50]

let first = -Infinity, second = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
        second = first;
        first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
        second = arr[i];
    }
}

console.log(second)
