let sum = 2

let f_1 = 1
let f_2 = 2

while (f_2 < 4000000) {
  const temp = f_1
  f_1 = f_2
  f_2 += temp

  if (f_2 % 2 === 0) sum += f_2
}

console.log(sum)
