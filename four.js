"using strict"
items = [1, 0, 1, 0, 1, 0, 0, 1]
fillAndAdd(items)
console.log(items)
const sortedItems = mergeTwoArrays(items, leftMostValue = 1)
console.log(sortedItems)


/*
	Loops through bin array. If leftMostValue is spotted it is added to the left side of the array. To keep track of 
	where on the left we want it leftMostCount is used.

	After the first loop is done, the left side of the array is sorted. To sort the right side we use the second loop to 
	add elements equal to len - leftMostCount to push the opposite of leftMostValue.
*/
function fillAndAdd(items, leftMostValue = 0)
{
	let leftMostIndex = 0
	for (let i = 0; i < items.length; i++)
	{
		if (items[i] === leftMostValue)	items[leftMostIndex++] = leftMostValue
	}

	let rightMostValue = Number(!Boolean(leftMostValue))
	for (let i = leftMostIndex; i < items.length; i++)	items[i] = rightMostValue
}


/*
	Creates two arrays. One with the left side of the sorted array, and the other with the right side. Both are then 
	merged and returned as a new array.
*/
function mergeTwoArrays(items, leftMostValue = 0)
{
	let leftValueOccurence = 0;
	let rightValueOccurence = 0;

	for (let i = 0; i < items.length; i++)
	{
		if (items[i] === leftMostValue)	++leftValueOccurence
		else	++rightValueOccurence
	}

	let sortedItems = []
	let rightMostValue = Number(!Boolean(leftMostValue))
	sortedItems.push(...Array(leftValueOccurence).fill(leftMostValue))
	sortedItems.push(...Array(rightValueOccurence).fill(rightMostValue))

	return sortedItems
}