export function minConferenceRooms(intervals) {
  let start = [];
  let end = [];

  for (let i = 0; i < intervals.length; i++) {
    let startTime = intervals[i][0];
    let endTime = intervals[i][1];

    start.push(startTime);
    end.push(endTime);
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let maxRooms = 0;
  let count = 0;
  // pointers for start & end
  let s = 0;
  let e = 0;
  let len = intervals.length;

  while (s < len && e < len) {
    if (start[s] < end[e]) {
      s++;
      count++;
    } else {
      e++;
      count--;
    }

    maxRooms = Math.max(count, maxRooms);
  }

  return maxRooms;
}
