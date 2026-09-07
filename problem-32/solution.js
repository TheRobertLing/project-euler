const seen = new Set()
let sumOfProducts = 0

function isPandigital(a, b, product) {
  const combined = `${a}${b}${product}`

  if (combined.length !== 9) return false

  return [...combined].sort().join('') === '123456789'
}

// 1 digit × 4 digits
for (let a = 1; a <= 9; a++) {
  for (let b = 1234; b <= 9876; b++) {
    const product = a * b

    if (product > 9876) break

    if (isPandigital(a, b, product)) {
      seen.add(product)
    }
  }
}

// 2 digits × 3 digits
for (let a = 12; a <= 98; a++) {
  for (let b = 123; b <= 987; b++) {
    const product = a * b

    if (product > 9876) break

    if (isPandigital(a, b, product)) {
      seen.add(product)
    }
  }
}

for (const product of seen) {
  sumOfProducts += product
}

console.log(sumOfProducts)
