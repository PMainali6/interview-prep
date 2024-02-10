export default function () {
  const p1 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1"), 500)
  );
  const p2 = new Promise((_, reject) =>
    setTimeout(() => reject("Promise 2"), 700)
  );
  const p3 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 3"), 400)
  );

  customPromiseAll([p1, p2, p3]).then((res) => console.log(res));
}

function customPromiseAll(promiseList) {}
