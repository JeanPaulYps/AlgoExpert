export function arrayOfProducts(array: number[]) {
  let totalProduct = 1;
  let thereIsZero = false;
  let thereIsZeroRepeated = false;
  array.forEach((value: number) => {
    if (value === 0) {
      if (thereIsZero) {
        thereIsZeroRepeated = true;
        totalProduct *= value;
      }
      thereIsZero = true;
    } else {
      totalProduct *= value;
    }
  });

  let answer: number[] = [];

  array.forEach((value: number) => {
    if (value === 0 && thereIsZero && !thereIsZeroRepeated) {
      answer.push(totalProduct);
    } else if (thereIsZero || thereIsZeroRepeated) {
      answer.push(0);
    } else {
      answer.push(totalProduct / value);
    }
  });

  return answer;
}
