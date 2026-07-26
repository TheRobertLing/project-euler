console.time('palindrome')

let max = 0

for (let i = 999; i > 99; i--) {
  if (i * i < max) break

  for (let j = i; j > 99; j--) {
    const product = i * j
    if (product < max) break

    const s = String(product)
    if (s === [...s].reverse().join('')) {
      max = product
    }
  }
}

console.log(max)

console.timeEnd('palindrome')
