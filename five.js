"using strict"
let items = [1, 2, 3, 4, 4]
//let items = [1, 2, 3, 4, 2]
//sortAndFind(items)
hashAndFind(items)


function sortAndFind(items)
{
	items.sort()
	for (let i = 1; i < items.length; i++)
	{
		if (items[i] === items[i -1])
		{
			console.log(`Dup element is ${items[i]}`)
			return
		}
	}
}

function hashAndFind(items)
{
	let min = items[0]
	let max = items[0]
	items.slice(1).forEach(item =>
		{
			if (item < min)	min = item
			if (item > max)	max = item
		}
	)
	let range = max - min
	let hash = Array(range).fill(false)
	for (let i = 0; i < items.length; i++)
	{
		let value = items[i]
		if (hash[value - min] === true)
		{
			console.log(`Dup element is ${value}`)
			return
		}
		else 	hash[value - min] = true
	}

}