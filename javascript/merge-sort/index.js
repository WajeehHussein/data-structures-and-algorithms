'use strict';


function mergeSort(arr) {

    if (arr.length > 1) {
        let n = arr.length;
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }

}

function merge(left, right, arr) {
    let i = 0, j = 0, k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i = i + 1;
        } else {
            arr[k] = right[j]
            j = j + 1;
        }
        k = k + 1;
    }
    if (i == left.length) {
        arr.push(right)
    } else {
        arr.push(left)
    }
}



