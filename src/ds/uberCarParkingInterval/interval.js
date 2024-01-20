export function interval(intervals, newInterval) {
  const availableSlots = [];

  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    availableSlots.push(end - start);
  }

  // now check for the newInterval
  let start = newInterval[0];
  let end = newInterval[1];
  let unavailbleSlots = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (start <= intervals[i][1]) {
      // can be merged
      unavailbleSlots += intervals[i][1] - start;
    }
  }

  availableSlots.push(end - start - unavailbleSlots);

  return availableSlots;
}
