/**
 * Strategy:
 * Figure out what day it ison 1 Jan 1901
 * Iterate through every single month
 *
 *
 */

function isLeapYear(year) {
  if (year % 100 === 0) return year % 400 === 0
  else return year % 4 === 0
}

// 0 for monday, 6 for sunday
let day = (0 + 365) % 7
let res = 0

for (let i = 1901; i < 2001; i++) {
  const daysInMonths = [31, isLeapYear(i) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  for (const month of daysInMonths) {
    if (day === 6) res += 1
    day = (day + month) % 7
  }
}

console.log(res)
