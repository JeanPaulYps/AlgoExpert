// export function isPalindrome(string: string) {
//   const reverseString = [...string].reverse().join("");

//   return string === reverseString;
// }

export function isPalindrome(string: string) {
  const middle = Math.floor(string.length / 2);
  const lastIndex = string.length - 1;
  for (let i = 0; i < middle; i++) {
    if (string[i] !== string[lastIndex - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("abcdcba"));
