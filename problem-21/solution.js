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

function getSumOfDivisors(numbers) {
  return numbers.reduce(
    (currentSum, currentValue) => currentSum + currentValue,
    0
  )
}

let sum = 0

for (let a = 1; a < 10000; a++) {
  const b = getSumOfDivisors(getDivisors(a))
  const sumOfB = getSumOfDivisors(getDivisors(b))

  if (sumOfB === a && a !== b) {
    sum += a
  }
}

console.log(sum)
