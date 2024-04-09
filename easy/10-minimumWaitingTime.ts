// const getSum = (array: number[]) =>
//   array.reduce((previous: number, current: number) => previous + current, 0);

// export function minimumWaitingTime(queries: number[]) {
//   const sortedQueries = queries.sort((number1: number, number2: number) => number1 - number2);
//   console.log(sortedQueries);
//   let total = 0;
//   let waitingTime: number[] = [];
//   sortedQueries.forEach(query => {
//     total += getSum(waitingTime);
//     waitingTime.push(query);
//   })
//   return total;
// }


// V2
export function minimumWaitingTime(queries: number[]) {
  const sortedQueries = queries.sort((number1: number, number2: number) => number1 - number2);
  let total = 0;
  let waitingTime = 0;
  sortedQueries.forEach(query => {
    total += waitingTime;
    waitingTime += query;
  })
  return total;
}


console.log(minimumWaitingTime([3, 2, 1, 2, 6]))