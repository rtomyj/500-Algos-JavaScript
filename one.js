"using strict"


let items = [8, 7, 2, 5, 3, 1]
let sum = 10
sortAndSum(items, sum)

function hashAndFind(items, sum)
{
	let hash = {}
	
	for (let i = 0; i < items.length; i++)
	{
		hash[items[i]] = i

		let operand = sum - items[i]
		
		if (hash[operand] != undefined)		alert( `${items[i]} (index = ${i}) + ${operand} (index = ${hash[operand]}) = ${sum}` )
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
			alert(`${items[left]} + ${items[right]}`)
			right -= 1
		}

		if (left > right)
			break

	}
}