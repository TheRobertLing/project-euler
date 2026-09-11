function isPalindrome(num) {
  const numString = String(num)

  let l = 0
  let r = numString.length - 1

  while (l <= r) {
    if (numString[l] !== numString[r]) return false

    l += 1
    r -= 1
  }

  return true
}

function isBinaryPalindrome(n) {
  if (n < 0) return false
  const binaryStr = n.toString(2)
  const reversedStr = binaryStr.split('').reverse().join('')
  return binaryStr === reversedStr
}

let sum = 0

for (let i = 1; i < 1000000; i++) {
  if (isBinaryPalindrome(i) && isPalindrome(i)) sum += i
}

console.log(sum)
