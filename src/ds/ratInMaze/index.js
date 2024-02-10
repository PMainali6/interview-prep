export default function () {
  const maze = [
    [1, 0, 1],
    [1, 1, 0],
    [0, 1, 1],
  ];

  const seen = [];
  const path = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  const wall = 0;
  const start = {
    x: 0,
    y: 0,
  };
  const end = {
    x: 2,
    y: 2,
  };

  walk(maze, wall, start, end, seen, path);
  console.log("path: ", path);
}

const dir = [
  //[x,y]
  // [-1, 0], // left
  [1, 0], // right
  // [0, -1], // down
  [0, 1], // up
];

function walk(maze, wall, curr, end, seen, path) {
  // base conditions
  // 1. off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // 2. if its a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  // 3. is it the END ?
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }
  // 4. have already seen this Point
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // recursion
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }

  // post
  path.pop();
  return false;
}
