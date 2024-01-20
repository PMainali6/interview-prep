import TimeMap from "./store.js";

export default function () {
  const tm = new TimeMap();

  tm.set("foo", "bar", 1);
  tm.get("foo", 1);
  tm.get("foo", 3);
  tm.set("foo", "bar2", 4);
  tm.get("foo", 4);
  tm.get("foo", 5);
}
