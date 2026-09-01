// How do i even tell if a number is cyclic or not
// could be 123 41414141414
// coudl be 414141414 with no prefix
// How would i tell WHERE the cycle even starts
// How would i tell how LONG single period of the cycle even is
// What about cycles within cycles 14444441 14444441 14444441
// How would i verify a cycle is a cycle and not a subcycle within bigger cycle

// First question: How do we tell where the first cycle STARTS
// Second question: How do we tell where a cycle ends
// Is there a way to know if a fraction will be a cycle by just knowing d

function getRecurringCycleLength(numerator, denominator) {
  let remainder = numerator % denominator

  // If it divides perfectly, there is no recurring cycle
  if (remainder === 0) return 0

  // Maps remainders to the "step number" (count) when they first appeared
  const remainderHistory = new Map()
  let stepCount = 0

  while (remainder !== 0) {
    // If the remainder has been seen before, we found the loop!
    if (remainderHistory.has(remainder)) {
      const firstSeenStep = remainderHistory.get(remainder)
      // Cycle length is the current step minus the step where it first appeared
      return stepCount - firstSeenStep
    }

    // Record the step count for this specific remainder
    remainderHistory.set(remainder, stepCount)

    // Shift left (simulate dropping down a zero in long division)
    remainder = (remainder * 10) % denominator
    stepCount++
  }

  return 0 // Returns 0 if the decimal terminates (like 1/8 = 0.125)
}

let longest = 0
let longestD = 0

for (let d = 1; d < 1000; d++) {
  const currLength = getRecurringCycleLength(1, d)
  if (currLength > longest) {
    longestD = d
    longest = currLength
  }
}

console.log(longest, longestD)
