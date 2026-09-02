import fs from 'node:fs'

const prevProblemNumber = Number(fs.readFileSync('./data.txt', 'utf8').trim())
const folderName = `problem-${prevProblemNumber + 1}`

let problem = ""

try {
  const data = await fetch(`https://projecteuler.net/minimal=${prevProblemNumber + 1}`)
  problem = await data.text()
} catch {
  problem = ""
}

fs.mkdirSync(folderName)
fs.writeFileSync(`${folderName}/problem.html`, problem)
fs.writeFileSync(`${folderName}/solution.js`, '')
fs.writeFileSync(`${folderName}/review.md`, '')

fs.writeFileSync('./data.txt', String(prevProblemNumber + 1))
