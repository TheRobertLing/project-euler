let maxLength = 1
let res = 1

for (let i = 1; i < 1000000; i++) {
  let current = i
  let length = 1

  while (current !== 1) {
    if (current % 2) current = 3 * current + 1
    else current /= 2

    length++
  }

  if (length > maxLength) {
    res = i
    maxLength = length
  }
}

console.log(res)
