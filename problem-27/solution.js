// try all combinations
// for ecah combination test how many primes it produces

function isPrime(n) {
  if (n <= 1) return false
  if (n === 2) return true
  if (n % 2 === 0) return false

  const boundary = Math.sqrt(n)
  for (let i = 3; i <= boundary; i += 2) {
    if (n % i === 0) return false
  }

  return true
}

let maxConsecutivePrimeCount = 0
let product = 0

for (let a = -999; a < 1000; a++) {
  for (let b = -999; b < 1000; b++) {
    let consecutivePrimeCount = 0
    let n = 0

    while (isPrime(n * n + a * n + b)) {
      consecutivePrimeCount++
      n++
    }

    if (consecutivePrimeCount > maxConsecutivePrimeCount) {
      product = a * b
      maxConsecutivePrimeCount = consecutivePrimeCount
    }
  }
}

console.log(product)
