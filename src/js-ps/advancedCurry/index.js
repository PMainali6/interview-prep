export default function () {
  function join(a, b, c) {
    return `${a}_${b}_${c}`;
  }

  const curriedJoin = curry(join);
  const _ = curry.placeholder;

  console.log(curriedJoin(1, 2, 3)); // '1_2_3'
  console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'
  console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'
}

function curry(fn) {
  let argsLen = fn.length;

  return function curried(...args) {
    if (isMaxArgs(argsLen, args, curry.placeholder)) {
      return fn(...args);
    }

    return function (...nextArgs) {
      const mergedArgs = mergeArgs(args, nextArgs, curry.placeholder);
      return curried(...mergedArgs);
    };
  };

  function isMaxArgs(maxLen, args, placeholder) {
    return maxLen === args.length && !args.includes(placeholder);
  }

  function mergeArgs(args1, args2, placeholder) {
    const partialArgs = args1.map((arg) =>
      arg === placeholder ? args2.shift() : arg
    );

    return [...partialArgs, ...args2];
  }
}
