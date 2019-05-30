/**
 * [1, [1, 2, [3, 4]], [2, 4]] -> [1, 1, 2, 3, 4, 2, 4]
 */

const toFlatArr = arr =>
	arr.reduce((acc, toFlatten) =>
		acc.concat(Array.isArray(toFlatten) ? toFlatArr(toFlatten) : toFlatten)
	, []);

const arr = [1, [1, 2, [3, 4]], [2, 4]];

console.log(toFlatArr(arr));
