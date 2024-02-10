export default function run() {
  const input = [
    [0, 2, 100],
    [1, 1, 50],
    [2, 2, 10],
    [3, 1, 20],
    [4, 3, 30],
  ];

  const input1 = [
    [0, 4, 50],
    [1, 1, 5],
    [2, 1, 20],
    [3, 5, 10],
    [4, 5, 80],
  ];

  console.log("Job Id, deadline, profit");
  console.log(input);
  const [res, profit] = jobSequencing(input1);
  console.log(res);
  console.log("Profit: ", profit);
}

/*
    [0, 2, 100],
    [1, 1, 50],
    [4, 3, 30]
    [3, 1, 20],
    [2, 2, 10], 
*/
function jobSequencing(input) {
  input.sort((a, b) => b[2] - a[2]);

  let maxDeadline = 0;
  for (let i = 0; i < input.length; i++) {
    const deadline = input[i][1];

    maxDeadline = Math.max(maxDeadline, deadline);
  }

  const res = new Array(maxDeadline).fill(-1);
  let finalProfit = 0;

  const [jobId, deadline, profit] = input[0];
  res[deadline - 1] = jobId;
  finalProfit += profit;

  for (let i = 1; i < input.length; i++) {
    let [jobId, deadline, profit] = input[i];

    // same spot as the deadline
    if (res[deadline - 1] === -1) {
      res[deadline - 1] = jobId;
      finalProfit += profit;
    } else {
      while (res[deadline - 1] !== -1 && deadline >= 0) {
        deadline--;
      }

      if (deadline >= 0) {
        res[deadline - 1] = jobId;
        finalProfit += profit;
      }
    }
  }

  return [res, finalProfit];
}

run();
