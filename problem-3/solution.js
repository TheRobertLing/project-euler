const factors = []
let number = 600851475143

while (number % 2 === 0) {
  factors.push(2)
  number = Math.floor(number / 2)
}

for (let i = 3; i * i <= number; i += 2) {
  while (number % i === 0) {
    factors.push(i)
    number = Math.floor(number / i)
  }
}

if (number > 2) {
  factors.push(number)
}

console.log(factors[factors.length - 1])
