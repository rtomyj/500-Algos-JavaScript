let x = [1, 4, 7, 8, 10]
let y = [2, 3, 9]

sortArrays(x, y)
alert(x)
alert(y)

function swap(x, xInd, y)
{
	let temp = x[xInd]
	x[xInd] = y[0]
	y[0] = temp
}

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