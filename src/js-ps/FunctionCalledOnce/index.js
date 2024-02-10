export default function () {
  const fn = (a, b, c) => a + b + c;

  const onceFn = once(fn);
  console.log(onceFn(1, 2, 3));
  console.log(onceFn(2, 3, 6));
}

function once(fn) {
  let calledOnce = false;
  return function (...args) {
    if (calledOnce) {
      return undefined;
    }
    calledOnce = true;
    console.log("args: ", args);
    const value = fn(...args);
    return [{ calls: 1, value }];
  };
}
