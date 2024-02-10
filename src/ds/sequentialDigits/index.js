export default function () {
  const low = 1000;
  const high = 13000;

  const res = [];
  digits(low, high, res);
  console.log(`Low: ${low}, High: ${high}`);
  console.log("Results: ", res);
}

function digits(low, high, res) {
  let queue = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  while (queue.length > 0) {
    const num = queue.shift();

    if (num >= low && num <= high) {
      res.push(num);
    }

    if (num > high) {
      break;
    }

    let onesDigit = num % 10;
    if (onesDigit < 9) {
      let newDigit = num * 10 + (onesDigit + 1);
      queue.push(newDigit);
    }
  }
}
