function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    const half = Math.floor(array.length / 2)
    const left = array.slice(0, half);
    const right = array.slice(half);

    let mergeLeft = mergeSort(left);
    let mergeRight = mergeSort(right); 

    return merge(mergeLeft, mergeRight);
}

function merge(left, right) {
    let arr = [];
    console.log('----------------------');
    console.log(`[${left}] <> [${right}]`);
    console.log('----------------------');
    console.log('\n');

    while (left.length && right.length) {
        console.log(`${left[0]} ? ${right[0]}`);

        if (left[0] < right[0]) {
            console.log(`left smaller: push(${left[0]})`);
            arr.push(left[0]);
            left.shift();
        } else {
            console.log(`right smaller: push(${right[0]})`);
            arr.push(right[0]);
            right.shift();
        }
        console.log('\n');
    }
    return arr.concat(left.slice().concat(right.slice()));
}

console.log(mergeSort([4, 1, 5, 7, 11, 3, 6, 10, 2,]));