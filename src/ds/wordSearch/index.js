export default function () {
  const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];

  const word = "ABCCED";

  if (solve(board, word)) {
    console.log("Path found");
  } else {
    console.log("Path not found");
  }
}

function solve(board, word) {
  const col = board[0].length;
  const row = board.length;

  const seen = [];
  for (let i = 0; i < row; i++) {
    seen.push(new Array(col).fill(false));
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const curr = {
        x: i,
        y: j,
      };
      if (walk(board, word, curr, 0, seen, row, col)) {
        return true;
      }
    }
  }

  return false;
}

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function walk(board, word, curr, idx, seen, row, col) {
  // base condtion
  // 1. word found, since we have reached the end of the word
  if (idx === word.length) {
    return true;
  }

  // 2, out of bound
  if (curr.x < 0 || curr.y < 0 || curr.x >= row || curr.y >= col) {
    return false;
  }

  // 3. not the word
  if (board[curr.x][curr.y] !== word[idx]) {
    return false;
  }

  // 4. already visited
  if (seen[curr.x][curr.y]) {
    return false;
  }

  seen[curr.x][curr.y] = true;

  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (
      walk(
        board,
        word,
        { x: curr.x + x, y: curr.y + y },
        idx + 1,
        seen,
        row,
        col
      )
    ) {
      return true;
    }
  }

  seen[curr.x][curr.y] = false;
  return false;
}
