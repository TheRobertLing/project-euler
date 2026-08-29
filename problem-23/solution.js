// 1. need to determine if a number is even abundant in the first place
// 2. 2 sum the numbers again

// 1. To determine if a number is abundant, find divisors and see if sum of divisors exceeds n

function getDivisors(number) {
  if (number === 1) return []

  const divisors = []

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisors.push(i)

      const pair = number / i

      if (pair !== i && pair !== number) {
        divisors.push(pair)
      }
    }
  }

  return divisors
}

function isAbundant(number) {
  const divisors = getDivisors(number)
  const divisorSum = divisors.reduce((total, curr) => total + curr, 0)

  return divisorSum > number
}

function isAbundantSum(i, abundantNumbers) {
  const seen = new Set()

  for (const abundantNumber of abundantNumbers) {
    if (seen.has(i - abundantNumber)) return true
    else seen.add(abundantNumber)
  }

  return false
}

const abundantNumbers = []

for (let i = 1; i <= 28123; i++) {
  if (isAbundant(i)) abundantNumbers.push(i)
}

const abundantSumNumbers = new Set()

for (let i = 0; i < abundantNumbers.length; i++) {
  for (let j = i; j < abundantNumbers.length; j++) {
    abundantSumNumbers.add(abundantNumbers[i] + abundantNumbers[j])
  }
}

let res = 0

for (let i = 1; i <= 28123; i++) {
  if (!abundantSumNumbers.has(i)) res += i
}

console.log(res)
