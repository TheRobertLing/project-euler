function factorial(number) {
  let res = 1

  for (let i = 1; i <= number; i++) {
    res *= i
  }

  return res
}

// DP method strategy
/**
 * init 20 * 20 array
 * loop through each row filling in the dp
 * return dp[19][19]
 *
 */

const rows = 21
const cols = 21
const dp = []

for (let i = 0; i < rows; i++) {
  dp[i] = []
  for (let j = 0; j < cols; j++) {
    dp[i][j] = 0
  }
}

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if (i === 0 && j === 0) dp[i][j] = 1
    else dp[i][j] = (dp[i - 1]?.[j] ?? 0) + (dp[i][j - 1] ?? 0)
  }
}

console.log(dp[20][20])

console.log(factorial(40) / (factorial(20) * factorial(20)))
