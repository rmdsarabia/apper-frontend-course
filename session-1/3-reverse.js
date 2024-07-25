function reverse(word) {
  if (typeof word == "string") {
    let reversedWord = "";

    for (i = word.length; i > 0; i--) {
      reversedWord += word[i - 1];
    }

    return reversedWord;
  }

  return "";
}

const word = "hello";
const reversedWord = reverse(word);
console.log(reversedWord); // 'olleh'
