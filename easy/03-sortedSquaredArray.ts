/**
 * The best possible performance is O(n) of operations and O(n) of memory, because
 * at least you need to go through all the numbers
 */

//Operations: O(n*ln(n))
//Memory: O(n)

export function sortedSquaredArrayV1(array: number[]) {
  // Write your code here.
  return array
    .map((num) => Math.pow(num, 2))
    .sort((number1, number2) => number1 - number2);
}

//Operations: O(n)
//Memory: O(n)
//This is better because there is no need to copy the array saving
//a little bit of memory
export function sortedSquaredArrayV2(array: number[]) {
  // Write your code here.
  const totalElements = array.length;
  let squaredArray = Array(totalElements).fill(0);
  let lastElementAssinged = totalElements - 1;
  let left = 0;
  let right = totalElements - 1;
  while (left <= right) {
    const leftNumber = Math.abs(array[left]);
    const rightNumber = Math.abs(array[right]);
    if (rightNumber > leftNumber) {
      squaredArray[lastElementAssinged] = Math.pow(rightNumber, 2);
      lastElementAssinged -= 1;
      right -= 1;
    } else {
      squaredArray[lastElementAssinged] = Math.pow(leftNumber, 2);
      lastElementAssinged -= 1;
      left += 1;
    }
  }
  return squaredArray;
}

//Operations: O(n)
//Memory: O(n)
export function sortedSquaredArrayV3(array: number[]) {
  // Write your code here.
  let squaredArray = [];
  let numbers = [...array];
  while (numbers.length) {
    const first = Math.abs(numbers[0]);
    const last = Math.abs(numbers[numbers.length - 1]);
    if (last > first) {
      const lastSquared = Math.pow(last, 2);
      numbers.pop();
      squaredArray.unshift(lastSquared);
    } else {
      const firstSquared = Math.pow(first, 2);
      numbers.shift();
      squaredArray.unshift(firstSquared);
    }
  }

  return squaredArray;
}

// console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
