export default function () {
  let t = Date.now();
  console.log("Sleep called");
  sleep(1000).then(() => console.log("Sleep ends: ", Date.now() - t));
}

function sleep(duration) {
  return new Promise((resolve, _) => setTimeout(() => resolve(), duration));
}
