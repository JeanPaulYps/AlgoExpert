const getSum = (array: number[]) =>
  array.reduce((prev, current) => prev + current, 0);

const verifySolution = (coins: number[], change: number) => {
  let findingSolution = true;
  let copyCoins = [...coins];
  let solution: number[] = [];
  let initialNumber: number; 
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > change) {
        let index = i < 0 ? 0 : i -1;
        initialNumber = coins[index];
        solution.push(initialNumber);
        copyCoins.splice(index,1);
        break;
    }
  }
  console.log("==============");
  console.log("change", change);
  while (findingSolution) {
    console.log(solution);
    let total = getSum(solution);
    if (total === change) {
      return true;
    }
    if (total < change) {
      const smallestNumber = copyCoins.shift();
      if (typeof smallestNumber === "number") {
        solution.push(smallestNumber);
      } else {
        return false;
      }
    } else {
      const excess = total - change;
      if (excess in solution) {
        return true;
      } else {
        solution.shift();
        if (solution.length === 0) {
          return false;
        }
      }
    }
  }

  return true;
};

export function nonConstructibleChange(coins: number[]) {
  if (coins.length === 0) {
    return 1;
  }
  const sortedCoins = coins.sort(
    (number1: number, number2: number) => number1 - number2
  );
  let change = 1;
  let thereIsChange = true;
  while (thereIsChange) {
    thereIsChange = verifySolution(sortedCoins, change);
    if (thereIsChange) {
      change += 1;
    }
  }
  console.log("change", change);
  return change;
}

// console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
