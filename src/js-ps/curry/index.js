export default function () {
  function sum(a, b, c) {
    return a + b + c;
  }
  const csum = curry(sum);
  console.log("Curry Sum: ", csum(2)(2)(8));
}

function curry(fn) {
  let argsLen = fn.length;
  return function curried(...args) {
    if (argsLen === args.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}
