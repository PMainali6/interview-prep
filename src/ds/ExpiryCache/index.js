import TimeLimitedCache from "./cache.js";

export default function () {
  let cache = new TimeLimitedCache();

  console.log(cache.set(1, 42, 1000)); // false
  console.log(cache.get(1)); // 42
  console.log(cache.count());
}
