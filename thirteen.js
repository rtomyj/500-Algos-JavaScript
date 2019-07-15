/*
	The problem is very simple.
	Multiplying two positive numbers result in a positive number.
	Multiplying two negative numbers result in a positive number.
	If we sort the array given we can compare the multiples of the two largest negative and positive numbers.
*/

function findMaxMult(items)
{
	let min = [0, 0], max = [0, 0]	// default values for min and max elements of array

	/*
		Handles arrays with sizes less than 2
	*/
	if (items.length < 2)
	{
		if (items.length == 0)	return min
		
		return [ 1, items[0] ]
	}

	/*
		Cycles through array. Finds the max two elements and the min two elements.
		We don't need to sort the array since we only need one traversal (O(n)) to find the min/max elements.
	*/
	items.forEach((item) =>
	{
		if (item < min[0])
		{
			min[1] = min[0]
			min[0] = item
		}
		else if (item < min[1])	min[1] = item
		else if (item > max[1])
		{
			max[0] = max[1]
			max[1] = item
		}
		else if (item > max[0])	max[0] = item
	})

		/*
			Compares the multiples of both the min elements and max elements to see which multiple is bigger.
			Returns the biggest.
		*/
	return (min[0] * min[1] < max[0] * max[1]) ? max : min
}

let items = [-10, -3, 5, 6, -2, 0]
console.log( findMaxMult(items) )