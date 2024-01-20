import { canAttendAllMeetings } from "./canAttendAllMeetings.js";

export default function () {
  let interval = [
    [1, 3],
    [4, 6],
    [2, 5],
  ];

  console.log("Meeting Room 1: ", canAttendAllMeetings(interval));
}
