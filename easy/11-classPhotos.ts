const sortArray = (array: number[]) =>
  array.sort((num1: number, num2: number) => num1 - num2);

export function classPhotos(
  redShirtHeights: number[],
  blueShirtHeights: number[]
) {
  const redShirtHeightsSorted = sortArray(redShirtHeights);
  const blueShirtHeightsSorted = sortArray(blueShirtHeights);
  let shouldPutRedForward = true;
  let shouldPutBlueForward= true;

  redShirtHeightsSorted.forEach((redShirtHeight: number, index: number) => {
    if (redShirtHeight >= blueShirtHeightsSorted[index]) {
        shouldPutRedForward = false;
    }
  });
  blueShirtHeightsSorted.forEach((blueShirtHeights: number, index: number) => {
    if(blueShirtHeights >= redShirtHeightsSorted[index]) {
        shouldPutBlueForward = false;
    }
  })

  return shouldPutBlueForward || shouldPutRedForward;
}

console.log( classPhotos([5, 8, 1, 3, 4, 9], [6, 9, 2, 4, 5, 1])   )