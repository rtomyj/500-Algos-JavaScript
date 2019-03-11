"using strict"


let items = [8, 7, 2, 5, 3, 1]
let sum = 10
hashAndFind(items, sum)

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