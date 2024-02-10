export default function () {
  const coins = [10, 5, 2, 1];
  const amt = 57;

  console.log(`${amt}`);
  console.log(coinChange(coins, amt));
}

// greedy
function coinChange(coinList, sum) {
  let map = new Map();
  let tempSum = sum;

  for (let coin of coinList) {
    if (tempSum === 0) {
      break;
    }
    if (coin <= tempSum) {
      const div = Math.floor(tempSum / coin);
      tempSum -= coin * div;

      map.set(coin, div);
    }
  }

  return map;
}
