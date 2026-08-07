function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num === 2) return true; // 2 is the only even prime
  if (num % 2 === 0) return false; // Exclude all other even numbers

  // Check odd factors up to the square root of the number
  const boundary = Math.sqrt(num);
  for (let i = 3; i <= boundary; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}


let sum = 0

for (let i = 2; i < 2000000; i++) {
  if (isPrime(i)) {
    sum += i
  }
}

console.log(sum)
