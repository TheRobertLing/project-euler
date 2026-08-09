let number = 1

while (true) {
  const t = (number * (number + 1)) / 2

  let divisorCount = 0
  for (let i = 1; i * i <= t; i++) {
    if (t % i === 0) {
      divisorCount += 2
      if (i * i === t) divisorCount--
    }
  }

  if (divisorCount > 500) break

  number++
}

console.log((number * (number + 1)) / 2)
