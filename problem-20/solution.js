let res = BigInt(1)

for (let i = 2; i <= 100; i++) {
  res *= BigInt(i)
}

let resString = String(res)
let resSum = 0

for (const c of resString) {
  resSum += Number(c)
}

console.log(resSum)
