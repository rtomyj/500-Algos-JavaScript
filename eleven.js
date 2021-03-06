"use strict"

/*
	Main functionality.
	Completes algorithm 11.
*/
let x = [0, 2, 0, 3, 0, 5, 6, 0, 0]
let y = [1, 8, 9, 10, 15]

let emptyCells = []	// indices of all 0's (empty cells) found in x
let xInd = 0, yInd = 0	// which indexes in lists (x, y) algorithm is currently comparing

/*
	Compares all elements of x with elements of y.
	Terminates once all elements of y have been compared and merged into x
*/
while (yInd < y.length)
{
	/*
		Condition is met once all elements of x have been traversed.
		This happens when the y list has elements greater than all elements of x. All remaining elements of y are added to unused indexes of x.
	*/
	if (xInd == x.length)
	{
		x[emptyCells[0]] = y[yInd]
		emptyCells = emptyCells.splice(1)	// removes used emptyCell from list
		++yInd
		continue
	}

	/*
		Current elements.
	*/
	let xEle = x[xInd]
	let yEle = y[yInd]

	/*
		Unused spot in x is found. 
		Must be traversed over.
	*/
	if (xEle == 0)
	{
		emptyCells.push(xInd)
		++xInd
	}
	/*
		Comparison will be done to element of x with element of y.
	*/
	else 
	{
		if (xEle > yEle)
		{
			/*
				If there is an emptyCell in x then put the y element into the left most empty cell.
			*/
			if (emptyCells.length > 0)
			{
				x[emptyCells[0]] = yEle
				emptyCells = emptyCells.splice(1)	// removes used emptyCell from list
				++yInd
			}
			/*
				If there is no emptyCell then swap the x element with the y element.
				After the swap, the y element is the greater of the two and we are ok to increment the x index.
			*/
			else
			{
				x[xInd] = yEle
				y[yInd] = xEle
				++xInd
			}
		}
		else
		{
			/*
				The x value is less than the y value meaning we still need to find a spot for the y element (don't increment y).
				If there is an emptyCell then the x element needs to go to the left most emptyCell.
				Otherwise, x is already sorted and no swap is needed but the x index needs to be incremented.
			*/
			if (emptyCells.length > 0)
			{
				x[emptyCells[0]] = xEle
				emptyCells = emptyCells.splice(1)	// removes used emptyCell from list
				x[xInd] = 0
				emptyCells.push(xInd)
			}
			++xInd
		}
	}
}

console.log(x)