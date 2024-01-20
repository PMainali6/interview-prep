export function canAttendAllMeetings(intervals) {
  let startTimeList = [];
  let endTimeList = [];

  for (let i = 0; i < intervals.length; i++) {
    let startTime = intervals[i][0];
    let endTime = intervals[i][1];

    startTimeList.push(startTime);
    endTimeList.push(endTime);
  }

  startTimeList.sort((a, b) => a - b);
  endTimeList.sort((a, b) => a - b);

  for (let i = 1; i < startTimeList.length; i++) {
    if (endTimeList[i - 1] > startTimeList[i]) {
      return false;
    }
  }

  return true;
}
