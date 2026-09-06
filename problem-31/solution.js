const coins = [1, 2, 5, 10, 20, 50, 100, 200]
const target = 200

const dp = Array.from(
  { length: coins.length + 1 },
  () => Array(target + 1).fill(0)
)

// One way to make 0: use no coins
for (let row = 0; row <= coins.length; row++) {
  dp[row][0] = 1
}


for (let row = 1; row <= coins.length; row++) {
  const coin = coins[row - 1]

  for (let amount = 1; amount <= target; amount++) {
    // Don't use this coin
    dp[row][amount] = dp[row - 1][amount]

    // Use at least one of this coin
    if (amount >= coin) {
      dp[row][amount] += dp[row][amount - coin]
    }
  }
}

console.log(dp[coins.length][200])
