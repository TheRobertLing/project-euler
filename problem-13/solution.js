import fs from 'node:fs'

const data = fs.readFileSync('./problem.html', 'utf8')

const lines = data.split('\n')
const numbers = lines.slice(2, lines.length - 2).map((line) => line.slice(0, line.length - 4))

let sum = BigInt(0)

for (const number of numbers) {
  sum += BigInt(number)
}

console.log(String(sum).substring(0, 10))
