import fs from 'node:fs'

const prevProblemNumber = Number(fs.readFileSync('./data.txt', 'utf8').trim())
const folderName = `problem-${prevProblemNumber + 1}`

fs.mkdirSync(folderName)
fs.writeFileSync(`${folderName}/problem.html`, '')
fs.writeFileSync(`${folderName}/solution.js`, '')
fs.writeFileSync(`${folderName}/review.md`, '')

fs.writeFileSync('./data.txt', String(prevProblemNumber + 1))
