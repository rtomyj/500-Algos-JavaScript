"use strict"

let x = [0, 2, 0, 3, 0, 5, 6, 0, 0]
let y = [1, 8, 9, 10, 15]

let emptyCells = []
let xInd = 0
let yInd = 0

while (yInd < y.length)
{
	if (xInd == x.length)
	{
		x[emptyCells[0]] = y[yInd]
		emptyCells = emptyCells.splice(1)
		++yInd
		continue
	}

	let xEle = x[xInd]
	let yEle = y[yInd]

	if (xEle == 0)
	{
		emptyCells.push(xInd)
		++xInd
	}
	else 
	{
		if (xEle > yEle)
		{
			if (emptyCells.length > 0)
			{
				x[emptyCells[0]] = yEle
				emptyCells = emptyCells.splice(1)
				++yInd
			}
			else
			{
				x[xInd] = yEle
				y[yInd] = xEle
				++xInd
			}
		}
		else
		{
			if (emptyCells.length > 0)
			{
				x[emptyCells[0]] = xEle
				emptyCells = emptyCells.splice(1) 
				x[xInd] = 0
				emptyCells.push(xInd)
			}
			++xInd
		}
	}
}

console.log(x)