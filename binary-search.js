'use strict'

let isFirstCheck = true

function binarySearch(array, item) {
  const arrLength = array.length

  if (isFirstCheck && array[arrLength - 1] < item || !arrLength) return 'no item in array'

  isFirstCheck = false

  if (arrLength === 1) return array[0] === item ? `found it = ${item}` : 'no item in array'

  const roundedIndex = Math.round(arrLength / 2)
  const center = array[roundedIndex]

  if (center === item) return `binary search in action = ${item}`

  const _array = (center < item) ? array.slice(roundedIndex) : array.slice(0, roundedIndex)

  return binarySearch(_array, item)
}

const array = []
for (let i = 0; i < 10000000; i++) array.push(i);


// const start = Date.now()
console.log(binarySearch(array, 9131))
// console.log('finish:', Date.now() - start)

const list = [1, 2, 4, 5, 6, 7, 8, 10]
console.log(binarySearch(list, 3))
console.log(binarySearch(list, 15))
