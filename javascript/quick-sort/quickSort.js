function quickSort(arr, left, right) {
    if (left < right) {
        let postion = partion(arr, left, right);

        quickSort(arr, left, postion - 1);

        quickSort(arr, postion + 1, right);
    }

}

function partion(arr, left, right) {
    let pivot = arr[right];
    let low = left - 1;
    for (i = 0; i < arr.length; i++) {
        if ([arr[i] <= pivot]) {
            low++;
            swap(arr, right, low + 1)
        }
        return low + 1;
    }
}

function swap(arr, i, low) {
    let temp;
    temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp
}