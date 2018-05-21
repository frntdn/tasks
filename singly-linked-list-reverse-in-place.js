'use strict'

let result
/**
 * Разворачиваем односвязный список на месте
 */
class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }

  get hasNext() {
    return this.next !== null
  }

  invert(previous) {
    if (this.hasNext) this.next.invert(this)
    if (this.next === null) result = this // записываем result
    this.next = previous
  }
}

const list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))))

console.log('before: ', list)
list.invert({...list})
console.log('result: ', result)
