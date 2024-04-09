type Interval = [number, number];

const sortByTheStartOfTheInterval = (array: Interval[]) =>
  array.sort(
    (
      [firstStartInterval, firstEndInterval],
      [secondStartInterval, secondEndInterval]
    ) => {
      if (firstStartInterval === secondStartInterval)
        return firstEndInterval - secondEndInterval;
      return firstStartInterval - secondStartInterval;
    }
  );

const thereAreOverlapping = (
  [startFirstInterval, endFirstInterval]: [number, number],
  [startSecondInterval, endSecondInterval]: [number, number]
) => {
  return startSecondInterval <= endFirstInterval;
};

const calculateNewInterval = (
  [startFirstInterval, endFirstInterval]: [number, number],
  [startSecondInterval, endSecondInterval]: [number, number]
) =>
  [
    startFirstInterval,
    Math.max(endFirstInterval, endSecondInterval),
  ] as Interval;

export function mergeOverlappingIntervals(array: Interval[]) {
  let i = 0;
  const sortedIntervals: Interval[] = sortByTheStartOfTheInterval(array);
  console.log(sortedIntervals);
  while (i < sortedIntervals.length - 1) {
    if (thereAreOverlapping(sortedIntervals[i], sortedIntervals[i + 1])) {
      sortedIntervals[i] = calculateNewInterval(
        sortedIntervals[i],
        sortedIntervals[i + 1]
      );
      sortedIntervals.splice(i + 1, 1);
    } else i++;
  }
  return array;
}

console.log(
  mergeOverlappingIntervals([
    [1, 22],
    [-20, 30],
  ])
);
