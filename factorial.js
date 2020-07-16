// calculate factorial of a number using for loop

// 2! = 2*1
// 3! = 3*2*1
// 4! = 4*3*2*1
// 5! = 5*4*3*2*1

function factorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;  
  }
  return total;
}

const result = factorial(5);
console.log(result);
