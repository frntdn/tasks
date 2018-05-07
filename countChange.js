'use strict'

/**
 * Сколькими способами можно разменять сумму в 1$,
 * если имеются монеты в 50, 25, 10, 5 и 1 цент
 */
const firstDenomination = {
  1: 1,
  2: 5,
  3: 10,
  4: 25,
  5: 50
}

function countChange(amount) {
  return cc(amount, Object.keys(firstDenomination).length)
}

function cc(amount, kindsOfCoins) {
  if (amount == 0) return 1
  else if (amount < 0 || kindsOfCoins === 0) return 0
  else return cc(amount, kindsOfCoins - 1) + cc(amount - firstDenomination[kindsOfCoins], kindsOfCoins)
}

console.log('result: ', countChange(0))
console.log('result: ', countChange(1))
console.log('result: ', countChange(5))
console.log('result: ', countChange(100))


// NOTE: пример для 10 центов и монет по 1 и 5 центов(столбцы - шаг, строки - номинал)

//    1 5 10
//   _______
// 1| 1 0 0
// 5| 0 1 1
// матрица количества комбинаций

// Есть 2 условия:
// N(1, i) = 0, кроме N(1, 0) = 1
// N(5, i) = 1

// S(i) = S(i - 1) + N(1, i) + N(5, i) - где S(i) есть искомое число комбинаций
