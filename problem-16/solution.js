const res = String(2n ** 1000n)

let sum = 0

for (const c of res) {
  sum += Number(c)
}

console.log(sum)
