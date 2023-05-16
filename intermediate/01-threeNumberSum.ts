type Triplet = [number, number, number];

// const sortArray = (arr: number[]) => arr.sort((a: number, b: number) => a - b);

// const tripletInArray = (answer: Triplet[], triplet: Triplet) => {
//   const [first, second, third] = triplet;
//   const indexOfTriplet = answer.findIndex(
//     ([answerFirst, answerSecond, answerThird]) =>
//       first === answerFirst && second === answerSecond && third === answerThird
//   );
//   return indexOfTriplet !== -1;
// };

// export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
//   const answer = [];
//   const sortedArray = sortArray(array);
//   console.log(sortedArray);
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       for (let k = j + 1; k < array.length; k++) {
//         const first = sortedArray[i];
//         const second = sortedArray[j];
//         const third = sortedArray[k];

//         if (first + second + third === targetSum) {
//           const triplet = sortArray([first, second, third]) as Triplet;
//           if (!tripletInArray(answer, triplet)){
//               answer.push(triplet);
//           }

//         }
//       }
//     }
//   }
//   return answer;
// }

const existsTripletInArray = (answer: Triplet[], triplet: Triplet) => {
  const [first, second, third] = triplet;
  const indexOfTriplet = answer.findIndex(
    ([answerFirst, answerSecond, answerThird]) =>
      first === answerFirst && second === answerSecond && third === answerThird
  );
  return indexOfTriplet !== -1;
};

const sortArray = (arr: number[]) => arr.sort((a: number, b: number) => a - b);

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  const answer: Triplet[] = [];
  const sortedArray = sortArray(array);
  for (let i = 0; i < sortedArray.length; i++) {
    const newTargetSum = targetSum - sortedArray[i];
    let numberOptions: Record<number, boolean> = {};
    array.forEach((value: number, index) => {
      if (index !== i) {
        numberOptions[value] = false;
      }
    });
    for (let j = 0; j < sortedArray.length; j++) {
      if (j !== i) {
        let actualNumber = sortedArray[j];
        let complement = newTargetSum - actualNumber;
        if (complement in numberOptions && complement !== actualNumber) {
          const triplet = sortArray([
            sortedArray[i],
            actualNumber,
            complement,
          ]) as Triplet;
          if (!existsTripletInArray(answer, triplet)) {
            answer.push(triplet);
          }
        }
      }
    }
  }
  return answer;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
