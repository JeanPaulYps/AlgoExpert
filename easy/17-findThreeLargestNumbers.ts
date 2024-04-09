const MINUS_INFINITE: number = -Infinity;

const getMinimum = (number1: number, number2: number, number3: number) =>
  Math.min(number1, Math.min(number2, number3));

const placeMinimum = (
  largestNumber: number[],
  minimum: number,
  newNumber: number
) => {
  for (let index = 0; index < largestNumber.length; index++) {
    if (largestNumber[index] === minimum) {
      largestNumber[index] = newNumber;
      break;
    }
  }
};

export function findThreeLargestNumbers(array: number[]) {
  // Write your code here.
  let largestNumbers: [
    firstNumber: number,
    secondNumber: number,
    thirdNumber: number
  ] = [MINUS_INFINITE, MINUS_INFINITE, MINUS_INFINITE];
  array.forEach((num: number) => {
    const [firstNumber, secondNumber, thirdNumber] = largestNumbers;
    const minimum = getMinimum(firstNumber, secondNumber, thirdNumber);
    if (num > minimum) {
      placeMinimum(largestNumbers, minimum, num);
    }
  });
  largestNumbers.sort((num1: number, num2: number) => num1 - num2);
  return largestNumbers;
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
