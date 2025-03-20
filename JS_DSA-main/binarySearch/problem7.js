function minElementIndex(arr, n) {
    let low = 0, high = n - 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2); 

        if (arr[mid] <= arr[(mid - 1 + n) % n] && arr[mid] <= arr[(mid + 1) % n]) {
            return mid;
        }

        if (arr[low] <= arr[mid] && arr[mid] <= arr[high]) {
            high = mid - 1; 
        }
        else if (arr[low] <= arr[mid]) {
            low = mid + 1;
        }
       
        else {
            high = mid - 1;
        }
    }
    return -1; 
}

let arr = [11, 12, 15, 26, 2, 5, 6, 8];
let n = arr.length;
let res = minElementIndex(arr, n);
console.log(res);
