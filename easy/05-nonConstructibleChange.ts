// Instructions: O(n*ln(n))
// Memory: O(n)
export function nonConstructibleChange(coins: number[]) {
  // Write your code here.
  const sortedCoins = coins.sort((number1, number2) => number1 - number2);
  let maximumChange = 0;

  for (const coinValue of sortedCoins) {
    if (coinValue <= maximumChange + 1) {
      maximumChange += coinValue;
    }else {
      break;
    }

  }

  return maximumChange + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));

