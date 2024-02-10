export default function () {
  const N = 4;
  const board = [];
  const seen = [];

  for (let i = 0; i < N; i++) {
    board.push(new Array(N).fill(0));
    seen.push(new Array(N).fill(0));
  }

  if (nqueens(board, seen, 0, N)) {
    console.log("Board: ");
    for (let i = 0; i < N; i++) {
      console.log(board[i]);
    }
  } else {
    console.log("No solution for: ", N);
  }
}

function nqueens(board, seen, col, N) {
  // base condition
  if (col === N) {
    return true;
  }

  // pre
  for (let i = 0; i < N; i++) {
    if (isSafe(board, seen, i, col, N)) {
      board[i][col] = 1;
      if (nqueens(board, seen, col + 1, N)) {
        return true;
      }
      //post
      board[i][col] = 0;
    }
  }
  return false;
}

function isSafe(board, seen, row, col, N) {
  // check previous col
  for (let i = 0; i < col; i++) {
    if (board[row][i]) {
      return false;
    }
  }

  // check upward diagnol
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) {
      return false;
    }
  }

  // check downward diagnol
  for (let i = row, j = col; i < N && j >= 0; i++, j--) {
    if (board[i][j]) {
      return false;
    }
  }

  return true;
}
