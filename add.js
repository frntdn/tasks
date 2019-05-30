/**
 * Напишите функцию сложения вида add(num1)(num2)...(numN+1)
 */

const add = a => {
	let sum = a
	const func = b => {
		sum += b
		return func
	}
	func.toString = () => sum
	func.valueOf = () => sum
	return func.toString()
};

console.log(add(2)(3)(1));
console.log(add(2)(3)(-2));
