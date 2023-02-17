function reverseString(mot) {
  return mot.split('').reverse().join('');
}

console.log(reverseString('cool'));

module.exports = reverseString;