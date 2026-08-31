let previous = 1n
let current = 1n
let next = 2n
let index = 3

while (String(next).length < 1000) {
  previous = current
  current = next
  next = previous + current
  index += 1
}

console.log(index)
