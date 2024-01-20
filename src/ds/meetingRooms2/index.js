import { minConferenceRooms } from "./minConferenceRooms.js";

export default function () {
  let intervals = [
    [0, 30],
    [5, 10],
    [10, 20],
  ];
  console.log("Minimum Conference Rooms: ", minConferenceRooms(intervals));

  let intervalTime = [
    [900, 910],
    [940, 1200],
    [950, 1120],
    [1100, 1130],
    [1500, 1900],
    [1800, 2000],
  ];

  console.log("Minimum Platform: ", minConferenceRooms(intervalTime));
}
