//
function isPrime(num) {
  if (num <= 1) return false

  if (num <= 3) return true

  if (num % 2 === 0 || num % 3 === 0) return false

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false
    }
  }

  return true
}

function shiftNumber(str, pos) {
  return Number(str.slice(pos) + str.slice(0, pos))
}

function getNumberRotations(num) {
  const stringified = String(num)
  const res = [num]

  for (let i = 1; i < stringified.length; i++) {
    res.push(shiftNumber(stringified, i))
  }

  return res
}

const isCircular = new Set()
const notCircular = new Set()

for (let i = 2; i < 1000000; i++) {
  if (i > 2 && i % 2 === 0) continue

  if (notCircular.has(i)) continue
  if (isCircular.has(i)) continue

  const rotations = getNumberRotations(i)

  const allPrime = rotations.every(isPrime)

  if (allPrime) {
    rotations.forEach((rotation) => isCircular.add(rotation))
  } else {
    rotations.forEach((rotation) => notCircular.add(rotation))
  }
}

console.log(isCircular.size)
