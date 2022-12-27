console.log('uzomian...');

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const div = ~~(arr.length / 2);
    let larr = arr.slice(0, div);
    let rarr = arr.slice(div);

    // Sort left half
    if (larr.length > 1) larr = mergeSort(larr);

    // Sort right half
    if (rarr.length > 1) rarr = mergeSort(rarr);

    // Merge 2 halves
    return merge(larr, rarr);
}

function merge(arr1, arr2) {
    const arr = [];
    let i = j = 0;

    while(arr.length < arr1.length + arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        }
        else if (arr1[i] >= arr2[j]) {
            arr.push(arr2[j]);
            j++;
        }
        else {
            if (arr1[i] == undefined) arr.push(arr2[j]);
            else arr.push(arr1[i]);
        }
    }

    return arr;
}