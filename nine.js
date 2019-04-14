let items = [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]

sort(items)
console.log(items)

sort(items, asc=false)
console.log(items)


function sort(items, asc=true)
{
	let lookingFor = null, increment = null
	if (asc)
	{
		lookingFor = 0
		increment = 1
	}
	else
	{
		lookingFor = 2
		increment = -1
	}

	unsortedInd = swapSort(items, lookingFor, 0)
	swapSort(items, lookingFor + increment, unsortedInd)
}


function swapSort(items, lookingFor, unsortedInd) {
	items.forEach((item, index) => {
		if (lookingFor === item) {
			swapElements(items, unsortedInd, index)
			++unsortedInd
		}
	})

	return unsortedInd
}


function swapElements(items, aInd, bInd) {
	let temp = items[aInd]
	items[aInd] = items[bInd]
	items[bInd] = temp
}
