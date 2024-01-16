export function memoize(fn) {
  const map = new Map();
  function run(...args) {
    const key = JSON.stringify(args);
    const hasKey = map.has(key);
    if (!hasKey) {
      const value = fn(...args);
      map.set(key, value);
      return value;
    } else {
      const value = map.get(key);
      return value;
    }
  }

  run.cleanup = function () {
    map.clear();
    console.log("======== Lookup cleared =========");
  };

  return run;
}
