// what is the maximum 4 digit number sum 5 digit number sum etc.

for (let i = 1; i < 20; i++) {
  console.log(9 ** 5 * i, `max possible number for ${i} digits`)
}

// no point in trying numbers greater than 6 digits because the maximum
// sum that can be formed with 7 digits is still a 6 digit number
// no point in trying numbers greater than 354294 because
// the greatest 6 digit value that can be formed is 354294
let sum = 0

for (let i = 2; i <= 354294; i++) {
  const quinticSum = String(i).split('').reduce((prev, curr) => prev += Number(curr) ** 5, 0)

  if (quinticSum === i) sum += i
}

console.log(sum)
