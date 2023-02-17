function sortByLength(input) {
  return input.sort((a, b) => a.length - b.length);
}

console.log(sortByLength([
  "soir",
  "matin",
  "bonjour",
  "Hello world"
]));

module.exports = sortByLength;