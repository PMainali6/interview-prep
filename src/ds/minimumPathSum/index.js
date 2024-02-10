export default function () {
  const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ];

  const row = grid.length;
  const col = grid[0].length;

  let res = [];

  for (let i = 0; i < row + 1; i++) {
    res.push(new Array(col + 1).fill(Number.MAX_VALUE));
  }

  res[row][col - 1] = 0;
  minPathSum(grid, res);

  console.log("Minimum path sum: ", res[0][0]);
}

function minPathSum(grid, res) {
  const row = grid.length;
  const col = grid[0].length;

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      res[i][j] = grid[i][j] + Math.min(res[i][j + 1], res[i + 1][j]);
    }
  }
}
