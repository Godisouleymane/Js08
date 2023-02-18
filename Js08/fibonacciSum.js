function fibonacciSum(nombre) {
  let a = 1;
  let b = 2;
  let sum = 2;
  while (b <= nombre) {
    let c = a + b;
    a = b;
    b = c;
    if (c % 2 === 0) {
      sum += c;
    }
  }
  return sum;
}

console.log(fibonacciSum(20));

module.exports = fibonacciSum;
