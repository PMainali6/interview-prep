export default function () {
  const limited = timeLimit((t) => {
    return new Promise((res) => setTimeout(res, t));
  }, 1000);

  limited(1500).catch(console.log);
}

function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject("Time Limit Excedded"), t);

      fn(...args)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
        .finally(() => clearTimeout(timer));
    });
  };
}
