function isPalindrome(word) {
  if (typeof word == "string") {
    for (i = 0, j = word.length - 1; i < j; i++, j--) {
      if (word[i] != word[j]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

const word = "racecar";
if (isPalindrome(word)) {
  console.log("It is a palindrome!");
} else {
  console.log("It is not a palindrome!");
}
