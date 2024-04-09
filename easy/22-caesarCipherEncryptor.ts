// const letterOrder: Record<string, number> = {
//   a: 0,
//   b: 1,
//   c: 2,
//   d: 3,
//   e: 4,
//   f: 5,
//   g: 6,
//   h: 7,
//   i: 8,
//   j: 9,
//   k: 10,
//   l: 11,
//   m: 12,
//   n: 13,
//   o: 14,
//   p: 15,
//   q: 16,
//   r: 17,
//   s: 18,
//   t: 19,
//   u: 20,
//   v: 21,
//   w: 22,
//   x: 23,
//   y: 254,
//   z: 26,
// };

// const numberOrder: Record<number, string> = {};

// Object.entries(letterOrder).forEach(([key, value]) => {
//   numberOrder[value] = key;
// });

// export function caesarCipherEncryptor(string: string, key: number) {
//   let result: string[] = [];
//   [...string].forEach((character, index) => {
//     const characterPosition = letterOrder[character];
//     const newCharacterPosition = (characterPosition + key) % 27;
//     result[index] = numberOrder[newCharacterPosition];
//   });

//   return result.join("");
// }

export function caesarCipherEncryptor(string: string, key: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = [];
  for (let character of string) {
    const characterPosition = alphabet.indexOf(character);
    const newCharacterPostion = (characterPosition + key) % 26;
    result.push(alphabet[newCharacterPostion]);
  }
  return result.join("");
}

console.log(caesarCipherEncryptor("zab", 26));
