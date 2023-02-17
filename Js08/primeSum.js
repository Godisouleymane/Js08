function primeSum(number) {
  let sum = 0;
  let prim = [];

  for (let i = 2; i <= number; i++) {
    prim[i] = true;
  }

  for (let i = 2; i * i <= number; i++) {
    if (prim[i]) {
      for (let j = i * i; j <= number; j += i) {
        prim[j] = false;
      }
    }
  }

  for (let i = 2; i <= number; i++) {
    if (prim[i]) {
      sum += i;
    }
  }

  return sum;

}

console.log(primeSum(2000000));

module.exports = primeSum;