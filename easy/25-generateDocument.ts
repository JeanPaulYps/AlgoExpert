//Instructions O(N) N: number of characters of string
//Memory: O(C) C: Number of distinct characters

const getCount = (character: string) => {
  let count: Record<string, number> = {};
  for (const char of character) {
    count[char] = count[char] ? count[char] + 1 : 1;
  }
  return count;
};


export function generateDocument(characters: string, document: string) {
  const countCharacters = getCount(characters);
  const countDocument = getCount(document);

  for (const char of Object.keys(countDocument)) {
    if (!countCharacters[char] || countDocument[char] > countCharacters[char]) {
      return false;
    }
  }
  return true;
}

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);
