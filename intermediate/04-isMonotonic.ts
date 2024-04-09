const evaluateIsIncreasing = (array: number[], index: number) =>
  array[index] >= array[index + 1] ? true : false;

const evaluateIsDecreasing = (array: number[], index: number) =>
  array[index] <= array[index + 1] ? true : false;

export function isMonotonic(array: number[]) {
  if (array.length <= 1) {
    return true;
  }
  let neighborhoodsAreMonotonic = evaluateIsIncreasing;
  let start = 0;

  for (let i = 0; i <= array.length; i++) {
    if (array[i] !== array[i+1]) {
      start = i;
      neighborhoodsAreMonotonic = array[i] < array[i + 1] ? evaluateIsDecreasing : evaluateIsIncreasing;
      break;
    } 
  }

  for (let i = start; i <= array.length - 2; i++) {
      
    if (neighborhoodsAreMonotonic(array, i) === false) {
      console.log(array[i], array[i + 1]);
      return false;
    }
  }

  return true;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
