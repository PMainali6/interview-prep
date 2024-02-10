export default function () {
  let obj = {
    a: 1,
    b(b, c) {
      return [this.a, b, c];
    },
  };

  let p = obj.b.myBind({
    a: 1321,
  });

  console.log(p(34, 4));
}

Object.prototype.myBind = function (ctx) {
  const fn = this;

  return function (...args) {
    return fn.apply(ctx, args);
  };
};
