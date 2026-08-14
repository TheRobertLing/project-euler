const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const specials = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
]

let letterCount = 0

// Numbers 1 - 9
for (const unit of units) {
  letterCount += unit.length
}

// Numbers 10 - 19
for (const special of specials) {
  letterCount += special.length
}

// Numbers 20 - 99
for (const ten of tens) {
  letterCount += ten.length

  for (const unit of units) {
    letterCount += ten.length + unit.length
  }
}

// Numbers 100 - 999

let withinHundredsSum = letterCount // contains the sum of all lengths from 1-99 which are repeated

for (const hundred of units) {
  letterCount += hundred.length + 'hundred'.length
  letterCount += (hundred.length + 'hundred'.length + 'and'.length) * 99 + withinHundredsSum
}

letterCount += 'one'.length + 'thousand'.length

console.log('answer')
console.log(letterCount)
