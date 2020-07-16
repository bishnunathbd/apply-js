function factorial(n) {
  let total = 1;
  let i = 1;
  while (i <= n) {
    total = total * i;
    i++;
  }
  return total;
}

const result = factorial(5);
console.log(result);