const seen = new Set()

for (let a = 2; a <= 100; a++) {
  for (let b = 2; b <= 100; b++) {
    const bigA = BigInt(a)
    const bigB = BigInt(b)


    seen.add(bigA ** bigB)
  }
}

console.log(seen.size)
