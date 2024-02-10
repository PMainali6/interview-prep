export default function () {
  const debouncedLog = debounce(console.log, 500);
  debouncedLog("Hello");
  debouncedLog("Hello");
  debouncedLog("Hello");
  debouncedLog("Hello");
}

function debounce(fn, t) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      return fn(...args);
    }, t);
  };
}
