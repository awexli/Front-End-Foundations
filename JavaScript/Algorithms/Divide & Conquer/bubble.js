function bubble (array) {
    let i;
    let j;
    for (i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

bubble([9, 2, 5, 6, 4, 3, 7, 10, 1, 8])