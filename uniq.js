'use strict'

/**
 * Выбрать все уникальные значения в массиве, которые указаны 1 раз
 */
const arr = [0, 1, 2, 3, 4, 5, 6, 3, 1, 7, 9, 10, 12, 11, 11, 14, 15, 1]; // 0,2,4,5,6,7,9,10,12,14,15

function uniq(array) {
  const howMany = array.reduce((acc, value, index, arr) => {
    if (!acc[value]) acc[value] = 1
    else acc[value] += 1
    return acc
  }, {})
  return Object.keys(howMany).filter(key => howMany[key] === 1)
}

console.log('iniq: ', uniq(arr))
