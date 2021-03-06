/*
	The input will be a binary array. This makes it easier to solve the problem. All that is needed is to keep track
	of the last time a 0 was seen. We can then calculate the number of ones traversed between 0's.

	For example:
		[0, 1, 1, 0, 0, 1, 1, 1]
		We can ignore all 1's and only keep track of the last 0 seen (indexOfLastZero)
		If we default indexOfLastZero to -1 we can use the following formula to find the number of 1's in between 0's:
			currentIndex - (indexOfLastZero + 1)
		At the first 0 (index 0): currentIndex - (indexOfLastZero + 1) => 0 - (-1 + 1) = 0 => zero ones in between and we
		can update indexOfLastZero to 0
		The next 0 (index 3): 3 - (0 + 1) = 2 => two ones in between of the last zero and the current 0
		etc...
*/


/*
	Finds the index of a 0 value that will create the longest sub array of only 1's and the transformed 0 element.
	If no 0's are found a -1 will be returned.
*/
function getIndexOfZeroForMaxOnes(items)
{
	let maxOnesFound = maxZeroSubstitutePos = indexOfLastZero = -1;	// defaults

	items.forEach(((item, ind) => {
		/*
			Only 0 value elements are important
		*/
		if (item === 0)
		{
			const numOnesInBetween = ind - (indexOfLastZero + 1)	// calculates 1's in between 0's
			if (numOnesInBetween > maxOnesFound)
			{
				maxOnesFound = numOnesInBetween
				maxZeroSubstitutePos = ind
			}
			indexOfLastZero = ind	// updates index of last 0 seen
		}
	}))

	/*
		One more check to see if 0 to be substituted is the last 0 of the array.
	*/
	const numOnesInBetween = items.length - (indexOfLastZero + 1)
	if (numOnesInBetween > maxOnesFound)	maxZeroSubstitutePos = indexOfLastZero

	return maxZeroSubstitutePos
}

let items = [0, 0, 1, 0, 1, 1, 1, 0, 1, 1]
console.log(`Index of 0 to replace: ${getIndexOfZeroForMaxOnes(items)}`)