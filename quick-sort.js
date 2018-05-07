// 'use strict'
//
// /**
//  * Быстрая сортировка
//  */
// function quickSort(array) {
//   if (array.length < 2)
//     return array
//   const indexOfMiddleElem = Math.floor(array.length / 2)
//   const middleElem = array[indexOfMiddleElem]
//   const leftSideArr = array.slice(0, indexOfMiddleElem)
//   const rightSideArr = array.slice(indexOfMiddleElem + 1)
//   if (leftSideArr.length === 1 && rightSideArr.length === 1)
//     if (leftSideArr[0] > rightSideArr[0])
//   return [...quickSort(leftSideArr), middleElem, ...quickSort(rightSideArr)]
// }
//
// const arr = [241, 21, 2, 1, 345, 35453, 1, 54, 5, 1]
// console.log('quickSort: ', quickSort(arr))
