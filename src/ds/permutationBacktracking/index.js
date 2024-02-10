export default function () {
  let str = "ABC";

  backtracking(str.split(""), 0, str.length - 1);
}

function backtracking(strArray, low, high) {
  if (low === high) {
    if (!strArray.join("").includes("AB")) {
      console.log(strArray.join(""));
    }
    return;
  }

  for (let i = low; i <= high; i++) {
    swap(strArray, low, i);
    backtracking(strArray, low + 1, high);
    swap(strArray, low, i);
  }
}

function swap(strArray, pos1, pos2) {
  [strArray[pos1], strArray[pos2]] = [strArray[pos2], strArray[pos1]];
}

function isSafe(strArray, i, j) {}
