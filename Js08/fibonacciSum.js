function fibonacciSum(nombre) {
  const a = 1;
  const b = 2;
  const sum = 2;
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