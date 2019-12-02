const uniqSort = function(arr) {
    const breadcrumbs = new Map();
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!breadcrumbs.has(arr[i])){
        result.push(arr[i]);
        breadcrumbs.set(arr[i], true);
      }
    }
    console.log(breadcrumbs)
    return result.sort((a, b) => a - b);
};

uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]