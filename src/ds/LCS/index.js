export default function () {
  const s1 = "AXYZ";
  const s2 = "BAZ";
  const m = s1.length;
  const n = s2.length;
  const memo = [];

  for (let i = 0; i < m + 1; i++) {
    memo.push(new Array(n + 1).fill(-1));
  }

  console.log(`s1: ${s1}, s2: ${s2}`);
  console.log("LCS: ", lcs(s1, s2, m, n, memo));

  console.log(`Memo of ${m}*${n}`);
  for (let i = 0; i < memo.length; i++) {
    console.log(memo[i]);
  }
}

function lcs(s1, s2, m, n, memo) {
  // memo check
  if (memo[m][n] !== -1) {
    return memo[m][n];
  }

  // base condition
  if (m === 0 || n === 0) {
    memo[m][n] = 0;
    return 0;
  }

  // recursion
  if (s1[m - 1] === s2[n - 1]) {
    memo[m][n] = 1 + lcs(s1, s2, m - 1, n - 1, memo);
    return memo[m][n];
  } else {
    memo[m][n] = Math.max(
      lcs(s1, s2, m - 1, n, memo),
      lcs(s1, s2, m, n - 1, memo)
    );
    return memo[m][n];
  }
}
