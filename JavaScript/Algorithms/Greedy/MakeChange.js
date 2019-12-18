function makeChange(coins, amount){
    if (amount % 5 !== 0) {
        return 'amount not divisible by 5';
    }

    coins.sort((a, b) => b - a);

    let counter = 0;
    let i = 0;
    while (amount > 0) {
        if (amount - coins[i] >= 0) {
            console.log(`${amount} - ${coins[i]}`)
            amount -= coins[i];
            counter++;
        } else {
            i++;
        }
    }
    return counter;
}

console.log(makeChange([5,10,25], 15));