export function insert(interval, newInterval) {
  let res = [];

  for (let i = 0; i < interval.length; i++) {
    // newInterval is less than current interval
    // [4,8]           [1,2]
    if (newInterval[1] < interval[i][0]) {
      res.push(newInterval);
      newInterval = interval[i];
    }
    // newInterval is greater than current interval
    else if (newInterval[0] > interval[i][1]) {
      res.push(interval[i]);
    }
    // overval, merge interval
    else {
      newInterval[0] = Math.min(newInterval[0], interval[i][0]);
      newInterval[1] = Math.max(newInterval[1], interval[i][1]);
    }
  }

  res.push(newInterval);
  console.log("Insert interval: ");
  return res;
}
