const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

export default function run() {
  const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ];
  const words = ["oath", "pea", "eat", "rain"];

  const trie = new Trie();

  words.forEach((word) => trie.insert(word));

  const row = board.length;
  const col = board[0].length;

  let res = new Set();
  let visited = new Set();

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const curr = { x: i, y: j };
      walk(board, row, col, trie.root, res, curr, visited, "");
    }
  }

  console.log("Words found: ", new Array(...res));
}

function walk(board, row, col, node, res, curr, visited, wordSoFar) {
  // base condtion
  // 1. out of bound
  if (curr.x < 0 || curr.y < 0 || curr.x >= row || curr.y >= col) {
    return;
  }

  // 2. already visited
  if (visited.has(JSON.stringify([curr.x, curr.y]))) {
    return;
  }

  // 3. curr board word not matching the curr letter in the word
  if (!node.children.has(board[curr.x][curr.y])) {
    return;
  }

  visited.add(JSON.stringify([curr.x, curr.y]));
  node = node.children.get(board[curr.x][curr.y]);
  wordSoFar += board[curr.x][curr.y];

  if (node.isWord) {
    res.add(wordSoFar);
    return;
  }

  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    walk(
      board,
      row,
      col,
      node,
      res,
      { x: curr.x + x, y: curr.y + y },
      visited,
      wordSoFar
    );
  }

  visited.delete(JSON.stringify([curr.x, curr.y]));
}

class Node {
  constructor(value = "") {
    this.value = value;
    this.isWord = false;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    if (!word) {
      return false;
    }

    let currNode = this.root;

    for (let letter of word) {
      if (!currNode.children.has(letter)) {
        currNode.children.set(letter, new Node());
      }

      currNode = currNode.children.get(letter);
    }

    currNode.isWord = true;
  }
}
