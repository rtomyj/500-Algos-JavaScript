let x = [1, 4, 7, 8, 10]
let y = [2, 3, 9]

sortArrays(x, y)
console.log(x)
console.log(y)


/*
	Swaps elements of two arrays. Uses the first element of one array an index to get the other element of the other array.
*/
function swap(x, xInd, y)
{
	let temp = x[xInd]
	x[xInd] = y[0]
	y[0] = temp
}


/*
	Uses thefact that y is always sorted to keep both x and y sorted.
	If x[index] is greater than y[0] then we swap. After which we resort the array.
*/
function sortArrays(x, y)
{
	for (let xInd = 0; xInd < x.length; xInd++)
	{
		if (x[xInd] > y[0])	swap(x, xInd, y)
		y.sort((left, right) => {
			if (left < right) return -1
			else if (left > right) return 1
			else return 0
		})
	}
}