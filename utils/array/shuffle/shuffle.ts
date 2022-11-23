export interface Shuffle {
  <T>(array: T[], seed?: string): T[]
}

// creates a random number generator function.
const createRandomGenerator = (seed: number) => {
  const a = 5486230734 // some big numbers
  const b = 6908969830
  const m = 9853205067
  var x = seed
  // returns a random value 0 <= num < 1
  return (seed = x) => {
    // seed is optional. If supplied sets a new seed
    x = (seed * a + b) % m
    return x / m
  }
}
// function creates a 32bit hash of a string
const stringTo32BitHash = (str: string) => {
  var v = 0
  for (var i = 0; i < str.length; i += 1) {
    v += str.charCodeAt(i) << i % 24
  }
  return v % 0xffffffff
}

export const shuffle: Shuffle = (target, seed) => {
  if (seed) {
    let rArr = []
    const arr = [...target]
    const random = createRandomGenerator(stringTo32BitHash(seed))
    while (arr.length > 1) {
      rArr.push(arr.splice(Math.floor(random() * arr.length), 1)[0])
    }
    rArr.push(arr[0])
    return rArr
  }

  const array = [...target]

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}
