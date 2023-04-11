// const sortAscendant = (array: number[]) =>
//   array.sort((num1: number, num2: number) => num1 - num2);
// const sortDescendant = (array: number[]) =>
//   array.sort((num1: number, num2: number) => num2 - num1);
// const getMaximum = (array1: number[], array2: number[], index: number) =>
//   array1[index] > array2[index] ? array1[index] : array2[index];

// export function tandemBicycle(
//   redShirtSpeeds: number[],
//   blueShirtSpeeds: number[],
//   fastest: boolean
// ) {
//   let total = 0;
//   const redSpeedsSortedAscendant = sortAscendant(redShirtSpeeds);
//   const blueShirtSpeedsSorted = fastest ? sortDescendant(blueShirtSpeeds) : sortAscendant(blueShirtSpeeds);
//   redSpeedsSortedAscendant.forEach((_, index: number) => {
//     const amount = getMaximum(redSpeedsSortedAscendant, blueShirtSpeedsSorted, index)
//     total += amount;
//   });

//   console.log(redSpeedsSortedAscendant);
//   console.log(blueShirtSpeedsSorted);
//   return total;
// }


/* -------------------------------------------------------------------------- */
/*                              Version 2                                     */
/* -------------------------------------------------------------------------- */


const sortAscendant = (array: number[]) =>
  array.sort((num1: number, num2: number) => num1 - num2);
const sortDescendant = (array: number[]) =>
  array.sort((num1: number, num2: number) => num2 - num1);
const getMaximum = (array1: number[], array2: number[], index: number) =>
  Math.max(array1[index], array2[index]);

export function tandemBicycle(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
) {
  let total = 0;
  const redSpeedsSortedAscendant = sortAscendant(redShirtSpeeds);
  const blueShirtSpeedsSorted = fastest ? sortDescendant(blueShirtSpeeds) : sortAscendant(blueShirtSpeeds);
  for (let i = 0; i  < redSpeedsSortedAscendant.length; i++ ){
    const amount = getMaximum(redSpeedsSortedAscendant, blueShirtSpeedsSorted, i)
    total += amount;
  }

  return total;
}

console.log(tandemBicycle([3, 6, 7, 2, 1], [5, 5, 3, 9, 2], false));


console.log(tandemBicycle([3, 6, 7, 2, 1], [5, 5, 3, 9, 2], false));
