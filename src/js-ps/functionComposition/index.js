export default function () {
  const fn = compose([(x) => x + 1, (x) => 2 * x]);
  console.log(fn(4));
}

// function compose(functions) {
//   return function (x) {
//     let value = x;
//     for (let i = functions.length - 1; i >= 0; i--) {
//       let fn = functions[i];
//       value = fn(value);
//     }

//     return value;
//   };
// }

function compose(functions) {
  return function (x) {
    return functions.reduceRight((acc, f) => f(acc), x);
  };
}
