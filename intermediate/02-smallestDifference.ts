const sortArray = (arr: number[]) =>
  arr.sort((first: number, second: number) => first - second);

// export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
//   console.log(sortArray(arrayOne));
//   console.log(sortArray(arrayTwo));
//   const arrayOneSorted = sortArray(arrayOne);
//   const arrayTwoSorted = sortArray(arrayTwo);
//   const MAXIMUM_SIZE_ARRAY = arrayOne.length;
//   let keepSearching = true;
//   let arrayOneIndex = 0;
//   let arrayTwoIndex = 0;
//   let minimum = Number.POSITIVE_INFINITY;
//   let answer = {
//     firstNumber: 0,
//     secondNumber: 0,
//   };
//   while (keepSearching) {
//     const difference = Math.abs(
//       arrayOneSorted[arrayOneIndex] - arrayTwoSorted[arrayTwoIndex]
//     );
//     if (difference < minimum) {
//       const [smallest, greatest] = sortArray([
//         arrayOneSorted[arrayOneIndex],
//         arrayTwoSorted[arrayTwoIndex],
//       ]);
//       answer.firstNumber = smallest;
//       answer.secondNumber = greatest;
//       minimum = difference;
//     }
//     const nextIndexOne = Math.min(arrayOneIndex + 1, MAXIMUM_SIZE_ARRAY);
//     const nextIndexTwo = Math.min(arrayTwoIndex + 1, MAXIMUM_SIZE_ARRAY);
//     const differenceWhenAdvanceIndexOne = Math.abs(
//       arrayOneSorted[nextIndexOne] - arrayTwoSorted[arrayTwoIndex]
//     );
//     const differenceWhenAdvanceIndexTwo = Math.abs(
//       arrayOneSorted[arrayOneIndex] - arrayTwoSorted[nextIndexTwo]
//     );
//     if (differenceWhenAdvanceIndexOne < differenceWhenAdvanceIndexTwo) {
//       arrayOneIndex += 1;
//     } else {
//       arrayTwoIndex += 1;
//     }

//     if (
//       (arrayOneIndex === MAXIMUM_SIZE_ARRAY &&
//         nextIndexOne === MAXIMUM_SIZE_ARRAY) ||
//       (arrayTwoIndex === MAXIMUM_SIZE_ARRAY &&
//         nextIndexTwo === MAXIMUM_SIZE_ARRAY)
//     ) {
//       keepSearching = false;
//     }
//   }

//   return [answer.firstNumber, answer.secondNumber];
// }

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
    const answer = {
        minimumDifference: Number.POSITIVE_INFINITY,
        first: 0,
        second: 0, 
    }
    arrayOne.forEach((value: number) => {
        arrayTwo.forEach((valueArrayTwo) => {
            const difference = Math.abs(value - valueArrayTwo);
            if (difference < answer.minimumDifference) {
                answer.minimumDifference = difference;
                answer.first = value;
                answer.second = valueArrayTwo;
            }
        })
    })
    return [answer.first, answer.second]
} 

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
