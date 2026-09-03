let res = 1

for (let i = 1; i <= 500; i++) {
  const spiralLevel = 2 * i + 1
  const spiralDifference = 2 * i
  const spiralSum = (4 / 2) * (2 * spiralLevel * spiralLevel + (4 - 1) * -spiralDifference)

  res += spiralSum
}

console.log(res)
