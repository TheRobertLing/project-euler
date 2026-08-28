import { readFileSync } from 'node:fs'

const nameScore = readFileSync('./0022_names.txt', 'utf-8')
  .trim()
  .split(',')
  .map((name) => name.replaceAll('"', ''))
  .sort((a, b) => a.localeCompare(b))
  .map(
    (name, index) =>
      name
        .split('')
        .reduce(
          (currTotal, currChar) => currTotal + (currChar.codePointAt(0) - 'A'.codePointAt(0) + 1),
          0,
        ) *
      (index + 1),
  )
  .reduce((currTotal, currNameScore) => currTotal + currNameScore, 0)

console.log(nameScore)
