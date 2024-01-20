export function merge(interval) {
  // sort the interval
  interval.sort((a, b) => a[0] - b[0]);
  console.log("Sorted interval: ", interval);

  // fix the first array in the interval as already merged
  let lastMergedIdx = 0;

  // iterating from the 2nd array list
  for (let i = 1; i < interval.length; i++) {
    // end of last interval is greater than the starting of the next interval
    // than the list can be merged
    if (interval[lastMergedIdx][1] >= interval[i][0]) {
      // calc the start of the new merged interval
      interval[lastMergedIdx][0] = Math.min(
        interval[lastMergedIdx][0],
        interval[i][0]
      );

      // calc the end of the new merged interval
      interval[lastMergedIdx][1] = Math.max(
        interval[lastMergedIdx][1],
        interval[i][1]
      );
    } else {
      // if cannot be merged, we inc the lastMergedIdx
      // and override it with non-overlapping interval
      lastMergedIdx++;
      interval[lastMergedIdx] = interval[i];
    }
  }

  console.log("Merge Intervals: ");
  return result;
}
