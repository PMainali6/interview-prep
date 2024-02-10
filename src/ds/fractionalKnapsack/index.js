export default function () {
  const itemList = [
    [50, 600],
    [20, 500],
    [30, 400],
  ];
  const capacity = 70;

  console.log("item's weight + value: ", itemList);
  console.log(fractionalKnapsack(itemList, capacity));
}

/*
    [
        [20, 500]
        [30, 400]
        [50, 600]
    ]
*/

function fractionalKnapsack(itemList, capacity) {
  itemList.sort((a, b) => a[0] - b[0]);

  let res = 0;
  let tempCap = capacity;
  for (let i = 0; i < itemList.length; i++) {
    const [weight, value] = itemList[i];

    if (tempCap !== 0) {
      if (weight <= tempCap) {
        tempCap -= weight;
        res += value;
      } else {
        res += Math.floor((tempCap / weight) * value);
        break;
      }
    }
  }

  return res;
}
