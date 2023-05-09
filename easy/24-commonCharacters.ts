export function commonCharacters(strings: string[]) {
  let setOfCharacters = new Set(strings[0]);
  for (const sequence of strings) {
    let uniqueCharacters = new Set(sequence);
    for (const option of setOfCharacters) {
        if (!uniqueCharacters.has(option)) {
            setOfCharacters.delete(option)
        }
    }
  }

  return [...setOfCharacters];
}

console.log(commonCharacters(["abc", "bcd", "cbad"]));