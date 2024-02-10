export default function () {
  const throttled = throttle(console.log, 500);

  throttled("log");
  throttled("log");
  throttled("log2");
}

function throttle(fn, t) {
  let isWait = false;
  let nextArgs = null;
  return function (...args) {
    if (isWait) {
      nextArgs = args;
    } else {
      fn(...args);
      isWait = true;
      setTimeout(helper, t);
    }
  };

  function helper() {
    if (nextArgs) {
      fn(...nextArgs);
      isWait = true;
      nextArgs = null;
    } else {
      isWait = false;
    }
  }
}
