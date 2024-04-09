// Instructions: O(n)
// Memory: O(1)

export function runLengthEncoding(string: string) {
  let encoding = {
    actualCharacter: "",
    quantity: 0,
    result: "",
  };

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (encoding.actualCharacter !== character || encoding.quantity === 9) {
      if (encoding.actualCharacter) {
        encoding.result += `${encoding.quantity}${encoding.actualCharacter}`;
      }
      encoding.actualCharacter = character;
      encoding.quantity = 1;
    } else {
      encoding.quantity = encoding.quantity + 1;
    }
    if (i === string.length - 1) {
      encoding.result += `${encoding.quantity}${encoding.actualCharacter}`;
    }
  }
  return encoding.result;
}

