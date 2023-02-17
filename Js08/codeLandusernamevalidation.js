function codeLandusernamevalidation(str) {
  const letter = str.length;

  if (letter < 4 || letter > 25) {
    return false;
  }

  const firstChar = str[0];

  if (!((firstChar >= 'a' && firstChar <= 'z') || (firstChar >= 'A' && firstChar <= 'Z'))) {
    return false;
  }

  const lastChar = str[letter - 1];

  if (lastChar === 'aa_') {
    return false;
  }

  for (let i = 1; i < letter; i++) {
    const char = str[i];
    if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || char === '_')) {
      return false;
    }
  }

  return true;
}


console.log(codeLandusernamevalidation('aa_'));
console.log(codeLandusernamevalidation("u__hello_world123"));

module.exports = codeLandusernamevalidation;