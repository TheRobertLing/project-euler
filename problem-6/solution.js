const square_of_sum = ((100 * (100 + 1)) / 2) ** 2

let sum_of_squares = 0

for (let i = 1; i < 101; i++) {
  sum_of_squares += i * i
}

console.log(square_of_sum - sum_of_squares)
