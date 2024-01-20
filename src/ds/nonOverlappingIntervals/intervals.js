export function interval(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [];

  for (let i = 1; i < intervals.length; i++) {
    let prevEnd = intervals[i - 1][1];
    let currStart = intervals[i][0];

    if (prevEnd < currStart) {
      res.push([prevEnd, currStart]);
    }
  }

  return res;
}
