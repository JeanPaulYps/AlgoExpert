const traverseRectangle = (
  array: number[][],
  horizontalStart: number,
  verticalStart: number,
  width: number,
  height: number,
  spiralFlat: number[]
) => {
  const maximumHorizontal = horizontalStart + width - 1;
  const maximumVertical = verticalStart + height - 1;
  for (let i = horizontalStart; i <= maximumHorizontal; i++) {
    spiralFlat.push(array[verticalStart][i]);
  }

  for (let j = verticalStart + 1; j <= maximumVertical; j++) {
    spiralFlat.push(array[j][maximumHorizontal]);
  }

  if (width === 1 || height === 1) return;

  for (let i = maximumHorizontal - 1; i >= horizontalStart; i--) {
    spiralFlat.push(array[maximumVertical][i]);
  }

  for (let j = maximumVertical - 1; j > verticalStart; j--) {
    spiralFlat.push(array[j][horizontalStart]);
  }
};

export function spiralTraverse(array: number[][]) {
  let horizontalStart = 0;
  let verticalStart = 0;
  let width = array[0]?.length ?? 0;
  let height = array.length;

  const horizontalLimit = Math.ceil(width / 2) - 1;
  const verticalLimit = Math.ceil(height / 2) - 1;

  const spiralFlat: number[] = [];

  while (horizontalStart <= horizontalLimit && verticalStart <= verticalLimit) {
    traverseRectangle(array, horizontalStart, verticalStart, width, height, spiralFlat);
    width -= 2;
    height -= 2;
    horizontalStart++;
    verticalStart++;
  }

  console.log(spiralFlat);

  return spiralFlat;
}

// console.log(
spiralTraverse([]);
// );
