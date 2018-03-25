'use strict'
/**
 * Разворачиваем односвязный список
 */
class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

const list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))

/**
 * Разворачиваем односвязный список
 * 1) Первый элемент меняем next = null
 * 2) Каждому последующему ставим значение предыдущего
 */
function reverseList(first) {
  if (first === null || first.next === null)
    return first
  let result = new Node(first.value, null)
  while (first.next !== null) {
    first = first.next
    result = new Node(first.value, result)
  }
  return result
}

console.log('before: ', list)
console.log('if null: ', reverseList(null))
console.log('if single elem: ', reverseList(new Node(1, null)))
console.log('after: ', reverseList(list))
