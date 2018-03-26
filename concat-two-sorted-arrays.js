'use strict'

/**
 * Конкатенируем 2 отсортированных массива
 * Создаём новый массив у которого длина равна сумме элементов двух массивов
 * Делаем счетчик для первого и второго массива
 * Начинаем проходиться по пустому результирующему массиву и
 * инкрементировать значения левого и правого массива попутно их сравнивая
 */
function concatTwoSortedArrays(first, second) {
  const resultArray = new Array(first.length + second.length)
  let firstIndex = 0
  let secondIndex = 0
  for (let i = 0; i < resultArray.length; i++) {
    if (first[firstIndex] < second[secondIndex]) {
      resultArray[i] = first[firstIndex]
      firstIndex++
    } else {
      resultArray[i] = second[secondIndex]
      secondIndex++
    }
  }
  return resultArray
}

const a = [-100, 1, 2, 3, 3, 7, 8]
const b = [3, 4, 5, 6, 9, 10, 11]
console.log(concatTwoSortedArrays(a, b))
