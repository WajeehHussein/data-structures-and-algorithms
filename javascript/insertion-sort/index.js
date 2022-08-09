function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j = j - 1
        }
        arr[j + 1] = currentValue
    }
    return arr
}
console.log(`input is: [2,3,5,7,13,11]`);
console.log("output: ", insertionSort([2, 3, 5, 7, 13, 11])) 