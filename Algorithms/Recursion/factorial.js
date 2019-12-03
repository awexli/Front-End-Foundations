const memoize = (fn) => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log("return cache value")
            return cache[n];
        } else {
            console.log("caching result")
            let result = fn(n);
            cache[n] = result;
            return result;

        }
    }
};

const factorial = memoize(
    (n) => {
        if (n <= 1) {
            return n;
        }

        return n * factorial(n - 1);
    }
);

console.log(factorial(3))