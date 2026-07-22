const three_n = Math.floor(999 / 3)
const five_n = Math.floor(999 / 5)
const fifteen_n = Math.floor(999 / 15)

const three_sum = 3 * ((three_n * (three_n + 1)) / 2)
const five_sum = 5 * ((five_n * (five_n + 1)) / 2)
const fifteen_sum = 15 * ((fifteen_n * (fifteen_n + 1)) / 2)

console.log(three_sum + five_sum - fifteen_sum)
