function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

const factorials = [];

for (let i = 0; i <= 9; i++) {
  factorials[i] = factorial(i);
}

let total = 0;
const limit = 7 * factorials[9];

for (let n = 10; n <= limit; n++) {
  let x = n;
  let sum = 0;

  while (x > 0) {
    const digit = x % 10;
    sum += factorials[digit];
    x = Math.floor(x / 10);
  }

  if (sum === n) {
    total += n;
  }
}

console.log(total);
