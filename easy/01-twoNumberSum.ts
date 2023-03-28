export function twoNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  let numbers: Record<number, string> = {};
  array.forEach((number) => (numbers[number] = ""));
  for (const num of array) {
    const complement = targetSum - num;
    if (complement !== num && complement in numbers) {
      if (complement < num) {
        return [complement, num];
      } else {
        return [num, complement];
      }
    }
  }

  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));