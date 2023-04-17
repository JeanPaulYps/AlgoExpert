// Instructions: O(lg(n)) 
// Memory: O(1)

const getMiddle = (left: number, right: number) =>
  Math.floor((right + left) / 2);
export function binarySearch(array: number[], target: number): number {
  let left = 0;
  let right = array.length - 1;
  let middle = getMiddle(left, right);
  while (left <= right) {
    if (target === array[middle]) {
      return middle;
    } else if (target > array[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = getMiddle(left, right);
  }

  return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 34));
