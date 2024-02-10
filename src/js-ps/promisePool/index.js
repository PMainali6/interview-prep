export default function () {
  const sleep = (t) =>
    new Promise((res) => setTimeout(() => res(`Sleep of ${t}ms resolved`), t));

  const start = Date.now();
  promisePool([() => sleep(500), () => sleep(400)], 1)
    .then(console.log)
    .finally(() => {
      console.log(Date.now() - start);
    });
}

function promisePool(fnList, limit) {
  let currentIdx = 0;
  let inProgressTask = 0;
  let resolvedList = [];

  return new Promise((resolve) => {
    function run() {
      if (resolvedList.length === fnList.length && inProgressTask === 0) {
        resolve(resolvedList);
      }
      while (currentIdx < fnList.length && inProgressTask < limit) {
        let task = fnList[currentIdx];
        currentIdx++;
        inProgressTask++;

        task().then((res) => resolvedFn(res));
      }
    }

    function resolvedFn(res) {
      resolvedList.push(res);
      inProgressTask--;
      run();
    }

    run();
  });
}
