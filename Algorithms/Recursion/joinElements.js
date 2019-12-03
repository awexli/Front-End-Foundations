function joinElements(array, joinString) {

    function iterate() {
        let i;
        let result = "";
        const end = array.length - 1;

        for(i = 0; i < end; i++) {
            result += array[i] + joinString;
        }

        return result + array[end];
    }

    function recurse(index, resultSoFar) {
        resultSoFar += array[index];

        if(index === array.length - 1) {
            return resultSoFar;
        } else {
            return recurse(index + 1, resultSoFar + joinString);
        }
    }

    return iterate();
}

let output = joinElements(['s','cr','t cod',' :) :)'], 'e')
console.log(output)