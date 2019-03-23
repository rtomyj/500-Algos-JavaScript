"using strict"
items = [1, 0, 1, 0, 1, 0, 0, 1]
//fillAndAdd(items, leftMostValue=1)
mergeTwoBinaryArrays(items, leftMostValue = 1)

function fillAndAdd(items, leftMostValue = 0)
{
	let rightMostValue = Number(!Boolean(leftMostValue))
	let leftMostIndex = 0

	for (let i = 0; i < items.length; i++)
	{
		if (items[i] === leftMostValue)	items[leftMostIndex++] = leftMostValue
	}
	for (let i = leftMostIndex; i < items.length; i++)	items[i] = rightMostValue

	console.log(items)
}

function mergeTwoBinaryArrays(items, leftMostValue = 0)
{
	let leftValueOccurence = 0;
	let rightValueOccurence = 0;

	for (let i = 0; i < items.length; i++)
	{
		if (items[i] === leftMostValue)	++leftValueOccurence
		else	++rightValueOccurence
	}

	let sorted = []
	let rightMostValue = Number(!Boolean(leftMostValue))
	sorted.push(...Array(leftValueOccurence).fill(leftMostValue))
	sorted.push(...Array(rightValueOccurence).fill(rightMostValue))

	console.log(sorted)
}