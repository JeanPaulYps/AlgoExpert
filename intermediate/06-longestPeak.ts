// const ASC = "ascendent";
// const DESC = "descendent";
// const EQUAL = "equal";

// const getOrder = (num1: number, num2: number) => {
//   const difference = num2 - num1;
//   if (difference < 0) return DESC;
//   else if (difference > 0) return ASC;
//   else return EQUAL;
// };

// export function longestPeak(array: number[]) {
//   if (array.length < 3) return 0;
//   let answer = {
//     previous: array[0],
//     order: array[0] > array[1] ? DESC : ASC,
//     totalLength: 1,
//     longestPeak: 0,
//     thereIsPreviousAsc: array[1] > array[0],
//     thereIsPreviousDesc: false,
//   };
//   console.log(array.slice(1));
//   for (let num of array.slice(1)) {
//     const order = getOrder(answer.previous, num);
//     console.log(answer, `actual: ${num}`);

//     if (!answer.order) answer.order = order;

//     answer.previous = num;

//     if (order === EQUAL) {
//       answer.totalLength = 1;
//       answer.order = "";
//       answer.thereIsPreviousAsc = false;
//       answer.thereIsPreviousDesc = false;
//     } else if (answer.order === ASC) {
//       answer.totalLength += 1;
//       answer.thereIsPreviousAsc = true;
//       if (order === DESC) {
//         answer.order = DESC;
//         answer.thereIsPreviousDesc = true;
//       }
//     } else {
//       if (order === ASC) {
//         if (answer.thereIsPreviousAsc && answer.thereIsPreviousDesc)
//           answer.longestPeak = Math.max(answer.totalLength, answer.longestPeak);
//         answer.totalLength = 0;
//         answer.order = "";
//         answer.thereIsPreviousAsc = false;
//         answer.thereIsPreviousDesc = false;
//       } else if (!answer.thereIsPreviousAsc) {
//         answer.totalLength = 0;
//         answer.order = "";
//       }
//       answer.totalLength += 1;
//     }

//   }

//   const maximumLength =
//     answer.thereIsPreviousAsc && answer.thereIsPreviousDesc
//       ? Math.max(answer.totalLength, answer.longestPeak)
//       : answer.longestPeak;

//   return maximumLength;
// }

export function longestPeak(array: number[]) {
  if (array.length < 3) {
    return 0;
  }
  const difference = [];

  for (let i = 1; i < array.length; i++) {
    difference.push(array[i] - array[i - 1]);
  }
  console.log(difference);
  let answer = {
    thereIsPreviousDesc: false,
    thereIsPreviousAsc: false,
    totalLength: 0,
    longestPeak: 0,
  };

  for (let i = 0; i < difference.length; i++) {
    if (
      (difference[i] > 0 || difference[i] === 0 )&&
      answer.thereIsPreviousAsc &&
      answer.thereIsPreviousDesc
    ) {
      answer.longestPeak = Math.max(answer.longestPeak, answer.totalLength + 1);
      answer.totalLength = 0;
      answer.thereIsPreviousAsc = true;
      answer.thereIsPreviousDesc = false;
    }
    answer.totalLength += 1;
    if (difference[i] > 0) answer.thereIsPreviousAsc = true;
    else if (difference[i] < 0 && answer.thereIsPreviousAsc)
      answer.thereIsPreviousDesc = true;
    else {
      answer.thereIsPreviousDesc = false;
      answer.thereIsPreviousAsc = false;
      answer.totalLength = 0;
    }
    console.log(answer, `actual: ${difference[i]}`);
  }

  if (answer.thereIsPreviousAsc && answer.thereIsPreviousDesc) {
    answer.longestPeak = Math.max(answer.longestPeak, answer.totalLength + 1);
  }

  console.log(difference);

  return answer.longestPeak;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))

/** Option 2 */

// export function longestPeak(array: number[]) {
//     if (array.length < 3) {
//       return 0;
//     }
//     const difference = [];
  
//     for (let i = 1; i < array.length; i++) {
//       difference.push(array[i] - array[i - 1]);
//     }
//     console.log(difference);
//     let answer = {
//       thereIsPreviousDesc: false,
//       thereIsPreviousAsc: false,
//       totalLength: 0,
//       longestPeak: 0,
//     };
  
//     for (let i = 0; i < difference.length; i++) {
//       answer.totalLength += 1;
//       if (
//         (difference[i] > 0 || difference[i] === 0 )&&
//         answer.thereIsPreviousAsc &&
//         answer.thereIsPreviousDesc
//       ) {
//         answer.longestPeak = Math.max(answer.longestPeak, answer.totalLength);
//         answer.totalLength = 1;
//         answer.thereIsPreviousAsc = true;
//         answer.thereIsPreviousDesc = false;
//       }
//       if (difference[i] > 0) answer.thereIsPreviousAsc = true;
//       else if (difference[i] < 0 && answer.thereIsPreviousAsc)
//         answer.thereIsPreviousDesc = true;
//       else {
//         answer.thereIsPreviousDesc = false;
//         answer.thereIsPreviousAsc = false;
//         answer.totalLength = 0;
//       }
//       console.log(answer, `actual: ${difference[i]}`);
//     }
  
//     if (answer.thereIsPreviousAsc && answer.thereIsPreviousDesc) {
//       answer.longestPeak = Math.max(answer.longestPeak, answer.totalLength + 1);
//     }
  
//     console.log(difference);
  
//     return answer.longestPeak;
//   }