"using strict"


let items = [8, 7, 2, 5, 3, 1]
let sum = 10
hashAndFind(items, sum)
//sortAndSum(items, sum)


/*
	An object is used to remember a value and the index it was found in the original array.

	Traverses an array of items and subtracts sum - current value. If that result is in the object  then it means we 
	iterated over it already and we can print out the sum. 
*/
function hashAndFind(items, sum)
{
	let hash = {}

	for (let i = 0; i < items.length; i++)
	{
		hash[items[i]] = i

		let operand = sum - items[i]

		if (hash[operand] != undefined)
		{
			console.log( `${items[i]} (index = ${i}) + ${operand} (index = ${hash[operand]}) = ${sum}` )
		}
	}
}


function sortAndSum(items, sum)
{
	items.sort()
	let left = 0
	let right = items.length -1

	while (true)
	{
		let currentSum = items[left] + items[right]
		if (currentSum > sum)		right -= 1
		else if (currentSum < sum)		left += 1
		else
		{
			console.log(`${items[left]} + ${items[right]}`)
			right -= 1
		}

		if (left > right)
			break
	}
}