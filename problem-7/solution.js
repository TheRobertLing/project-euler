let i = 2
let next_prime = 3
let i_th_prime = next_prime

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

while (i < 10002) {
  if (isPrime(next_prime)) {
    i_th_prime = next_prime
    i += 1
  }

  next_prime += 2
}

console.log(i_th_prime)
