function convertToVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelString = "";

  for (i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      vowelString += word[i];
    }
  }

  return vowelString;
}

const word = "thisissomeword";
const wordWithOnlyVowels = convertToVowels(word);
console.log(wordWithOnlyVowels); // iioeo
