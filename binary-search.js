'use strict'

function binarySearch(array, item) {
  const arrLength = array.length
  if (!arrLength)
    return 'no item in array'
  if (arrLength === 1 && array[0] === item)
    return `found it = ${item}`
  const roundedIndex = Math.round(arrLength / 2)
  const center = array[roundedIndex]
  if (center === item)
    return `binary search in action = ${item}`
  const _array = (center < item) ? array.slice(roundedIndex) : array.slice(0, roundedIndex)
  return binarySearch(_array, item)
}

const array = []
for (let i = 0; i < 10000000; i++)
  array.push(i)


const start = Date.now()
console.log(binarySearch(array, 9131))
console.log('finish:', Date.now() - start)
