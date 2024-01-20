import { search } from "./search.js";

export default function () {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const value = -6;
  console.log(search(list, value));
}
