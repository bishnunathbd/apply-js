// calculate factorial in a recursive function

// 0! = 1
// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 6! = 5!*6
// 7! = 6!*7
// 8! = (8-1)!*8
// n! = (n-1)!*n

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}     
// var result = factorial(5);
// console.log(result);


// 5! = 5*4*3*2*1

// 5*factorialRecursive(4)
// 5*4*factorialRecursive(3)
// 5*4*3*factorialRecursive(2)
// 5*4*3*2*factorialRecursive(1)
// 5*4*3*2*1

function factorialRecursive(num) {
    if (num == 1) {
        console.log(num);
        return 1;
    } else {
        console.log(num, num - 1);
        return num * factorialRecursive(num - 1);
    }
}
var result = factorialRecursive(5);
console.log('result', result);

