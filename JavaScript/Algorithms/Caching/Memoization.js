// a function, times10, that takes an argument, n, and multiples n times 10
const times10 = (n) => {
  return n * 10;
};

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

// an object to cache the results of times10 function. 
const cache = {};
const memoTimes10 = (n) => {
  if (cache[n] === undefined) {
    console.log("caching result")
    result = times10(n);
    cache[n] = result;
    return result;
  } else {
    console.log("return cache value")
    return cache[n];
  }
}

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached


// moving cache inside function.
const memoizedClosureTimesM = (m) => {
  let cache = {};
  return (n) => {
    if (cache[n] === undefined) {
      console.log("caching result")
      let result = n * m;
      cache[n] = result;
      return result;
    } else {
      console.log("return cache value")
      return cache[n];
    }
  }

  
};

const memoClosureTimes10 = memoizedClosureTimesM(10);
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
  console.log('Task 3 cached value:', memoClosureTimes10(9));	// cached
} catch(e) {
  console.error('Task 3:', e);
}