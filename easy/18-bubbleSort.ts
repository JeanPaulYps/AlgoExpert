// Instructions: O(n^2)
// Memory: O(1)

const swap = (
  firstPosition: number,
  secondPosition: number,
  array: number[]
) => {
  const temp = array[firstPosition];
  array[firstPosition] = array[secondPosition];
  array[secondPosition] = temp;
};

export function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        swap(j-1, j, array);
      }
    }
  }
  return array;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
