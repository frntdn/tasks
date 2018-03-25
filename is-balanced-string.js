'use strict'

/**
 * Необходимо проверить баланс всех открывающихся и закрывающихся скобок - ({[
 * Условия:
 * 1 Скобка открывающася
 * 1.1 Добавляем её в массив открытых скобок
 * 2 Скобка закрывающаяся
 * 2.1 Если это конец строки и нет открытых скобок - return false
 * 2.2 Если закрыващая скобка не равна открывающейся (index - 1) -  return false
 * Проверить что массив скобок пуст
 */
function isBalanced(string) {
  const brackets = '(){}[]'
  let openedBranckets = []
  for (let i = 0, charsCount = string.length; i < charsCount; i++) {
    const char = string[i]
    const indexOfBracket = brackets.indexOf(char)
    if (indexOfBracket >= 0) {
      const isThatOpenedBracket = !(indexOfBracket % 2)
      if (isThatOpenedBracket) {
        openedBranckets.push(char)
      } else {
        if (charsCount - 1 === i && openedBranckets.length === 0)
          return false
        const lastBracket = openedBranckets.pop()
        if (lastBracket !== brackets[indexOfBracket - 1])
          return false
      }
    }
  }
  return !openedBranckets.length
}

console.log(isBalanced('some string(d). [3{4}] string [d{lk} (asd)], ((((([], {})))))'))
console.log(isBalanced('some string(d). [3{4}] string [d{lk} (asd)], ((((([], {}))))) ]'))
