


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j
      }
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
    console.log(arr)
  }
  
  selectionSort([9, 1, 4, 7, 3])
  