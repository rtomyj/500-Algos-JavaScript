/*
	Main functionality
	Completes algorithm 9.
*/
let items = [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]

sort(items)	// sorts 0's, 1's and 2's in ascending order
console.log(items)

sort(items, asc=false)	// sorts 0's, 1's and 2's in descending order
console.log(items)


/*
	Sorts an array that contains 0's, 1's and 2's.
	Sorting should use constant space and be done in linear time.
*/
function sort(items, asc=true)
{
	/*
		Default values for ascending sort.
	*/
	let leftMostValue = 0, increment = 1

	/*
		Changes values for descending sort.
	*/
	if (!asc)
	{
		leftMostValue = 2
		increment = -1
	}

	unsortedInd = swapSort(items, leftMostValue, 0)	// partially sorts array (either 0 (asc) or 2 (desc) are all sorted)
	swapSort(items, leftMostValue + increment, unsortedInd)	// array is sorted
}


/*
	Sorts an array partially by swapping a desired element with an index not yet sorted.
	Ideally to sort an array this method will be called multiple times.
	If there are n possible values for an element then this method should be called n-1 times.
*/
function swapSort(items, lookingFor, unsortedInd) {
	items.forEach((item, index) => {
		/*
			Swaps current value with the value at the unsorted index if current value is the current wanted value.
		*/
		if (lookingFor === item) {
			swapElements(items, unsortedInd, index)
			++unsortedInd	// array is partially sorted, increment index to get to new unsorted index
		}
	})

	return unsortedInd
}


/*
	Swaps two elements within the same list at given indices.
*/
function swapElements(items, aInd, bInd) {
	let temp = items[aInd]
	items[aInd] = items[bInd]
	items[bInd] = temp
}
