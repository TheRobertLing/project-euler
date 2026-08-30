const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let index = 0

/**
 * @param {number[]} path
 * @param {Set<number>} seen
 */
function backtrack(path, seen) {
  if (path.length === numbers.length) {
    index++

    if (index === 1_000_000) {
      console.log(path.join(""))
    }

    return
  }

  for (const number of numbers) {
    if (seen.has(number)) continue

    // choose
    path.push(number)
    seen.add(number)

    // explore
    backtrack(path, seen)

    // undo choice
    path.pop()
    seen.delete(number)
  }
}

backtrack([], new Set())
