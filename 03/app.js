let sum = 0

const getSum = function(number) {
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    return sum
}

console.log(getSum(4))