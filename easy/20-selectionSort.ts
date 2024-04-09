// Instructions: O(n^2)
// Memory: O(1)

const swap = (firstIndex: number, secondIndex: number, array: number[]) => {
  const firstElement = array[firstIndex];
  const secondElement = array[secondIndex];
  array[firstIndex] = secondElement;
  array[secondIndex] = firstElement;
};
export function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let minimum = {
      index: i,
      value: array[i],
    };
    for (let j = i; j < array.length; j++) {
      if (array[j] < minimum.value) {
        minimum.index = j;
        minimum.value = array[j];
      }
    }
    swap(i, minimum.index, array);
  }
  return array;
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));